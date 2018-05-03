import React, { Component } from "react";
import Heading from "@instructure/ui-elements/lib/components/Heading";
import Table from "@instructure/ui-elements/lib/components/Table";
import ScreenReaderContent from "@instructure/ui-a11y/lib/components/ScreenReaderContent";
import Button from "@instructure/ui-buttons/lib/components/Button";
import { Link } from "react-router-dom";
import { shape, string, arrayOf } from "prop-types";
import Flex, { FlexItem } from "@instructure/ui-layout/lib/components/Flex";

import themeable from "@instructure/ui-themeable";
import styles from "./styles.css";
import theme from "./theme.js";

class Results extends Component {
  static propTypes = {
    session: shape({
      correct: arrayOf(string),
      incorrect: arrayOf(string)
    })
  };

  render() {
    const { correct, incorrect } = this.props.session;
    const total = correct.length + incorrect.length;
    return (
      <div className={styles.root}>
        <Heading level="h1" color="primary-inverse">
          Flash Cards
        </Heading>
        <Heading level="h2" color="primary-inverse">
          Session Statistics
        </Heading>
        <Table
          striped="rows"
          hover
          caption={
            <ScreenReaderContent>Session Statistics</ScreenReaderContent>
          }
        >
          <tr>
            <th scope="col">Statistic</th>
            <th scope="col">Value</th>
            <th scope="col">Percent of Total</th>
          </tr>
          <tr>
            <th scope="row">Number Correct</th>
            <td>{correct.length}</td>
            <td>{Number(correct.length / total * 100).toPrecision(4)}%</td>
          </tr>
          <tr>
            <th scope="row">Number Incorrect</th>
            <td>{incorrect.length}</td>
            <td>{Number(incorrect.length / total * 100).toPrecision(4)}%</td>
          </tr>
          <tr>
            <th scope="row">Total</th>
            <td>{total}</td>
            <td>
              <strong>100%</strong>
            </td>
          </tr>
        </Table>
        <Flex justifyItems="center" margin="x-small 0 0 0">
          <FlexItem>
            <Button as={Link} to="/">
              Go Home
            </Button>
          </FlexItem>
        </Flex>
      </div>
    );
  }
}

export default themeable(theme, styles)(Results);
