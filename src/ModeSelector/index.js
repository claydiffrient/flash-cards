import React, { Component } from "react";
import Heading from "@instructure/ui-core/lib/components/Heading";
import Text from "@instructure/ui-core/lib/components/Text";
import Container from "@instructure/ui-core/lib/components/Container";
import List, { ListItem } from "@instructure/ui-core/lib/components/List";
import Button from "@instructure/ui-core/lib/components/Button";
import Billboard from "@instructure/ui-core/lib/components/Billboard";
import { Link } from "react-router-dom";

import IconEditLine from "instructure-icons/lib/Line/IconEditLine";
import IconCollectionLine from "instructure-icons/lib/Line/IconCollectionLine";

import themeable from "@instructure/ui-themeable";
import styles from "./styles.css";
import theme from "./theme.js";
import Grid, {
  GridRow,
  GridCol
} from "@instructure/ui-core/lib/components/Grid";

class ModeSelector extends Component {
  render() {
    return (
      <Grid>
        <GridRow>
          <GridCol>
            <Billboard
              message="Edit Mode"
              as={Link}
              to="/edit"
              hero={<IconEditLine />}
            />
          </GridCol>
          <GridCol>
            <Billboard
              message="View Mode"
              as={Link}
              to="/cards"
              hero={<IconCollectionLine />}
            />
          </GridCol>
        </GridRow>
      </Grid>
    );
  }
}

export default themeable(theme, styles)(ModeSelector);
