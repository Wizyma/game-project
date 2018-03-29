import React, { Fragment } from 'react'
import gql from 'graphql-tag'
import { Query } from 'react-apollo'
import PropTypes from 'prop-types'
import Button from 'material-ui/Button'
import { withStyles } from 'material-ui/styles'
import Loading from './loading'

const GET_MORE_INFO = gql`
    query gameById($id: ID!){
        searchGameById(id: $id){
            name
            id
            summary
			cover {
              cloudinary_id
            }
        }
    }
`

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
    float: 'right',
  },
})

const MoreGameInfo = ({ location, history, classes }) => (
  <Fragment>
    <Button 
      className={classes.button} 
      variant="raised" 
      color="inherit" 
      onClick={(e) => {
        e.preventDefault()
        history.goBack()
      }}
    >
        Back
    </Button>
    <Query query={GET_MORE_INFO} variables={{ id: location.search.split('=')[1] }}>
      {({ loading, error, data }) => {
        if (loading) return <Loading />
        if (error) return `Error!: ${error}`
        console.log(data)
        return (
          <h1>Hello World</h1>
        )
      }}
    </Query>
  </Fragment>
) 

MoreGameInfo.MoreGameInfo = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MoreGameInfo)
