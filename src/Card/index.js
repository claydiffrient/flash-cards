import React, { Component } from "react";
import Text from "@instructure/ui-core/lib/components/Text";
import Button from "@instructure/ui-core/lib/components/Button";
import Grid, {
  GridCol,
  GridRow
} from "@instructure/ui-core/lib/components/Grid";
import { shape, string } from "prop-types";

import themeable from "@instructure/ui-themeable";
import styles from "./styles.css";
import theme from "./theme.js";

export class Card extends Component {
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
    return (
      <div className={styles.card}>
        {this.state.flipped ? (
          <Grid>
            <GridRow>
              <GridCol>
                <Text>{this.props.text.back}</Text>
              </GridCol>
            </GridRow>
            <GridRow>
              <GridCol>
                <Button onClick={this.flipCard}>Flip</Button>
              </GridCol>
            </GridRow>
          </Grid>
        ) : (
          <Grid>
            <GridRow>
              <GridCol>
                <Text>{this.props.text.front}</Text>
              </GridCol>
            </GridRow>
            <GridRow>
              <GridCol>
                <Button onClick={this.flipCard}>Flip</Button>
              </GridCol>
            </GridRow>
          </Grid>
        )}
      </div>
    );
  }
}

export default themeable(theme, styles)(Card);
