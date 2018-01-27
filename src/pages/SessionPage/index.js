import React, { Component } from "react";
import Container from "@instructure/ui-core/lib/components/Container";
import Button from "@instructure/ui-core/lib/components/Button";
import Grid, {
  GridCol,
  GridRow
} from "@instructure/ui-core/lib/components/Grid";
import Card from "../../Card";
import { bool } from "prop-types";

import themeable from "@instructure/ui-themeable";
import styles from "./styles.css";
import theme from "./theme.js";

export class SessionPage extends Component {
  static propTypes = {
    isEditing: bool
  };

  static defaultProps = {
    isEditing: false
  };

  state = {
    cards: [
      {
        id: 1,
        text: {
          front: "What is the square root of 9?",
          back: "3"
        },
        flipped: false
      },
      {
        id: 2,
        text: {
          front: "What is the square root of 144?",
          back: "12"
        },
        flipped: false
      }
    ],
    currentlyDisplayedIndex: 0
  };

  moveNext = () => {
    let nextVal = this.state.currentlyDisplayedIndex + 1;
    if (nextVal > this.state.cards.length - 1) {
      nextVal = 0;
    }
    this.setState({
      currentlyDisplayedIndex: nextVal
    });
  };

  movePrevious = () => {
    let nextVal = this.state.currentlyDisplayedIndex - 1;
    if (nextVal < 0) {
      nextVal = this.state.cards.length - 1;
    }
    this.setState({
      currentlyDisplayedIndex: nextVal
    });
  };

  render() {
    const card = this.state.cards[this.state.currentlyDisplayedIndex];
    return (
      <Grid>
        <GridRow>
          <GridCol>
            <Card key={card.id} {...card} />
          </GridCol>
        </GridRow>
        <GridRow>
          <GridCol>
            <Button onClick={this.movePrevious}>Previous</Button>
          </GridCol>
          <GridCol>{this.props.isEditing && <Button>Edit</Button>}</GridCol>
          <GridCol>
            <Button onClick={this.moveNext}>Next</Button>
          </GridCol>
        </GridRow>
      </Grid>
    );
  }
}

export default themeable(theme, styles)(SessionPage);
