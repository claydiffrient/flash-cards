import React, { Component } from "react";
import Heading from "@instructure/ui-core/lib/components/Heading";
import Text from "@instructure/ui-core/lib/components/Text";
import Container from "@instructure/ui-core/lib/components/Container";
import List, { ListItem } from "@instructure/ui-core/lib/components/List";
import Button from "@instructure/ui-core/lib/components/Button";
import { Link } from "react-router-dom";
import Table from "@instructure/ui-core/lib/components/Table";
import TextInput from "@instructure/ui-core/lib/components/TextInput";
import ScreenReaderContent from "@instructure/ui-core/lib/components/ScreenReaderContent";
import { connect } from "react-redux";

import IconCollectionLine from "instructure-icons/lib/Line/IconCollectionLine";
import IconEditLine from "instructure-icons/lib/Line/IconEditLine";
import IconTrashLine from "instructure-icons/lib/Line/IconTrashLine";

import Modal, {
  ModalHeader,
  ModalBody
} from "@instructure/ui-core/lib/components/Modal";
import Grid, {
  GridCol,
  GridRow
} from "@instructure/ui-core/lib/components/Grid";

import themeable from "@instructure/ui-themeable";
import styles from "./styles.css";
import theme from "./theme.js";

import { fetchDecks, addDeck, deleteDeck } from "../actions/decks";

class DeckPicker extends Component {
  componentDidMount() {
    this.props.fetchDecks();
  }

  state = {
    newDeckInputValue: ""
  };

  handleNewDeckInputChange = e => {
    this.setState({
      newDeckInputValue: e.target.value
    });
  };

  handleAddNewDeck = e => {
    this.props.addDeck({
      name: this.state.newDeckInputValue
    });
  };

  handleDelete = deck => {
    if (window.confirm(`Are you sure you want to delete "${deck.name}"?`))
      this.props.deleteDeck(deck._id);
  };

  render() {
    return (
      <div>
        <Table
          caption={<ScreenReaderContent>Deck Picker</ScreenReaderContent>}
          striped="rows"
          hover
        >
          <thead>
            <tr>
              <th scope="col">Deck Name</th>
              <th scope="col" style={{ textAlign: "right" }}>
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {!this.props.decks.length && (
              <tr>
                <td>You have no decks, add one :)</td>
                <td />
              </tr>
            )}
            {this.props.decks.map(deck => {
              return (
                <tr key={deck._id}>
                  <td>{deck.name}</td>
                  <td style={{ textAlign: "right" }}>
                    <Button
                      variant="icon"
                      margin="0 x-small 0 0"
                      onClick={() => {
                        this.handleDelete(deck);
                      }}
                    >
                      <IconTrashLine title="Delete" />
                    </Button>
                    <Button
                      variant="icon"
                      margin="0 x-small 0 0"
                      as={Link}
                      to={`/decks/${deck._id}/edit`}
                    >
                      <IconEditLine title="Edit" />
                    </Button>
                    <Button
                      variant="icon"
                      margin="0 x-small 0 0"
                      as={Link}
                      to={`/decks/${deck._id}/`}
                    >
                      <IconCollectionLine title="View" />
                    </Button>
                  </td>
                </tr>
              );
            })}
            <tr>
              <td>
                <Grid>
                  <GridRow>
                    <GridCol vAlign="middle">
                      <TextInput
                        label={
                          <ScreenReaderContent>
                            New Deck Name
                          </ScreenReaderContent>
                        }
                        placeholder="ex. Awesome New Deck"
                        value={this.state.newDeckInputValue}
                        onChange={this.handleNewDeckInputChange}
                      />
                    </GridCol>
                    <GridCol vAlign="middle">
                      <Button size="small" onClick={this.handleAddNewDeck}>
                        Save
                      </Button>
                    </GridCol>
                  </GridRow>
                </Grid>
              </td>
              <td />
            </tr>
          </tbody>
        </Table>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  decks: state.decks
});

const mapDispatchToProps = {
  fetchDecks,
  addDeck,
  deleteDeck
};

export const ConnectedDeckPicker = connect(mapStateToProps, mapDispatchToProps)(
  DeckPicker
);

export default themeable(theme, styles)(ConnectedDeckPicker);
