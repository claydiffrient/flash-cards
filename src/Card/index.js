import React, { Component } from "react";
import Text from "@instructure/ui-core/lib/components/Text";
import Button from "@instructure/ui-core/lib/components/Button";
import Grid, {
  GridCol,
  GridRow
} from "@instructure/ui-core/lib/components/Grid";
import { shape, string, bool } from "prop-types";

import themeable from "@instructure/ui-themeable";
import styles from "./styles.css";
import theme from "./theme.js";

import ReactQuill from "react-quill";
import xss from "xss";
import uuid from "uuid/v4";

export class Card extends Component {
  static propTypes = {
    text: shape({
      front: string,
      back: string
    }),
    editMode: bool
  };

  static defaultProps = {
    editMode: false
  };

  state = {
    flipped: false,
    editedFrontText: this.props.text.front,
    editedBackText: this.props.text.back
  };

  flipCard = () => {
    this.setState({ flipped: !this.state.flipped });
  };

  handleBackTextChange = value => {
    this.setState({
      editedBackText: value
    });
  };

  handleFrontTextChange = value => {
    this.setState({
      editedFrontText: value
    });
  };

  renderMarkup = value => {
    return {
      __html: xss(value)
    };
  };

  handleSave = () => {
    const card = {
      _id: this.props.id || uuid(),
      front_text: this.props.text.front,
      back_text: this.props.text.back
    };
    this.props.handleSave(card);
  };

  render() {
    return (
      <div className={styles.card}>
        {this.state.flipped ? (
          <Grid>
            <GridRow>
              <GridCol>
                {this.props.editMode ? (
                  <ReactQuill
                    key="back_editor"
                    value={this.state.editedBackText}
                    onChange={this.handleBackTextChange}
                  >
                    <div className={styles.editArea} />
                  </ReactQuill>
                ) : (
                  <Text>
                    <div
                      dangerouslySetInnerHTML={this.renderMarkup(
                        this.state.editedBackText
                      )}
                    />
                  </Text>
                )}
              </GridCol>
              {!!this.props.editMode && (
                <GridCol width={2}>
                  <Button size="small" onClick={this.flipCard}>
                    Flip
                  </Button>
                  <Button
                    margin="x-small"
                    size="small"
                    onClick={this.handleSave}
                  >
                    Save
                  </Button>
                </GridCol>
              )}
            </GridRow>
            {!this.props.editMode && (
              <GridRow>
                <GridCol>
                  <Button onClick={this.flipCard}>Flip</Button>
                </GridCol>
              </GridRow>
            )}
          </Grid>
        ) : (
          <Grid>
            <GridRow>
              <GridCol>
                {this.props.editMode ? (
                  <ReactQuill
                    key="front_editor"
                    value={this.state.editedFrontText}
                    onChange={this.handleFrontTextChange}
                  >
                    <div className={styles.editArea} />
                  </ReactQuill>
                ) : (
                  <Text>
                    <div
                      dangerouslySetInnerHTML={this.renderMarkup(
                        this.state.editedFrontText
                      )}
                    />
                  </Text>
                )}
              </GridCol>
              {!!this.props.editMode && (
                <GridCol width={2}>
                  <Button onClick={this.flipCard}>Flip</Button>
                </GridCol>
              )}
            </GridRow>
            {!this.props.editMode && (
              <GridRow>
                <GridCol>
                  <Button onClick={this.flipCard}>Flip</Button>
                </GridCol>
              </GridRow>
            )}
          </Grid>
        )}
      </div>
    );
  }
}

export default themeable(theme, styles)(Card);
