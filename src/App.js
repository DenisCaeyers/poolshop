import React from "react";


// Router
import { BrowserRouter as Router, Route } from "react-router-dom";

// Tabler-React
import { Site,Nav,Page } from "tabler-react";
import "tabler-react/dist/Tabler.css";

// SCSS
import './styles/App.scss';

// Components
import KlantLijst from './klanten/KlantLijst'

function AppRouter() {
  return (

  
    <div className="App">
      <Site>
      <Router>
        <Site.Header>
        </Site.Header>
        <Site.Nav>
        <Nav>
          <Nav.Item to="/klanten" icon="user">
            Klanten
          </Nav.Item>
          <Nav.Item to="/bestelbonnen" icon="globe" >
            Bestelbonnen
          </Nav.Item>
        </Nav>
        </Site.Nav>
        <Page>
          <Page.Content>
          <div id="main">
            <Route path="/" exact component={Index} />
            <Route path="/klanten/" component={Klanten} />
            <Route path="/bestelbonnen/" component={Bestelbonnen} />
          </div>
          </Page.Content>
        </Page>
        
      </Router>
      </Site>
    </div>
  );
}

function Index() {
  return <h2>Home</h2>;
}

function Klanten() {
  return (
    <div>
    <h2>Klanten</h2>
    <KlantLijst />
    </div>
  )
}

function Bestelbonnen() {
  return <h2>Bestelbonnen</h2>;
}



export default AppRouter;
