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

import ReactCardFlip from "react-card-flip";

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
    this.setState({ flipped: !this.state.flipped }, () => {
      if (this.state.flipped) {
        if (this.backBtn) this.backBtn.focus();
      } else {
        if (this.frontBtn) this.frontBtn.focus();
      }
    });
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
      _id: this.props._id || uuid(),
      rev: this.props.rev || null,
      text: {
        front: this.state.editedFrontText,
        back: this.state.editedBackText
      }
    };
    this.props.handleSave(card);
  };

  render() {
    const cardStyles = {
      front: {
        position: "relative"
      }
    };

    return (
      <ReactCardFlip isFlipped={this.state.flipped} cardStyles={cardStyles}>
        <div key="back" className={styles.card}>
          {this.state.flipped && (
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
                    <Button
                      buttonRef={c => {
                        this.backBtn = c;
                      }}
                      size="small"
                      onClick={this.flipCard}
                    >
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
                    <Button
                      onClick={this.flipCard}
                      buttonRef={c => (this.backBtn = c)}
                    >
                      Flip
                    </Button>
                  </GridCol>
                </GridRow>
              )}
            </Grid>
          )}
        </div>

        <div key="front" className={styles.card}>
          {!this.state.flipped && (
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
                    <Button
                      buttonRef={c => (this.frontBtn = c)}
                      size="small"
                      onClick={this.flipCard}
                    >
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
                    <Button
                      onClick={this.flipCard}
                      buttonRef={c => (this.frontBtn = c)}
                    >
                      Flip
                    </Button>
                  </GridCol>
                </GridRow>
              )}
            </Grid>
          )}
        </div>
      </ReactCardFlip>
    );
  }
}

export default themeable(theme, styles)(Card);
