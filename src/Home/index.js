import React, { Component } from "react";
import Heading from "@instructure/ui-core/lib/components/Heading";
import Text from "@instructure/ui-core/lib/components/Text";
import Container from "@instructure/ui-core/lib/components/Container";
import List, { ListItem } from "@instructure/ui-core/lib/components/List";

import themeable from "@instructure/ui-themeable";
import styles from "./styles.css";
import theme from "./theme.js";

class Home extends Component {
  render() {
    return (
      <div className={styles.root}>
        <Heading level="h1" color="primary-inverse">
          Flash Cards
        </Heading>

        <Container as="div" textAlign="start">
          <Heading color="primary-inverse" margin="0 0 x-small">
            What is This?
          </Heading>
          <Text as="p" textAlign="start" color="primary-inverse">
            Flash Cards is a web app being developed to help with learning
            things. {"It's"} being developed by Clay Diffrient as a project for
            the EDPS 6560 Mulitimedia Learning class in the pursuit of a M.Ed in
            Instructional Design and Educational Technology.
          </Text>
          <Heading color="primary-inverse" margin="0 0 x-small">
            What Will It Do?
          </Heading>
          <Text as="p" textAlign="start" color="primary-inverse">
            I have somewhat grand aspirations for what it will do eventually,
            but for now I hope to do the following things:
          </Text>
          <List>
            <ListItem>
              <Text color="primary-inverse">
                Show a flash card and flip to the other side via user
                interaction.
              </Text>
            </ListItem>
            <ListItem>
              <Text color="primary-inverse">
                Show a flash card and flip to the other side after a given time.
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
                Allow import/export of flash cards in a file format (likely
                JSON)
              </Text>
            </ListItem>
          </List>
        </Container>
      </div>
    );
  }
}

export default themeable(theme, styles)(Home);
