import * as React from 'react';
import { FC } from 'react';
import {
  createStyles,
  makeStyles,
  withStyles,
  AppBar,
  Toolbar,
  IconButton,
  Button,
  Icon,
  Theme,
} from '@material-ui/core';
import { Link } from 'react-scroll';

const miniLogo = require('../assets/KSminiLogo.svg').default;
// playground\client\assets\ks-logo-full.svg

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100vw',
      padding: '0',
    },
    appBar: {
      maxHeight: '15vh',
      background: theme.palette.secondary.light
    }, 
    landingButtons: {
      display: "flex",
      justifyContent: "flex-start",
    },
    logo: {
      // alignSelf: "flex-start",
      display: 'flex',
      alignSelf: 'center',
      justifyself: 'center'
    },
    button: {
      // margin: "0.5rem 0.5rem 0.5rem /0.5rem",
      color: theme.palette.text.primary
    },
  })
);

const GlobalCss = withStyles({
  "@global": {
    "html, body": {
      margin: 0,
      padding: 0,
    },
  },
})(() => null);

const NavBar: FC = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <GlobalCss />
      <AppBar className={classes.appBar}>
        <Toolbar className={classes.landingButtons}>
          <IconButton className={classes.button}>
            <Icon component={Link} to="top" activeClass="active" spy smooth>
              <img alt="miniNavLogo" style={{ width: '98%' }} src={ miniLogo }/>
            </Icon>
          </IconButton>
          <Button
            className={classes.button}
            component={Link}
            to="features"
            activeClass="active"
            spy
            offset={-75}
            smooth
          >
            Features
          </Button>
          <Button
            className={classes.button}
            component={Link}
            to="demo"
            activeClass="active"
            spy
            offset={-75}
            smooth
          >
            Demo
          </Button>
          <Button
            className={classes.button}
            component={Link}
            to="getting started"
            activeClass="active"
            spy
            offset={-75}
            smooth
          >
            Getting Started
          </Button>
          <Button
            className={classes.button}
            component={Link}
            to="team"
            activeClass="active"
            spy
            offset={-75}
            smooth
          >
            Team
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default NavBar;
