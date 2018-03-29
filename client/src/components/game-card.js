import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from 'material-ui/styles'
import Card, { CardActions, CardContent } from 'material-ui/Card'
import Button from 'material-ui/Button'
import Typography from 'material-ui/Typography'
import Grid from 'material-ui/Grid'
import { Link } from 'react-router-dom'
import { ImgWithId, ImgWithoutId } from './img-card'


const styles = {
  card: {
    maxWidth: 345,
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
    height: 100,
  },
  primaryTitle: {
    'margin-top': 20,
    'margin-bottom': 20,
    'font-weight': 700,
    'text-align': 'center',
    'font-size': 40,
  },
  linkStyle: {
    color: 'inherit',
    'text-decoration': 'none',
  },
}

const Games = ({ games, classes }) => (
  <Grid container className={classes.root}>
    <Grid item sm={12}>
      <Grid container spacing={8} justify="center" direction="row">
        {games.map(({ name, id, summary, cover }) => (
          <Grid item xs={12} md={2} sm={12} key={id}>
            <Card>
              { cover ? <ImgWithId cloudinary_id={cover.cloudinary_id} /> : <ImgWithoutId /> }
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
                  <Link className={classes.linkStyle} to={{ pathname: '/more', search: `id=${id}` }}>Learn More</Link>
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Grid>
  </Grid>
)

PropTypes.Games = {
  limit: PropTypes.number,
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(Games);
