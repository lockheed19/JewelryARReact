import React from "react";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import appLogo from "../images/tanishqlogoplain.png";
import makeStyles from "@material-ui/core/styles/makeStyles";

const Navbar = () => {
  const classes = useStyles();
  return (
    <div>
      <AppBar>
        <Toolbar style={{ backgroundColor: "#fff" }}>
          <div>
            <img src={appLogo} alt="tanishq" className={classes.logoImage} />
          </div>
          <Typography className={classes.navTitles}>JEWELLERY</Typography>
          <Typography className={classes.navTitles}>GOLD</Typography>
          <Typography className={classes.navTitles}>DIAMOND</Typography>
          <Typography className={classes.navTitles}>PLATINUM</Typography>
          <Typography className={classes.navTitles}>COLLECTIONS</Typography>
          <Typography className={classes.navTitles}>RIVAAH</Typography>
          <Typography className={classes.navTitles}>INSIDE TANISHQ</Typography>
          <Typography className={classes.navTitles}>MIA</Typography>
          <Typography className={classes.navTitles}>GIFTING</Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  logoImage: {
    height: "50px",
    width: "70px",
    paddingRight: "80px",
    paddingLeft: "20px",
  },
  navTitles: {
    color: "#000",
    paddingRight: "30px",
  },
}));

export default Navbar;
