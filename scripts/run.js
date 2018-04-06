#!/usr/bin/env node

const { exec, echo, exit, env, set } = require("shelljs");
const moment = require('moment');

set('-v')

const task = process.argv[2];

if (!task) {
  echo('Error: You must provide a task name')
  exit(1);
}

const releaseTag = (env['NODE_ENV'] === 'production') ?
  createTag() :
  `development-${new Date().toISOString().split('T')[0]}`;

const publicUrl = env['PUBLIC_URL'] || "./";

switch (task) {
  case 'deploy':
    prepSentryRelease(releaseTag);
    build(publicUrl, releaseTag);
    deploy(releaseTag);
    finalizeSentryRelease(releaseTag);
    break;
  case 'build':
    build(publicUrl, releaseTag);
    break;
  default:
    echo('Error: Unknown task');
    exit(2);
}

function build(publicUrl, releaseTag) {
  exec(`
  RELEASE_TAG=${releaseTag} parcel build ./src/index.html --public-url ${publicUrl} --no-cache
`);
}

function prepSentryRelease(releaseTag) {
  exec(`sentry-cli releases new ${releaseTag}`)
}

function finalizeSentryRelease(releaseTag) {
  exec(`sentry-cli releases finalize ${releaseTag}`);
  exec(`sentry-cli releases set-commits ${releaseTag} --auto`)
  exec(`sentry-cli releases files ${releaseTag} upload-sourcemaps dist/`)
}


function deploy(newTag) {
  if (
    exec(
      "./node_modules/.bin/gh-pages -d dist -r git@github.com:claydiffrient/flash-cards.git"
    ).code === 0
  ) {
    if (exec("git tag " + newTag).code !== 0) {
      echo("--> Git tag creation failed");
    } else {
      echo("--> Git tag " + newTag + " created successfully");
      exec("git push --tags");
    }
  } else {
    echo("--> Deploy failed, try again later");
  }
}





function createTag() {
  const date = moment().format("YYYY-MM-DD");
  const dateTagRegex = new RegExp(date + "\\.(\\d{1,2})");
  let tags = exec("git tag", { silent: true }).stdout;
  tags = tags.split("\n");
  const tagsTodayNumbers = tags
    .filter(function (tag) {
      return tag.match(dateTagRegex);
    })
    .map(function (tag) {
      return parseInt(tag.split(".")[1], 10);
    })
    .sort(function (a, b) {
      return a - b;
    });
  let newTag = date + ".";
  if (tagsTodayNumbers.length) {
    newTag += tagsTodayNumbers[tagsTodayNumbers.length - 1] + 1;
  } else {
    newTag += "1";
  }
  return newTag
}
