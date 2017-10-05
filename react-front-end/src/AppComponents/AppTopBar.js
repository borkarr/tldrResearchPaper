import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';

const styles = theme =>({
	 root: {
	    marginTop: theme.spacing.unit * 1,
	    width: '100%',
	    left: '225px',
	    position:'relative',
	  }, 
	  menuButton: {
	    marginLeft:  24,
	  },
});

const AppTopBar = (props) =>{
	return (
	    <div className={props.classes.root} >
	      <AppBar position="static" >
	        <Toolbar>
	          <Typography type="title" color="inherit" >
	            TL ; DR Please?
	          </Typography>
	          <Button color="contrast" className = {props.classes.menuButton} >Login</Button>
	          <Button color="contrast" className = {props.classes.menuButton} >Upload Files</Button>
	           <Button color="contrast" className = {props.classes.menuButton} >About This App</Button>
	        </Toolbar>
	      </AppBar>
	    </div>
	  );
};

export default withStyles(styles)(AppTopBar);