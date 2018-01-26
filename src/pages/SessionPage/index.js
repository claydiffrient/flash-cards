import React, { Component } from "react";
import Container from "@instructure/ui-core/lib/components/Container";
import Card from "../../Card";
import { bool } from "prop-types";

import themeable from "@instructure/ui-themeable";
import styles from "./styles.css";
import theme from "./theme.js";

class SessionPage extends Component {
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
      }
    ]
  };

  render() {
    return (
      <Container>
        {this.state.cards.map(c => <Card key={c.id} {...c} />)}
      </Container>
    );
  }
}

export default themeable(theme, styles)(SessionPage);
