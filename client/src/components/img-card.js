import React from 'react'
import PropTypes from 'prop-types'
import gql from 'graphql-tag'
import { Query } from 'react-apollo'
import { withStyles } from 'material-ui/styles'
import { CardMedia } from 'material-ui/Card'
import Loading from './loading'


const GET_IMG = gql`
	query image($id: String!){
		cloudinaryImg(id: $id)
	}
`

const styles = {
  media: {
    'max-height': 400,
    'min-height': 350,
  },
}

const ImgCard = ({ cloudinary_id, classes }) => (
  <Query query={GET_IMG} variables={{ id: cloudinary_id }}>
    {({ loading, error, data }) => {
      if (loading) return <Loading />
      if (error) return `Error!: ${error}`
  
      const { cloudinaryImg } = data
      return (
        <CardMedia
          className={classes.media}
          image={cloudinaryImg}
        />
      )
    }}
  </Query>
)

const WithoutId = ({ classes }) => (
  <CardMedia
    className={classes.media}
    image="https://cdn.browshot.com/static/images/not-found.png"
  />
)

ImgCard.propTypes = {
  classes: PropTypes.object.isRequired,
}
 
const ImgWithId = withStyles(styles)(ImgCard)
const ImgWithoutId = withStyles(styles)(WithoutId)

export {
  ImgWithId,
  ImgWithoutId,
}
