import React from 'react';
import Instagram from '../assets/instagram.png';
import Picdetector from '../assets/picdetector.png';
import Coleapp from '../assets/coleapp.png';
import Movieapp from '../assets/movieapp.png';
import Ecommerce from '../assets/ecommerce.png';
import Hotel from '../assets/hotel.png';
import Twitter from '../assets/twitter.jpeg';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import {makeStyles} from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles (theme => ({
  icon: {
    marginRight: theme.spacing (2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing (8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing (4),
  },
  cardGrid: {
    paddingTop: theme.spacing (8),
    paddingBottom: theme.spacing (8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing (6),
  },
}));

const cards = [
  {
    id: 1,
    name: 'Apple Store Web App',
    details: ' An ecommerce web app to shop for Apple Products.',
    glink: 'https://github.com/tobilastik/apple-store-ecommerce',
    weblink: 'https://apple-stores.netlify.com/',
    image: Ecommerce,
  },

  {
    id: 2,
    name: 'Movies Search App',
    details: ' A web app  for movies and series search, Built with React, Redux and OMDB API.',
    glink: 'https://github.com/tobilastik/moviesearch',
    weblink: 'https://rajioluwatobi.netlify.com/',
    image: Movieapp,
  },

  {
    id: 3,
    name: 'Hotel Reservation  App',
    details: ' Hotel Reservation Web Application made with React and Redux.',
    glink: 'https://github.com/tobilastik/hotel-webapp',
    weblink: 'https://rajioluwatobi.netlify.com/',
    image: Hotel,
  },

  {
    id: 4,
    name: 'Twitter Clone',
    details: ' A twitter clone web app with React, Redux and Twitter APIs .',
    glink: 'https://github.com/tobilastik/twitter-clone',
    weblink: 'https://clonedtwitter.netlify.com/',
    image: Twitter,
  },

  {
    id: 5,
    name: 'Instagram Clone',
    details: ' Instagram Clone with React Native powered by Expo.',
    glink: 'https://github.com/tobilastik/Instagram-clone',
    weblink: 'https://www.youtube.com/watch?v=UZadCzpu6ZE&t=2s',
    image: Instagram,
  },

  {
    id: 6,
    name: 'Pic Detector',
    details: 'Pic Detector uses Machine Learning to guess what objects are in the photo or picture you upload.',
    glink: 'https://github.com/tobilastik/pic-detector',
    weblink: 'https://www.youtube.com/watch?v=IsycRAzBS5s',
    image: Picdetector,
  },
  {
    id: 7,
    name: 'Quiz Mobile App',
    details: ' Quiz and Lyrics App made with React Native Expo.',
    glink: 'https://github.com/tobilastik/quotes-and-quiz-app',
    link: 'https://www.youtube.com/watch?v=laoI6wN00AI&t=47s',
    image: Coleapp,
  },
];

export default function Porfolio () {
  const classes = useStyles ();

  return (
    <React.Fragment>
      <div className="portfolio">
        <CssBaseline />
        <main>
          {/* Hero unit */}
          <div className={classes.heroContent}>
            <Container maxWidth="sm">
              <Typography
                component="h1"
                variant="h2"
                align="center"
                color="textPrimary"
                gutterBottom
              >
                React / React Native Projects
              </Typography>
              <Typography
                variant="h5"
                align="center"
                color="textSecondary"
                paragraph
              />

            </Container>
          </div>
          <Container className={classes.cardGrid} maxWidth="md">
            {/* End hero unit */}
            <Grid container spacing={4}>
              {cards.map (card => (
                <Grid item key={card.id} xs={12} sm={6} md={4}>
                  <Card className={classes.card}>
                    <CardMedia
                      className={classes.cardMedia}
                      image={card.image}
                      title="Image title"
                    />
                    <CardContent className={classes.cardContent}>
                      <Typography gutterBottom variant="h5" component="h2">
                        {card.name}
                      </Typography>
                      <Typography>
                        {card.details}
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Button
                        onClick={() => {
                          window.open (card.glink, '_blank');
                        }}
                        size="small"
                        color="primary"
                      >
                        GitHub{' '}
                      </Button>
                      <Button
                        onClick={() => {
                          window.open (card.weblink, '_blank');
                        }}
                        size="small"
                        color="primary"
                      >
                        Visit Website
                      </Button>
                    </CardActions>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Container>
        </main>
        )
      </div>
    </React.Fragment>
  );
}
