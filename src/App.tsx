import React from 'react';
import './App.css';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import 'semantic-ui-css/semantic.min.css'

import EventListToggleProvider from './context/EventListToggleContext';
import AuthContextProvider from './context/AuthContext';

import Home from './containers/Home';
import Header from './components/Header';
import ContactUs from './containers/ContactUs';
import EventDashboard from './components/Event/Dashboard';
import ContributorListing from './components/Contributor/Listing';
import EventsListing from './components/Event/Listing';
import EditEvent from './components/Event/Setup/EditEvent';
import CreateEvent from './components/Event/Setup/CreateEvent';
import Login from './components/Auth/login';
import PrivateRoute from './routes/PrivateRoute';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
        <AuthContextProvider>
          <Header />
          <div className="container">
              <Route path ='/login' exact component={Login} />
            <PrivateRoute path ='/' exact component={Home} />
              <EventListToggleProvider>
                <PrivateRoute path='/events' component={EventDashboard} />
                <PrivateRoute path="/events-list" component={EventsListing} />
                <PrivateRoute path="/add-event" component={CreateEvent} />
                <PrivateRoute path="/edit-event" component={EditEvent} />
              </EventListToggleProvider>
            <PrivateRoute path="/contributors" component={ContributorListing} />
            <PrivateRoute path="/contact-us" component={ContactUs} />
          </div>
          </AuthContextProvider>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;