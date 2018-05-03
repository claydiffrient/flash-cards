import React, { Component } from "react";
import { connect } from "react-redux";
import Button from "@instructure/ui-buttons/lib/components/Button";
import Grid, {
  GridCol,
  GridRow
} from "@instructure/ui-layout/lib/components/Grid";
import RangeInput from "@instructure/ui-forms/lib/components/RangeInput";
import Card from "../../Card";
import Results from "../../Results";
import { bool, arrayOf, shape, string, func } from "prop-types";
import { Link } from "react-router-dom";

import themeable from "@instructure/ui-themeable";
import styles from "./styles.css";
import theme from "./theme.js";

import { saveCard, addCard } from "../../actions/cards";
import { fetchDecks } from "../../actions/decks";
import {
  startSession,
  endSession,
  updateSession
} from "../../actions/sessions";

export class SessionPage extends Component {
  static propTypes = {
    isEditing: bool,
    deckId: string,
    decks: arrayOf(
      shape({
        id: string,
        cards: arrayOf(
          shape({
            id: string,
            flipped: bool,
            text: shape({
              front: string,
              back: string
            })
          })
        )
      })
    ),
    session: shape({
      _id: string,
      correct: arrayOf(string),
      incorrect: arrayOf(string)
    }),
    fetchDecks: func.isRequired,
    addCard: func,
    saveCard: func,
    summary: bool,
    startSession: func,
    endSession: func,
    updateSession: func
  };

  static defaultProps = {
    summary: false,
    isEditing: false,
    decks: []
  };

  constructor(props) {
    super(props);
    this.state = {
      currentlyDisplayedIndex: 0,
      showEditor: false,
      timerValue: 0,
      sessionStats: {
        correct: [],
        incorrect: []
      },
      ...this.getDeckProperties(props.decks)
    };
  }

  componentWillMount() {
    this.props.fetchDecks();
  }

  componentDidMount() {
    if (!this.props.isEditing) {
      this.props.startSession();
    }
  }

  componentWillReceiveProps(nextProps) {
    if (this.props !== nextProps) {
      const { selectedDeck, cards } = this.getDeckProperties(nextProps.decks);
      let currentlyDisplayedIndex = this.state.currentlyDisplayedIndex;
      if (this.state.addingCard) {
        currentlyDisplayedIndex = selectedDeck.cards.length - 1;
      }
      this.setState({
        selectedDeck,
        cards,
        currentlyDisplayedIndex,
        addingCard: false
      });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (
      prevState.timerValue !== this.state.timerValue ||
      prevState.currentlyDisplayedIndex !== this.state.currentlyDisplayedIndex
    ) {
      if (this.state.timerValue === 0 && this.timerId) {
        clearTimeout(this.timerId);
        this.timerId = undefined;
      } else {
        if (this.state.timerValue === 0) {
          return;
        } else {
          this.timerId = setTimeout(() => {
            if (this.card) {
              this.card.flipCard();
              clearTimeout(this.timerId);
              this.timerId = undefined;
            }
          }, this.state.timerValue * 1000);
        }
      }
    }
  }

  componentWillUnmount() {
    if (!this.props.isEditing) {
      this.props.endSession(this.props.session._id);
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
    this.setState(
      {
        addingCard: true
      },
      () => {
        this.props.addCard(this.state.selectedDeck._id, {
          text: { front: "New Card Front", back: "New Card Back" }
        });
      }
    );
  };

  handleSave = card => {
    this.props.saveCard(this.state.selectedDeck._id, card);
    this.toggleEditing();
  };

  handleTimerValueChange = val => {
    this.setState({
      timerValue: parseInt(val, 10)
    });
  };

  handleSuccessClick = id =>
    this.props.updateSession(this.props.session._id, {
      correct: id
    });

  handleFailureClick = id =>
    this.props.updateSession(this.props.session._id, {
      incorrect: id
    });

  hasResponded = id =>
    this.props.session.correct.includes(id) ||
    this.props.session.incorrect.includes(id);

  render() {
    const card = this.state.cards[this.state.currentlyDisplayedIndex];
    const position = `${this.state.currentlyDisplayedIndex + 1} / ${
      this.state.cards.length
    }`;
    if (this.props.summary) {
      return <Results session={this.props.session} />;
    }
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
                cardCountPosition={position}
                onSuccess={this.handleSuccessClick}
                onFailure={this.handleFailureClick}
                hasResponded={this.hasResponded(card.id)}
                ref={c => {
                  this.card = c;
                }}
              />
            </GridCol>
          </GridRow>
          <GridRow>
            <GridCol width={3}>
              <Button onClick={this.movePrevious}>Previous</Button>
            </GridCol>
            <GridCol width={this.props.isEditing ? 3 : 6}>
              {this.props.isEditing ? (
                <Button onClick={this.toggleEditing}>Toggle Edit</Button>
              ) : (
                <RangeInput
                  min={5}
                  max={60}
                  step={5}
                  value={this.state.timerValue}
                  onChange={this.handleTimerValueChange}
                  label="Time"
                  layout="inline"
                  size="medium"
                />
              )}
            </GridCol>
            <GridCol>
              {this.props.isEditing && (
                <Button onClick={this.addCard}>Add Card</Button>
              )}
            </GridCol>
            <GridCol width={3}>
              <Button onClick={this.moveNext}>Next</Button>
            </GridCol>
          </GridRow>
          <GridRow>
            <GridCol>
              <Button
                as={Link}
                to={this.props.isEditing ? "/" : "/session_summary"}
              >
                {this.props.isEditing ? "Go Home" : "End Session"}
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
    decks: state.decks,
    session: state.session
  };
};

const mapDispatchToProps = {
  saveCard,
  addCard,
  fetchDecks,
  startSession,
  endSession,
  updateSession
};

export const ConnectedSessionPage = connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionPage);

export default themeable(theme, styles)(ConnectedSessionPage);
