import React from 'react';
import './App.css';
import {Layout, Header, Navigation, Content} from 'react-mdl';
import Main from './components/Main';
import {Link} from 'react-router-dom';

function App () {
  return (
    <div className="demo-big-content">
      <Layout>

        <Header
          className="header-color"
          title={
            <Link
              to="/"
              style={{textDecoration: 'none', color: 'white', fontSize: '3em'}}
            >
              {'</>'}
            </Link>
          }
          scroll
        >
          <Navigation>
            <Link to="/">Home</Link>
            <Link to="/portfolio">Portfolio</Link>
            <Link to="/about">About</Link>
            <Link to="/resume">Resume</Link>
          </Navigation>
        </Header>

        <Content>
          <div className="page-content" />
          <Main />
        </Content>
      </Layout>
    </div>
  );
}

export default App;
