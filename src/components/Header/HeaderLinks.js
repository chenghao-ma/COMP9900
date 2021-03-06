/*eslint-disable*/
import React from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import IconButton from "@material-ui/core/IconButton";
// react components for routing our app without refresh
import { Link } from "react-router-dom";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Tooltip from "@material-ui/core/Tooltip";

// @material-ui/icons
import { Person, CloudDownload, Input } from "@material-ui/icons";

// core components
import CustomDropdown from "components/CustomDropdown/CustomDropdown.js";
import Button from "components/CustomButtons/Button.js";

import styles from "assets/jss/material-kit-react/components/headerLinksStyle.js";

const useStyles = makeStyles(styles);

export default function HeaderLinks(props) {
  const classes = useStyles();
  return (
    <List className={classes.list}>
        <ListItem className={classes.listItem}>
            <Button
                href="/login-page"
                color="transparent"
                target="_blank"
                className={classes.navLink}
            >
                <Input className={classes.icons} /> Sign Up
            </Button>
        </ListItem>
        <ListItem className={classes.listItem}>
            <Button
                href="https://www.creative-tim.com/product/material-kit-react?ref=mkr-navbar"
                color="transparent"
                target="_blank"
                className={classes.navLink}
            >
                <CloudDownload className={classes.icons} /> Login
            </Button>
        </ListItem>
      <ListItem className={classes.listItem}>
        <CustomDropdown
          noLiPadding
          buttonText="My Profile"
          buttonProps={{
            className: classes.navLink,
            color: "transparent"
          }}
          buttonIcon={Person}
          dropdownList={[
            <Link to="/" className={classes.dropdownLink}>
              My Order
            </Link>,
            <a
              href="/profile-page"
              target="_blank"
              className={classes.dropdownLink}
            >
              Edit Profile
            </a>,
            <a
              href="https://creativetimofficial.github.io/material-kit-react/#/documentation?ref=mkr-navbar"
              target="_blank"
              className={classes.dropdownLink}
                  >
                  Sign Out
              </a>
          ]}
        />
      </ListItem>

    </List>
  );
}
