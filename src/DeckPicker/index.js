import React, { Component } from "react";
import Heading from "@instructure/ui-core/lib/components/Heading";
import Text from "@instructure/ui-core/lib/components/Text";
import Container from "@instructure/ui-core/lib/components/Container";
import List, { ListItem } from "@instructure/ui-core/lib/components/List";
import Button from "@instructure/ui-core/lib/components/Button";
import { Link as RRLink } from "react-router-dom";
import Link from "@instructure/ui-core/lib/components/Link";
import Table from "@instructure/ui-core/lib/components/Table";
import TextInput from "@instructure/ui-core/lib/components/TextInput";
import ScreenReaderContent from "@instructure/ui-core/lib/components/ScreenReaderContent";
import Popover, {
  PopoverTrigger,
  PopoverContent
} from "@instructure/ui-core/lib/components/Popover";
import { connect } from "react-redux";
import { MenuItemSeparator } from "@instructure/ui-core/lib/components/Menu";

import IconCollectionLine from "instructure-icons/lib/Line/IconCollectionLine";
import IconEditLine from "instructure-icons/lib/Line/IconEditLine";
import IconTrashLine from "instructure-icons/lib/Line/IconTrashLine";
import IconMoreLine from "instructure-icons/lib/Line/IconMoreLine";
import IconExportLine from "instructure-icons/lib/Line/IconExportLine";
import IconPlus from "instructure-icons/lib/Line/IconPlusLine";

import Modal, {
  ModalHeader,
  ModalBody
} from "@instructure/ui-core/lib/components/Modal";
import Grid, {
  GridCol,
  GridRow
} from "@instructure/ui-core/lib/components/Grid";
import FileDrop from "@instructure/ui-core/lib/components/FileDrop";
import Billboard from "@instructure/ui-core/lib/components/Billboard";

import themeable from "@instructure/ui-themeable";
import styles from "./styles.css";
import theme from "./theme.js";

import exportDeck from "../utils/export";

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
      console.log(e);
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
                    <Popover
                      shouldContainFocus
                      shouldReturnFocus
                      applicationElement={() => document.getElementById("main")}
                      on="click"
                    >
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
