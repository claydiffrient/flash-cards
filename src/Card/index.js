import React, { Component } from "react";
import Text from "@instructure/ui-core/lib/components/Text";
import Button from "@instructure/ui-core/lib/components/Button";
import { shape, string } from "prop-types";

export default class Card extends Component {
  static propTypes = {
    text: shape({
      front: string,
      back: string
    })
  };

  state = {
    flipped: false
  };

  flipCard = () => {
    this.setState({ flipped: !this.state.flipped });
  };

  render() {
    if (!this.state.flipped) {
      // Show front
      return (
        <div>
          <Text>{this.props.text.front}</Text>
          <Button onClick={this.flipCard}>Flip</Button>
        </div>
      );
    } else {
      // Show back
      return (
        <div>
          <Text>{this.props.text.back}</Text>
          <Button onClick={this.flipCard}>Flip</Button>
        </div>
      );
    }
  }
}
