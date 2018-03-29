import React, { Fragment } from 'react'
import gql from 'graphql-tag'
import PropTypes from 'prop-types'
import { Query } from 'react-apollo'
import { withStyles } from 'material-ui/styles'
import Typography from 'material-ui/Typography'
import Loading from './loading'
import Games from './game-card'

const GET_POPULAR = gql`
    query popular($limit: Int!){
        popularGames(limit: $limit){
            name
            id
            summary
			      cover {
              cloudinary_id
            }
        }
    }
`

const styles = {
  primaryTitle: {
    'margin-top': 20,
    'margin-bottom': 20,
    'font-weight': 700,
    'text-align': 'center',
    'font-size': 40,
  },
}

const Popular = ({ limit, classes }) => (
  <Query query={GET_POPULAR} variables={{ limit: limit || 6 }}>
    {({ loading, error, data }) => {
      if (loading) return <Loading />
      if (error) return `Error!: ${error}`
         
      const { popularGames } = data
      return (
        <Fragment>
          <Typography component="h2" className={classes.primaryTitle}>
				Popular Games
          </Typography>
          <Games games={popularGames} />
        </Fragment>
      )
    }}
  </Query>
)

PropTypes.Popular = {
  limit: PropTypes.number,
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(Popular);
