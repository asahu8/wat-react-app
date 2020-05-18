import React from 'react';
import './App.css';
import Home from './containers/Home';
import Header from './components/Header';
import ContactUs from './containers/ContactUs';
import EventDashboard from './components/Event/Dashboard';
import ContributorListing from './components/Contributor/Listing';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { EventProvider } from './context/EventsContext';



function App() {
  return (
    <Router>
      <div className="App">
      <EventProvider>
        <Header />
        <Switch>
          <div className="container">
            <Route path ='/' component={Home} />
            <Route path="/events"  component={EventDashboard}  />
            <Route path="/contributors" component={ContributorListing} />
            <Route path="/contact-us" component={ContactUs} />
          </div>
        </Switch>
        </EventProvider>
      </div>
    </Router>
  );
}

export default App;