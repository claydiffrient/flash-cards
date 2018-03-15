import React, { Component } from "react";
import { connect } from "react-redux";
import Button from "@instructure/ui-core/lib/components/Button";
import Grid, {
  GridCol,
  GridRow
} from "@instructure/ui-core/lib/components/Grid";
import Card from "../../Card";
import { bool, number, arrayOf, shape, string, func } from "prop-types";
import { Link } from "react-router-dom";

import themeable from "@instructure/ui-themeable";
import styles from "./styles.css";
import theme from "./theme.js";

import { saveCard, addCard } from "../../actions/cards";
import { fetchDecks } from "../../actions/decks";

export class SessionPage extends Component {
  static propTypes = {
    isEditing: bool,
    deckId: string,
    decks: arrayOf(
      shape({
        id: number,
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
      })
    ),
    fetchDecks: func.isRequired,
    addCard: func,
    saveCard: func
  };

  static defaultProps = {
    isEditing: false,
    decks: []
  };

  constructor(props) {
    super(props);
    this.state = {
      currentlyDisplayedIndex: 0,
      showEditor: false,
      ...this.getDeckProperties(props.decks)
    };
  }

  componentWillMount() {
    this.props.fetchDecks();
  }

  componentWillReceiveProps(nextProps) {
    if (
      this.props !== nextProps &&
      !this.compareCardCounts(this.props.decks, nextProps.decks)
    ) {
      const { selectedDeck, cards } = this.getDeckProperties(nextProps.decks);
      this.setState({
        selectedDeck,
        cards
      });
    }
  }

  compareCardCounts = (originalDecks, newDecks) => {
    if (newDecks.length === originalDecks.length) {
      const oDLength = originalDecks.reduce(
        (acc, curVal) => acc + curVal.cards.length,
        0
      );
      const nDLength = newDecks.reduce(
        (acc, curVal) => acc + curVal.cards.length,
        0
      );
      return oDLength === nDLength;
    } else {
      return false;
    }
  };

  getDeckProperties = decks => {
    const selectedDeck = decks.find(d => d._id === this.props.deckId);
    if (selectedDeck) {
      return {
        selectedDeck,
        cards: selectedDeck.cards
      };
    } else {
      return {
        selectedDeck: {},
        cards: []
      };
    }
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

  toggleEditing = () => {
    this.setState({
      showEditor: !this.state.showEditor
    });
  };

  addCard = () => {
    this.props.addCard(this.state.selectedDeck._id, {
      text: { front: "New Card Front", back: "New Card Back" }
    });
  };

  handleSave = card => {
    this.props.saveCard(this.state.selectedDeck._id, card);
    this.toggleEditing();
  };

  render() {
    const card = this.state.cards[this.state.currentlyDisplayedIndex];
    if (card) {
      return (
        <Grid>
          <GridRow>
            <GridCol>
              <Card
                key={card.id}
                {...card}
                handleSave={this.handleSave}
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
              {this.props.isEditing && (
                <Button onClick={this.addCard}>Add Card</Button>
              )}
            </GridCol>
            <GridCol>
              <Button onClick={this.moveNext}>Next</Button>
            </GridCol>
          </GridRow>
          <GridRow>
            <GridCol>
              <Button as={Link} to={`/`}>
                Go Home
              </Button>
            </GridCol>
          </GridRow>
        </Grid>
      );
    } else {
      return (
        <Grid>
          <GridRow>
            <GridCol>
              {this.props.isEditing && (
                <Button onClick={this.addCard}>Add Card</Button>
              )}
            </GridCol>
          </GridRow>
        </Grid>
      );
    }
  }
}

const mapStateToProps = state => {
  return {
    cards: state.cards,
    decks: state.decks
  };
};

const mapDispatchToProps = {
  saveCard,
  addCard,
  fetchDecks
};

export const ConnectedSessionPage = connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionPage);

export default themeable(theme, styles)(ConnectedSessionPage);
