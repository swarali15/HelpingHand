import React from "react";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

const Header = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography className>
          Anthony sistilli
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;