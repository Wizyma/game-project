import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import { ApolloConsumer, Query } from 'react-apollo'
import { gql } from 'apollo-boost'
import Typography from 'material-ui/Typography'
import { withStyles } from 'material-ui/styles'
import Loading from './loading'
import Games from './game-card'

const SEARCH_GAME = gql`
    query searchGame($name: String!, $limit: Int!){
        searchGame(name: $name, limit: $limit){
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

class Search extends Component {
  constructor() {
    super()

    this.state = {
      name: null,
    }
  }

  shouldComponentUpdate(nProps, nState) {
    if (this.state.name !== nState.name) {
      return true
    }
    return false
  }

  render() {
    const { name } = this.state
    const { classes } = this.props

    return (
      <ApolloConsumer>
        { (cache) => {
          cache.cache.watch({ query: gql`query search{ search @client}`,
            callback: ({ result }) => {
              const { search } = result
              this.setState({ name: search })
            }, 
          })
          if (name) {
            return (
              <Query query={SEARCH_GAME} variables={{ name, limit: 12 }}>
                {({ loading, error, data }) => {
                  if (loading) return <Loading />
                  if (error) return `Error!: ${error}`
      
                  const { searchGame } = data
                  if (searchGame.length >= 1) {
                    return (
                      <Fragment>
                        <Typography component="h2" className={classes.primaryTitle}>
                            Research Results
                        </Typography>
                        <Games games={searchGame} />
                      </Fragment>
                    )
                  }
                  return (
                    <Typography component="h2" className={classes.primaryTitle}>
                        No data found
                    </Typography>
                  )
                }}
              </Query>
            )
          }
          return null
        }}
      </ApolloConsumer>
    )
  }
}

PropTypes.Search = {
  name: PropTypes.string,
}

export default withStyles(styles)(Search)
