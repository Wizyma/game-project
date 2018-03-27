import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from 'material-ui/styles'
import { CircularProgress } from 'material-ui/Progress'
import Grid from 'material-ui/Grid'

const styles = theme => ({
	progress: {
		margin: theme.spacing.unit * 2,
	},
	root: {
		flexGrow: 1,
	},
});

const Loading = ({ classes }) => (
	<Grid container className={classes.root}>
		<Grid item xs={12} sm={12}>
			<Grid container alignItems="center" justify="center" direction="row">
				<CircularProgress className={classes.progress} />
			</Grid>
		</Grid>
	</Grid>
)


Loading.propTypes = {
	classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(Loading)
