import React, {Component} from 'react';
import {
  Tabs,
  Tab,
  Grid,
  Cell,
  CardTitle,
  CardText,
  Card,
  CardActions,
  Button,
} from 'react-mdl';
import Instagram from '../assets/instagram.png';
import Picdetector from '../assets/picdetector.png';
import Coleapp from '../assets/coleapp.png';
import Movieapp from '../assets/movieapp.png';
import Ecommerce from '../assets/ecommerce.png';
import Hotel from '../assets/hotel.png';

class Porfolio extends Component {
  constructor (props) {
    super (props);
    this.state = {
      activeTab: 0,
      card: {
        maxWidth: 45,
      },
    };
  }
  toggleProjects () {
    if (this.state.activeTab === 0) {
      return (
        <React.Fragment>
          <div className="project-grid">
            <Card
              shadow={3}
              style={{width: '320px', height: '320px', margin: 'auto'}}
            >
              <CardTitle
                expand
                style={{
                  color: '#000',
                  background: `url(${Instagram}) bottom right 15% no-repeat #46B6AC`,
                }}
              >
                Instagram Clone
              </CardTitle>
              <CardText>
                Instagram Clone with React Native powered by Expo.
              </CardText>
              <CardActions border>
                <Button
                  onClick={() =>
                    window.open (
                      'https://github.com/tobilastik/Instagram-clone',
                      '_blank'
                    )}
                  colored
                >
                  Github
                </Button>
                <Button
                  onClick={() =>
                    window.open (
                      'https://www.youtube.com/watch?v=UZadCzpu6ZE&t=2s',
                      '_blank'
                    )}
                  colored
                >
                  Live Showcase
                </Button>
              </CardActions>
            </Card>
            <Card
              shadow={3}
              style={{width: '320px', height: '320px', margin: 'auto'}}
            >
              <CardTitle
                expand
                style={{
                  color: '#000',
                  background: `url(${Picdetector}) bottom right 15% no-repeat #46B6AC`,
                }}
              >
                Pic Detector
              </CardTitle>
              <CardText>
                Pic Detector uses Machine Learning to guess what objects are in the photo or picture you upload...
              </CardText>
              <CardActions border>
                <Button
                  onClick={() =>
                    window.open (
                      'https://github.com/tobilastik/pic-detector',
                      '_blank'
                    )}
                  colored
                >
                  Github
                </Button>
                <Button
                  onClick={() =>
                    window.open (
                      'https://www.youtube.com/watch?v=IsycRAzBS5s',
                      '_blank'
                    )}
                  colored
                >
                  Live Showcase
                </Button>
              </CardActions>
            </Card>
            <Card
              shadow={3}
              style={{width: '320px', height: '320px', margin: 'auto'}}
            >
              <CardTitle
                expand
                style={{
                  color: '#fff',
                  background: `url(${Coleapp}) bottom right 15% no-repeat #46B6AC`,
                }}
              >
                Quiz App
              </CardTitle>
              <CardText>
                Quiz and Lyrics App made with React Native Expo
              </CardText>
              <CardActions border>
                <Button
                  onClick={() =>
                    window.open (
                      'https://github.com/tobilastik/quotes-and-quiz-app',
                      '_blank'
                    )}
                  colored
                >
                  Github
                </Button>
                <Button
                  onClick={() =>
                    window.open (
                      'https://www.youtube.com/watch?v=laoI6wN00AI&t=47s',
                      '_blank'
                    )}
                  colored
                >
                  Live Showcase
                </Button>
              </CardActions>
            </Card>
          </div>

          <div className="project-grid">
            <Card
              shadow={3}
              style={{width: '320px', height: '320px', margin: 'auto'}}
            >
              <CardTitle
                expand
                style={{
                  color: '#fff',

                  background: `url(${Movieapp}) bottom right 15% no-repeat #46B6AC`,
                }}
              >
                Movie Search App
              </CardTitle>
              <CardText>
                A web app  for movies and series search, Built with React, Redux and OMDB API.
              </CardText>
              <CardActions border>
                <Button
                  onClick={() =>
                    window.open (
                      'https://github.com/tobilastik/moviesearch',
                      '_blank'
                    )}
                  colored
                >
                  Github
                </Button>
                <Button
                  onClick={() =>
                    window.open (
                      'https://rajioluwatobi.netlify.com/',
                      '_blank'
                    )}
                  colored
                >
                  Visit Website
                </Button>
              </CardActions>
            </Card>
            <Card
              shadow={3}
              style={{width: '320px', height: '320px', margin: 'auto'}}
            >
              <CardTitle
                expand
                style={{
                  color: '#fff',
                  background: `url(${Hotel}) bottom right 15% no-repeat #46B6AC`,
                }}
              >
                Hotel Reservation  App
              </CardTitle>
              <CardText>
                Hotel Reservation Web Application made with React and Redux.
              </CardText>
              <CardActions border>
                <Button
                  onClick={() =>
                    window.open (
                      'https://github.com/tobilastik/hotel-webapp',
                      '_blank'
                    )}
                  colored
                >
                  Github
                </Button>
                <Button
                  onClick={() =>
                    window.open (
                      'https://rajioluwatobi.netlify.com/',
                      '_blank'
                    )}
                  colored
                >
                  Visit Website
                </Button>
              </CardActions>
            </Card>
            <Card
              shadow={3}
              style={{width: '320px', height: '320px', margin: 'auto'}}
            >
              <CardTitle
                expand
                style={{
                  color: '#000',
                  background: `url(${Ecommerce}) bottom right 15% no-repeat #46B6AC`,
                }}
              >
                E-commerce Web App
              </CardTitle>
              <CardText>
                Instagram Clone with React Native powered by Expo.
              </CardText>
              <CardActions border>
                <Button
                  onClick={() =>
                    window.open (
                      'https://github.com/tobilastik/react-ecommerce',
                      '_blank'
                    )}
                  colored
                >
                  Github
                </Button>
                <Button
                  onClick={() =>
                    window.open (
                      'https://rajioluwatobi.netlify.com/',
                      '_blank'
                    )}
                  colored
                >
                  Visit Website
                </Button>
              </CardActions>
            </Card>
          </div>
        </React.Fragment>
      );
    } else if (this.state.activeTab === 1) {
      return (
        <React.Fragment>
          <div className="project-grid">
            <Card
              shadow={3}
              style={{width: '320px', height: '320px', margin: 'auto'}}
            >
              <CardTitle
                expand
                style={{
                  color: '#000',
                  background: `url(${Instagram}) bottom right 15% no-repeat #46B6AC`,
                }}
              >
                Instagram Clone
              </CardTitle>
              <CardText>
                Instagram Clone with React Native powered by Expo.
              </CardText>
              <CardActions border>
                <Button
                  onClick={() =>
                    window.open (
                      'https://github.com/tobilastik/Instagram-clone',
                      '_blank'
                    )}
                  colored
                >
                  Github
                </Button>
                <Button
                  onClick={() =>
                    window.open (
                      'https://www.youtube.com/watch?v=UZadCzpu6ZE&t=2s',
                      '_blank'
                    )}
                  colored
                >
                  Live Showcase
                </Button>
              </CardActions>
            </Card>
            <Card
              shadow={3}
              style={{width: '320px', height: '320px', margin: 'auto'}}
            >
              <CardTitle
                expand
                style={{
                  color: '#000',
                  background: `url(${Picdetector}) bottom right 15% no-repeat #46B6AC`,
                }}
              >
                Pic Detector
              </CardTitle>
              <CardText>
                Pic Detector uses Machine Learning to guess what objects are in the photo or picture you upload...
              </CardText>
              <CardActions border>
                <Button
                  onClick={() =>
                    window.open (
                      'https://github.com/tobilastik/pic-detector',
                      '_blank'
                    )}
                  colored
                >
                  Github
                </Button>
                <Button
                  onClick={() =>
                    window.open (
                      'https://www.youtube.com/watch?v=IsycRAzBS5s',
                      '_blank'
                    )}
                  colored
                >
                  Live Showcase
                </Button>
              </CardActions>
            </Card>
            <Card
              shadow={3}
              style={{width: '320px', height: '320px', margin: 'auto'}}
            >
              <CardTitle
                expand
                style={{
                  color: '#fff',
                  background: `url(${Coleapp}) bottom right 15% no-repeat #46B6AC`,
                }}
              >
                Quiz App
              </CardTitle>
              <CardText>
                Quiz and Lyrics App made with React Native Expo
              </CardText>
              <CardActions border>
                <Button
                  onClick={() =>
                    window.open (
                      'https://github.com/tobilastik/quotes-and-quiz-app',
                      '_blank'
                    )}
                  colored
                >
                  Github
                </Button>
                <Button
                  onClick={() =>
                    window.open (
                      'https://www.youtube.com/watch?v=laoI6wN00AI&t=47s',
                      '_blank'
                    )}
                  colored
                >
                  Live Showcase
                </Button>
              </CardActions>
            </Card>
          </div>
        </React.Fragment>
      );
    } else if (this.state.activeTab === 2) {
      return (
        <React.Fragment>

          <div className="project-grid">
            <Card
              shadow={3}
              style={{width: '320px', height: '320px', margin: 'auto'}}
            >
              <CardTitle
                expand
                style={{
                  color: '#fff',

                  background: `url(${Movieapp}) bottom right 15% no-repeat #46B6AC`,
                }}
              >
                Movie Search App
              </CardTitle>
              <CardText>
                A web app  for movies and series search, Built with React, Redux and OMDB API.
              </CardText>
              <CardActions border>
                <Button
                  onClick={() =>
                    window.open (
                      'https://github.com/tobilastik/moviesearch',
                      '_blank'
                    )}
                  colored
                >
                  Github
                </Button>
                <Button
                  onClick={() =>
                    window.open (
                      'https://rajioluwatobi.netlify.com/',
                      '_blank'
                    )}
                  colored
                >
                  Visit Website
                </Button>
              </CardActions>
            </Card>
            <Card
              shadow={3}
              style={{width: '320px', height: '320px', margin: 'auto'}}
            >
              <CardTitle
                expand
                style={{
                  color: '#fff',
                  background: `url(${Hotel}) bottom right 15% no-repeat #46B6AC`,
                }}
              >
                Hotel Reservation  App
              </CardTitle>
              <CardText>
                Hotel Reservation Web Application made with React and Redux.
              </CardText>
              <CardActions border>
                <Button
                  onClick={() =>
                    window.open (
                      'https://github.com/tobilastik/hotel-webapp',
                      '_blank'
                    )}
                  colored
                >
                  Github
                </Button>
                <Button
                  onClick={() =>
                    window.open (
                      'https://rajioluwatobi.netlify.com/',
                      '_blank'
                    )}
                  colored
                >
                  Visit Website
                </Button>
              </CardActions>
            </Card>
            <Card
              shadow={3}
              style={{width: '320px', height: '320px', margin: 'auto'}}
            >
              <CardTitle
                expand
                style={{
                  color: '#000',
                  background: `url(${Ecommerce}) bottom right 15% no-repeat #46B6AC`,
                }}
              >
                E-commerce Web App
              </CardTitle>
              <CardText>
                Instagram Clone with React Native powered by Expo.
              </CardText>
              <CardActions border>
                <Button
                  onClick={() =>
                    window.open (
                      'https://github.com/tobilastik/react-ecommerce',
                      '_blank'
                    )}
                  colored
                >
                  Github
                </Button>
                <Button
                  onClick={() =>
                    window.open (
                      'https://rajioluwatobi.netlify.com/',
                      '_blank'
                    )}
                  colored
                >
                  Visit Website
                </Button>
              </CardActions>
            </Card>
          </div>
        </React.Fragment>
      );
    }
  }

  render () {
    return (
      <div className="demo-tabs">
        <Tabs
          activeTab={this.state.activeTab}
          onChange={tabId => this.setState ({activeTab: tabId})}
          ripple
        >
          <Tab>All</Tab>
          <Tab>React Native</Tab>
          <Tab>React</Tab>
        </Tabs>
        <Grid>
          <Cell col={12}>
            {this.toggleProjects ()}
          </Cell>
        </Grid>

      </div>
    );
  }
}

export default Porfolio;
