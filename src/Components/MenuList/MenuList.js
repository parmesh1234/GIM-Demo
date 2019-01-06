
import React,{Component} from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import List from '@material-ui/core/List';
import Drawer from '@material-ui/core/Drawer';
import { Link } from "react-router-dom";
import './MenuList.module.css';


class Menulist extends Component{
   
    state = {
        selectedIndex: 0,
      };
    
      handleListItemClick = (event, index) => {
        this.setState({ selectedIndex: index });
      };
      
   render(){
    const { classes } = this.props.classes;
    return(
        <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
        paper: classes.drawerPaper,
        }}
        >
        <div className={classes.toolbar} />
        <List>
        <Link to="/">
            <ListItem button key="goInMargin"
             selected={this.state.selectedIndex === 0}
             onClick={event => this.handleListItemClick(event, 0)}>
            <ListItemIcon><InboxIcon /></ListItemIcon>
            <ListItemText primary="Go-In-Margin" />
            </ListItem>
            </Link>
            <Link to="/starred">
            <ListItem button key="Starred" 
            selected={this.state.selectedIndex === 1}
            onClick={event => this.handleListItemClick(event, 1)}>
            <ListItemIcon><MailIcon /></ListItemIcon>
            <ListItemText primary="Starred" />
            </ListItem>
            </Link>

            <Link to="/sendmail">
            <ListItem button key="Send Mail" 
            selected={this.state.selectedIndex === 2}
            onClick={event => this.handleListItemClick(event, 2)}>
            <ListItemIcon><InboxIcon /></ListItemIcon>
            <ListItemText primary="Send Mail" />
            </ListItem>
            </Link>

            <Link to="/draft">
            <ListItem button key="Draft" 
            selected={this.state.selectedIndex === 3}
            onClick={event => this.handleListItemClick(event, 3)}>
            <ListItemIcon><MailIcon /></ListItemIcon>
            <ListItemText primary="Draft" />
            </ListItem>
            </Link>
        </List>
        </Drawer>
    )
   } 
    

};

export default Menulist;
 