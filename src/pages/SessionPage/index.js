import React, { Component } from "react";
import { connect } from "react-redux";
import Button from "@instructure/ui-core/lib/components/Button";
import Grid, {
  GridCol,
  GridRow
} from "@instructure/ui-core/lib/components/Grid";
import Card from "../../Card";
import { bool, number, arrayOf, shape, string } from "prop-types";

import themeable from "@instructure/ui-themeable";
import styles from "./styles.css";
import theme from "./theme.js";

import { saveCard, fetchCards } from "../../actions/cards";

export class SessionPage extends Component {
  static propTypes = {
    isEditing: bool,
    cards: arrayOf(
      shape({
        id: number,
        flipped: bool,
        text: shape({
          front: string,
          back: string
        })
      })
    )
  };

  static defaultProps = {
    isEditing: false
  };

  state = {
    currentlyDisplayedIndex: 0,
    showEditor: false
  };

  componentDidMount() {
    this.props.fetchCards();
  }

  moveNext = () => {
    let nextVal = this.state.currentlyDisplayedIndex + 1;
    if (nextVal > this.props.cards.length - 1) {
      nextVal = 0;
    }
    this.setState({
      currentlyDisplayedIndex: nextVal
    });
  };

  movePrevious = () => {
    let nextVal = this.state.currentlyDisplayedIndex - 1;
    if (nextVal < 0) {
      nextVal = this.props.cards.length - 1;
    }
    this.setState({
      currentlyDisplayedIndex: nextVal
    });
  };

  toggleEditing = () => {
    this.setState({
      showEditor: !this.state.showEditor
    });
  };

  render() {
    const card = this.props.cards[this.state.currentlyDisplayedIndex];
    if (card) {
      return (
        <Grid>
          <GridRow>
            <GridCol>
              <Card
                key={card._id}
                {...card}
                handleSave={this.props.saveCard}
                editMode={this.state.showEditor}
              />
            </GridCol>
          </GridRow>
          <GridRow>
            <GridCol>
              <Button onClick={this.movePrevious}>Previous</Button>
            </GridCol>
            <GridCol>
              {this.props.isEditing && (
                <Button onClick={this.toggleEditing}>Toggle Edit</Button>
              )}
            </GridCol>
            <GridCol>
              <Button onClick={this.moveNext}>Next</Button>
            </GridCol>
          </GridRow>
        </Grid>
      );
    } else {
      return null;
    }
  }
}

const mapStateToProps = state => ({
  cards: state.cards
});

const mapDispatchToProps = {
  saveCard,
  fetchCards
};

export const ConnectedSessionPage = connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionPage);

export default themeable(theme, styles)(ConnectedSessionPage);
