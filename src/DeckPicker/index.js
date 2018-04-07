import React, { Component } from "react";
import { func, arrayOf, shape, string } from "prop-types";
import Heading from "@instructure/ui-elements/lib/components/Heading";
import Text from "@instructure/ui-elements/lib/components/Text";
import Container from "@instructure/ui-container/lib/components/Container";
import List, { ListItem } from "@instructure/ui-elements/lib/components/List";
import Button from "@instructure/ui-buttons/lib/components/Button";
import { Link as RRLink } from "react-router-dom";
import Link from "@instructure/ui-elements/lib/components/Link";
import Table from "@instructure/ui-elements/lib/components/Table";
import TextInput from "@instructure/ui-forms/lib/components/TextInput";
import ScreenReaderContent from "@instructure/ui-a11y/lib/components/ScreenReaderContent";
import Popover, {
  PopoverTrigger,
  PopoverContent
} from "@instructure/ui-overlays/lib/components/Popover";
import { connect } from "react-redux";
import { MenuItemSeparator } from "@instructure/ui-menu/lib/components/Menu";

import IconEditLine from "instructure-icons/lib/Line/IconEditLine";
import IconTrashLine from "instructure-icons/lib/Line/IconTrashLine";
import IconMoreLine from "instructure-icons/lib/Line/IconMoreLine";
import IconExportLine from "instructure-icons/lib/Line/IconExportLine";
import IconPlus from "instructure-icons/lib/Line/IconPlusLine";

import Grid, {
  GridCol,
  GridRow
} from "@instructure/ui-layout/lib/components/Grid";
import FileDrop from "@instructure/ui-forms/lib/components/FileDrop";
import Billboard from "@instructure/ui-billboard/lib/components/Billboard";

import themeable from "@instructure/ui-themeable";
import styles from "./styles.css";
import theme from "./theme.js";

import exportDeck from "../utils/export";

import { fetchDecks, addDeck, deleteDeck } from "../actions/decks";

class DeckPicker extends Component {
  static propTypes = {
    fetchDecks: func.isRequired,
    addDeck: func.isRequired,
    deleteDeck: func.isRequired,
    decks: arrayOf(
      shape({
        _id: string,
        name: string,
        cards: arrayOf(
          shape({
            id: string,
            text: shape({
              front: string,
              back: string
            })
          })
        )
      })
    )
  };

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

  handleAddNewDeck = () => {
    this.props.addDeck({
      name: this.state.newDeckInputValue
    });
  };

  handleDelete = deck => {
    if (window.confirm(`Are you sure you want to delete "${deck.name}"?`)) {
      this.props.deleteDeck(deck._id);
    }
  };

  handleSubmitNewForm = e => {
    e.preventDefault();
    this.setState({
      newDeckInputValue: ""
    });
  };

  handleExport = deck => {
    exportDeck(deck);
  };

  parseDeckObject = deckFileResult => {
    try {
      return JSON.parse(deckFileResult).decks;
    } catch (e) {
      // Intentially empty
    }
  };

  handleUploadedFile = file => {
    const reader = new FileReader();
    reader.onloadend = () => {
      const decksToImport = this.parseDeckObject(reader.result);
      decksToImport.forEach(deck => {
        this.props.addDeck(deck);
      });
    };
    reader.readAsText(file);
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
                  <td>
                    <Link as={RRLink} to={`/decks/${deck._id}/`}>
                      {deck.name}
                    </Link>
                  </td>
                  <td style={{ textAlign: "right" }}>
                    <Popover shouldContainFocus shouldReturnFocus on="click">
                      <PopoverTrigger>
                        <Button variant="icon">
                          <IconMoreLine title="More Actions" />
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent>
                        <Container padding="x-small" display="block">
                          <List itemSpacing="small" variant="unstyled">
                            <ListItem>
                              <Link
                                onClick={() => {
                                  this.handleDelete(deck);
                                }}
                              >
                                <IconTrashLine title="Delete" /> &nbsp; Delete
                              </Link>
                            </ListItem>
                            <ListItem>
                              <Link as={RRLink} to={`/decks/${deck._id}/edit`}>
                                <IconEditLine title="Edit" /> &nbsp; Edit
                              </Link>
                            </ListItem>
                            <MenuItemSeparator />
                            <ListItem>
                              <Link
                                onClick={() => {
                                  this.handleExport(deck);
                                }}
                              >
                                <IconExportLine title="Export" /> &nbsp; Export
                              </Link>
                            </ListItem>
                          </List>
                        </Container>
                      </PopoverContent>
                    </Popover>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
        <form onSubmit={this.handleSubmitNewForm}>
          <Container textAlign="start" display="block" margin="small 0 0 0">
            <Heading margin="x-small 0" level="h3" as="h2">
              Add/Import Deck
            </Heading>
            <Grid>
              <GridRow>
                <GridCol width={10} vAlign="bottom">
                  <TextInput
                    layout="inline"
                    label={<Text>New Deck Name</Text>}
                    placeholder="ex. Awesome New Deck"
                    value={this.state.newDeckInputValue}
                    onChange={this.handleNewDeckInputChange}
                  />
                </GridCol>
                <GridCol width={2}>
                  <Button
                    size="medium"
                    type="submit"
                    onClick={this.handleAddNewDeck}
                  >
                    Save
                  </Button>
                </GridCol>
              </GridRow>
              <GridRow>
                <GridCol>
                  <FileDrop
                    accept=".json"
                    onDropAccepted={([file]) => {
                      this.handleUploadedFile(file);
                    }}
                    onDropRejected={() => {
                      this.setState({
                        uploadErrorMessages: [
                          { text: "Invalid file type", type: "error" }
                        ]
                      });
                    }}
                    messages={this.state.uploadErrorMessages}
                    label={
                      <Billboard
                        size="small"
                        message="Drag a .json file here, or click to upload one"
                        hero={<IconPlus />}
                      />
                    }
                  />
                </GridCol>
              </GridRow>
            </Grid>
          </Container>
        </form>
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
