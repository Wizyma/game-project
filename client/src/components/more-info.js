import React, { Fragment } from 'react'
import gql from 'graphql-tag'
import PropTypes from 'prop-types'
import { Query } from 'react-apollo'
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

const MoreGameInfo = ({ location }) => (
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
) 


export default MoreGameInfo
