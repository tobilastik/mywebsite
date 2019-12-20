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
                  color: '#fff',
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
                  color: '#fff',
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
                  color: '#fff',
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
                  background: `url(${Coleapp}) bottom right 15% no-repeat #46B6AC`,
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
                  color: '#fff',
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
                  color: '#fff',
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
          </div>       {' '}
        </React.Fragment>
      );
    } else if (this.state.activeTab === 3) {
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
                  background: 'url(http://www.getmdl.io/assets/demos/dog.png) bottom right 15% no-repeat #46B6AC',
                }}
              >
                Update
              </CardTitle>
              <CardText>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Aenan convallis.
              </CardText>
              <CardActions border>
                <Button colored>Github</Button>
                <Button colored>Live Showcase</Button>
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
                  background: 'url(http://www.getmdl.io/assets/demos/dog.png) bottom right 15% no-repeat #46B6AC',
                }}
              >
                Update
              </CardTitle>
              <CardText>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Aenan convallis.
              </CardText>
              <CardActions border>
                <Button colored>Github</Button>
                <Button colored>Live Showcase</Button>
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
                  background: 'url(http://www.getmdl.io/assets/demos/dog.png) bottom right 15% no-repeat #46B6AC',
                }}
              >
                Update
              </CardTitle>
              <CardText>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Aenan convallis.
              </CardText>
              <CardActions border>
                <Button colored>Github</Button>
                <Button colored>Live Showcase</Button>
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
          <Tab>Python</Tab>
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
