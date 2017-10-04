import React from 'react';
import {withStyles} from 'material-ui/styles';
import List, {ListItem, ListItemText, ListSubheader, ListItemIcon} from 'material-ui/List';
import Collapse from 'material-ui/transitions/Collapse';
import ExpandLess from 'material-ui-icons/ExpandLess';
import ExpandMore from 'material-ui-icons/ExpandMore';
import Favorite from 'material-ui-icons/Favorite'
import InsertDriveFile from 'material-ui-icons/InsertDriveFile'
import RemovedRedEye from 'material-ui-icons/RemoveRedEye'

const style = theme => ({
  root: {
  	margin: theme.spacing.unit*2,
  	paddingTop: theme.spacing.unit*0.04,
    width:'236px',
    height:'50px',
    maxHeight: '60px',
    background: "#EEEEEEE",
    position: 'relative',
    right:'32px',
    top: '0px',
   
  },

  nested: {
  	paddingLeft: theme.spacing.unit*7
  }
});


class NestedList extends React.Component{
	state = {open: false}
	
	handleClick = () => {
		this.setState({open: !this.state.open})
	};

	render(){
		const classes = this.props.classes;
		return (
			<div className={classes.root}>
				<List className={classes.root} >
				        <ListItem button >
					          <ListItemIcon>
					            <Favorite />
					          </ListItemIcon>
				          	  <ListItemText primary="Favorite"  />
				        </ListItem>
				       
				        <ListItem button onClick={this.handleClick} >
				        	<ListItemIcon>
					            <InsertDriveFile />
					          </ListItemIcon>
				          <ListItemText primary="Papers"  />
				          
				        </ListItem>
				        <ListItem button onClick={this.handleClick} >
				        	<ListItemIcon>
					            <RemovedRedEye />
					          </ListItemIcon>
				          
				          	<ListItemText primary="Reading List"  />
				        </ListItem>
		        	</List>
		    </div>
		
		);
	}
}

export default withStyles(style)(NestedList)
