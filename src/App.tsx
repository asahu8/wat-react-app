import React from 'react';
import './App.css';
import Home from './containers/Home';
import Header from './components/Header';
import ContactUs from './containers/ContactUs';
import EventDashboard from './components/Event/Dashboard';
import ContributorListing from './components/Contributor/Listing';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import EventListToggleProvider from './context/EventListToggleContext';
import EventsListing from './components/Event/Listing';
import EditEvent from './components/Event/Setup/EditEvent';
import CreateEvent from './components/Event/Setup/CreateEvent';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
      <EventListToggleProvider>
        <Header />
        <Switch>
          <div className="container">
            <Route path ='/' exact component={Home} />
            <Route path="/events"  component={EventDashboard}  />
            <Route path="/events-list" component={EventsListing} />
            <Route path="/contributors" component={ContributorListing} />
            <Route path="/contact-us" component={ContactUs} />
            <Route path="/add-event" component={CreateEvent} />
            <Route path="/edit-event" component={EditEvent} />
          </div>
        </Switch>
        </EventListToggleProvider>
      </div>
    </BrowserRouter>
  );
}

export default App;