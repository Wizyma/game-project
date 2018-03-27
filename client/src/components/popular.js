import React from 'react'
import gql from 'graphql-tag'
import PropTypes from 'prop-types'
import { Query } from 'react-apollo'
import { withStyles } from 'material-ui/styles'
import Card, { CardActions, CardContent, CardMedia } from 'material-ui/Card'
import Button from 'material-ui/Button'
import Typography from 'material-ui/Typography'
import Grid from 'material-ui/Grid'
import Loading from './loading'

const GET_POPULAR = gql`
    query popular($limit: Int!){
        popularGames(limit: $limit){
            name
            id
            summary
        }
    }
`

const styles = {
	card: {
		maxWidth: 345,
	},
	media: {
		height: 200,
	},
	root: {
		flexGrow: 1,
		display: 'contents',
	},
	ds: {
		height: 'inline-flex',
	},
	paragraph: {
		'text-overflow': 'ellipsis',
		'white-space': 'nowrap',
		overflow: 'hidden',
	},
	title: {
		height: 60,
	},
}

const Popular = ({ limit, classes }) => (
	<Query query={GET_POPULAR} variables={{ limit: limit || 30 }}>
		{({ loading, error, data }) => {
			if (loading) return <Loading />
			if (error) return `Error!: ${error}`
            
			const { popularGames } = data
			return (
				<Grid container className={classes.root}>
					<Grid item sm={12}>
						<Grid container spacing={8} justify="center" direction="row">
							{popularGames.map(({ name, id, summary }) => (
								<Grid item xs={12} sm={2} key={id}>
									<Card>
										<CardMedia
											className={classes.media}
											image="/static/images/cards/contemplative-reptile.jpg"
											title="Contemplative Reptile"
										/>
										<CardContent>
											<Typography gutterBottom variant="headline" component="h2" className={classes.title}>
												{name}
											</Typography>
											<Typography component="p" className={classes.paragraph}>
												{ summary || 'No summary available' }
											</Typography>
										</CardContent>
										<CardActions>
											<Button size="small" color="primary">
                                                Share
											</Button>
											<Button size="small" color="primary">
                                                Learn More
											</Button>
										</CardActions>
									</Card>
								</Grid>
							))}
						</Grid>
					</Grid>
				</Grid>
			)
		}}
	</Query>
)

PropTypes.Popular = {
	limit: PropTypes.number,
	classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(Popular);
