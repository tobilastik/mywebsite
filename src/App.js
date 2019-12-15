import React from 'react';
import './App.css';
import {Layout, Header, Navigation, Drawer, Content} from 'react-mdl';
import Main from './components/Main';
import {Link} from 'react-router-dom';

function App () {
  return (
    <div className="demo-big-content">
      <Layout>

        <Header
          className="header-color"
          title={
            <Link to="/" style={{textDecoration: 'none', color: 'white'}}>
              Raji Oluwatobiloba
            </Link>
          }
          scroll
        >
          <Navigation>
            <Link to="/portfolio">Portfolio</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/blog">Blog</Link>
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
