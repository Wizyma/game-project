import React from 'react';
import { withStyles } from 'material-ui/styles'
import PropTypes from 'prop-types';
import AppBar from 'material-ui/AppBar'
import Toolbar from 'material-ui/Toolbar'
import Typography from 'material-ui/Typography'

const styles = {
	root: {
		flexGrow: 1,
	},
}

const NavBar = ({ classes }) => (
	<div className={classes.root}>
		<AppBar position="static" color="default">
			<Toolbar>
				<Typography variant="title" color="inherit">
                    Games
				</Typography>
			</Toolbar>
		</AppBar>
	</div>
)

NavBar.propTypes = {
	classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NavBar)
