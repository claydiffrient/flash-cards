import React, { Component } from "react";
import Heading from "@instructure/ui-core/lib/components/Heading";
import Text from "@instructure/ui-core/lib/components/Text";
import Container from "@instructure/ui-core/lib/components/Container";
import List, { ListItem } from "@instructure/ui-core/lib/components/List";
import Button from "@instructure/ui-core/lib/components/Button";
import Modal, {
  ModalBody,
  ModalHeader
} from "@instructure/ui-core/lib/components/Modal";
import DeckPicker from "../DeckPicker";

import themeable from "@instructure/ui-themeable";
import styles from "./styles.css";
import theme from "./theme.js";

class Home extends Component {
  state = {
    deckPickerModalOpen: false
  };

  openDeckPickerModal = () => this.setState({ deckPickerModalOpen: true });
  closeDeckPickerModal = () => this.setState({ deckPickerModalOpen: false });

  render() {
    return (
      <div className={styles.root}>
        <Heading level="h1" color="primary-inverse">
          Flash Cards
        </Heading>

        <Container as="div" textAlign="start">
          <Heading color="primary-inverse" level="h1" margin="0 0 x-small">
            What is This?
          </Heading>
          <Text as="p" color="primary-inverse">
            Flash Cards is a web app being developed to help with learning
            things. {"It's"} being developed by Clay Diffrient as a project for
            the EDPS 6560 Mulitimedia Learning class in the pursuit of a M.Ed in
            Instructional Design and Educational Technology.
          </Text>
          <Heading color="primary-inverse" margin="0 0 x-small">
            What Will It Do?
          </Heading>
          <Text as="p" color="primary-inverse">
            I have somewhat grand aspirations for what it will do eventually,
            but for now I hope to do the following things:
          </Text>
          <List>
            <ListItem>
              <Text color="primary-inverse">
                [DONE] Show a flash card and flip to the other side via user
                interaction.
              </Text>
            </ListItem>
            <ListItem>
              <Text color="primary-inverse">
                [DONE] Show a flash card and flip to the other side after a
                given time.
              </Text>
            </ListItem>
            <ListItem>
              <Text color="primary-inverse">
                Track correct vs. incorrect answers by user input
              </Text>
            </ListItem>
            <ListItem>
              <Text color="primary-inverse">
                Summarize stats at the end of a session
              </Text>
            </ListItem>
            <ListItem>
              <Text color="primary-inverse">
                [DONE] Allow import/export of flash cards in a file format
                (likely JSON)
              </Text>
            </ListItem>
          </List>
        </Container>
        <Container as="div" textAlign="center" margin="medium 0 0 0">
          <Button onClick={this.openDeckPickerModal}>Start</Button>
        </Container>
        <Modal
          label="Deck Selector"
          closeButtonLabel="Close"
          open={this.state.deckPickerModalOpen}
          applicationElement={() => document.getElementById("main")}
          onDismiss={this.closeDeckPickerModal}
          size="medium"
        >
          <ModalHeader>
            <Heading>Choose a Deck of Cards</Heading>
          </ModalHeader>
          <ModalBody>
            <DeckPicker />
          </ModalBody>
        </Modal>
      </div>
    );
  }
}

export default themeable(theme, styles)(Home);
