import React from 'react';
import { withStyles } from 'material-ui/styles'
import PropTypes from 'prop-types';
import AppBar from 'material-ui/AppBar'
import Toolbar from 'material-ui/Toolbar'
import Typography from 'material-ui/Typography'
import Input from 'material-ui/Input'
import Button from 'material-ui/Button'
import Icon from 'material-ui/Icon';

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
  },
  button: {
    margin: theme.spacing.unit,
  },
  rightIcon: {
    marginLeft: theme.spacing.unit,
  },
})

const NavBar = ({ classes }) => (
  <div className={classes.root}>
    <AppBar position="static" color="default">
      <Toolbar>
        <Typography variant="title" color="inherit" className={classes.flex}>
                    Games
        </Typography>
        <div className={classes.container}>
          <Input
            defaultValue="Search a game"
            className={classes.input}
            inputProps={{
              'aria-label': 'Description',
            }}
          />
          <Button className={classes.button} variant="raised" color="inherit">
			Search
            <Icon className={classes.rightIcon}>send</Icon>
          </Button>
        </div>
      </Toolbar>
    </AppBar>
  </div>
)

NavBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NavBar)
