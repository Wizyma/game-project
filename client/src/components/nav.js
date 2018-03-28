import React, { Fragment, PureComponent } from 'react'
import { withStyles } from 'material-ui/styles'
import PropTypes from 'prop-types'
import { ApolloConsumer } from 'react-apollo'
import AppBar from 'material-ui/AppBar'
import Toolbar from 'material-ui/Toolbar'
import Typography from 'material-ui/Typography'
import Input from 'material-ui/Input'
import Button from 'material-ui/Button'
import Icon from 'material-ui/Icon'

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  flex: {
    flex: 1,
  },
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  input: {
    margin: theme.spacing.unit,
    color: 'whitesmoke',
  },
  button: {
    margin: theme.spacing.unit,
  },
  rightIcon: {
    marginLeft: theme.spacing.unit,
  },
})

/* eslint-disable */
class NavBar extends PureComponent {
  render() {
	  const { classes } = this.props
	  return (
		<div className={classes.root}>
			<AppBar position="static" color="primary">
				<Toolbar>
				<Typography variant="title" color="inherit" className={classes.flex}>
				Games
				</Typography>
					<div className={classes.container}>
						<ApolloConsumer>
							{cache => (
								<Fragment>
									<Input
										defaultValue="Search a game"
										className={classes.input}
										inputProps={{
										'aria-label': 'Description',
										}}
										inputRef={input => this.input = input}
									/>
									<Button 
										className={classes.button} 
										variant="raised" 
										color="inherit" 
										onClick={e => {
											e.preventDefault()
											cache.writeData({ data: { search: this.input.value } })
											this.input.value = ''
										}}>
											Search
										<Icon className={classes.rightIcon}>send</Icon>
									</Button>
								</Fragment>
							)}
						</ApolloConsumer>
					</div>
				</Toolbar>
			</AppBar>
		</div>
	  )
  }
}

NavBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NavBar)
