#!/usr/bin/env node

const { exec, echo } = require("shelljs");
const moment = require("moment");

function createDeployTag() {
  const date = moment().format("YYYY-MM-DD");
  const dateTagRegex = new RegExp(date + "\\.(\\d{1,2})");
  let tags = exec("git tag", { silent: true }).stdout;
  tags = tags.split("\n");
  const tagsTodayNumbers = tags
    .filter(function(tag) {
      return tag.match(dateTagRegex);
    })
    .map(function(tag) {
      return parseInt(tag.split(".")[1], 10);
    })
    .sort(function(a, b) {
      return a - b;
    });
  let newTag = date + ".";
  if (tagsTodayNumbers.length) {
    newTag += tagsTodayNumbers[tagsTodayNumbers.length - 1] + 1;
  } else {
    newTag += "1";
  }

  echo("New tag will be: " + newTag);

  if (exec("git tag " + newTag).code !== 0) {
    echo("--> Git tag creation failed");
  } else {
    echo("--> Git tag " + newTag + " created successfully");
    exec("git push --tags");
  }
}

if (
  exec(
    "./node_modules/.bin/gh-pages -d dist -r git@github.com:claydiffrient/flash-cards.git"
  ).code === 0
) {
  createDeployTag();
} else {
  echo("--> Deploy failed, try again later");
}
