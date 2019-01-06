import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import MenuList from '../MenuList/MenuList';
import { BrowserRouter as Router, Route } from "react-router-dom";
import inbox from '../Go-In-Margin/FileUpload';
import draft from '../Draft/Draft';
import sendmail from  '../SendMail/SendMail';
import starred from '../Starred/Starred';

const drawerWidth = 240;

const styles = theme => ({
  root: {
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing.unit * 3,
  },
  toolbar: theme.mixins.toolbar,
});

function ClippedDrawer(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h6" color="inherit" noWrap>
            Go-In-Margin
          </Typography>
        </Toolbar>
      </AppBar>
      <Router>
      <div style={{display: 'flex'}}>
      <MenuList classes = {props} />
        <hr />
        <main className={classes.content}>
        <div className={classes.toolbar} />
        <Route exact path="/" component={inbox} />
        <Route path="/draft" component={draft} />
        <Route path="/starred" component={starred} />
        <Route path="/sendmail" component={sendmail} />
      </main>
      </div>
      
    </Router>
     
      
    </div>
  );
}

ClippedDrawer.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ClippedDrawer);
