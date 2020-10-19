import React from "react";
import Instagram from "../assets/instagram.png";
import Picdetector from "../assets/picdetector.png";
import Coleapp from "../assets/coleapp.png";
import Cafam from "../assets/cafam.png";
import Exalt from "../assets/Exalt.png";
import Finvest from "../assets/finvest.png";
import Pitch from "../assets/pitch.png";
import Ags from "../assets/ags.png";
import Eazzicash from "../assets/eazzicash.png";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
  cardMedia: {
    paddingTop: "56.25%", // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));

const cards = [
  {
    id: 5,
    name: "Picstagram",
    details: "Picstagram built with React Native powered by Expo.",
    glink: "https://github.com/tobilastik/Instagram-clone",
    weblink: "https://www.youtube.com/watch?v=UZadCzpu6ZE&t=2s",
    image: Instagram,
  },

  {
    id: 10,
    name: "The Pitch App    ",
    details:
      "The Student Finance Club of Obafemi Awolowo University (SFC OAU) onboarding application",
    glink: "https://github.com/tobilastik/ThePitchApp",
    weblink: "https://play.google.com/store/apps/details?id=com.thepitchapp",
    image: Pitch,
  },

  {
    id: 6,
    name: "Pic Detector",
    details:
      "Pic Detector uses Machine Learning to guess what objects are in the photo or picture you upload.",
    glink:
      "https://play.google.com/store/apps/details?id=com.Shadownet.picDetectorAndroid",
    weblink: "https://www.youtube.com/watch?v=IsycRAzBS5s",
    image: Picdetector,
  },

  {
    id: 7,
    name: "Quiz Mobile App",
    details: " Quiz and Lyrics App made with React Native Expo.",
    glink:
      "https://play.google.com/store/apps/details?id=com.Jcole.jcolequotesandlyricsquizandroid",
    link: "https://www.youtube.com/watch?v=laoI6wN00AI&t=47s",
    image: Coleapp,
  },
];

const clients = [
  {
    id: 8,
    name: "Exalt Churches App",
    details:
      "Watch or listen to messages from Pastors from your church, Browse through the BibleConnect with your Church Online, Request prayer, submit questions and much more through the app.",
    glink: "https://play.google.com/store/apps/details?id=com.exaltapp",
    link: "https://apps.apple.com/ng/app/exalt-churches-app/id1526824126",
    image: Exalt,
  },

  {
    id: 6,
    name: "AGS Tribe",
    details:
      "AGS Tribe is a Pan African Network of female professionals and entrepreneurs.",
    glink:
      "https://play.google.com/store/apps/details?id=com.itskillscenter.agsnew",
    weblink:
      "https://play.google.com/store/apps/details?id=com.itskillscenter.agsnew",
    image: Ags,
  },

  {
    id: 5,
    name: "Eazzicash Application",
    details:
      "Get quick financial support, loans and pawn your for exchange to secure your loan.",
    glink: "https://play.google.com/store/apps/details?id=com.eazzicash",
    weblink: "https://play.google.com/store/apps/details?id=com.eazzicash",
    image: Eazzicash,
  },

  {
    id: 7,
    name: "Finvestor",
    details:
      "Finvestor is an online education and information community for investors and traders in the financial markets.",
    glink:
      "https://play.google.com/store/apps/details?id=com.itskillscenter.finvestorng",
    link:
      "https://play.google.com/store/apps/details?id=com.itskillscenter.finvestorng",
    image: Finvest,
  },

  {
    id: 9,
    name: "CAFAM Church",
    details:
      "Watch or listen to messages from Pastors from your church, Browse through the BibleConnect with your Church Online, Request prayer, submit questions and much more through the app.",
    glink: "https://play.google.com/store/apps/details?id=com.cafamchurchapp",
    link: "https://apps.apple.com/ng/app/cafam-church/id1526943641",
    image: Cafam,
  },
];

export default function Porfolio() {
  const classes = useStyles();

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
                Recent Projects
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
              {cards.map((card) => (
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
                      <Typography>{card.details}</Typography>
                    </CardContent>
                    <CardActions>
                      <Button
                        onClick={() => {
                          window.open(card.glink, "_blank");
                        }}
                        size="small"
                        color="primary"
                      >
                        GitHub{" "}
                      </Button>
                      <Button
                        onClick={() => {
                          window.open(card.weblink, "_blank");
                        }}
                        size="small"
                        color="primary"
                      >
                        Playstore
                      </Button>
                    </CardActions>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Container>
        </main>
      </div>

      <div>
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
                Clients Projects
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
              {clients.map((card) => (
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
                      <Typography>{card.details}</Typography>
                    </CardContent>
                    <CardActions>
                      <Button
                        onClick={() => {
                          window.open(card.glink, "_blank");
                        }}
                        size="small"
                        color="primary"
                      >
                        Play Store
                      </Button>
                      <Button
                        onClick={() => {
                          window.open(card.weblink, "_blank");
                        }}
                        size="small"
                        color="primary"
                      >
                        App Store
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
