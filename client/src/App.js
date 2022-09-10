import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Switch, Route, Link, Redirect } from 'react-router-dom'
import Allflights from './components/Allflights';
import RegisterLogin from './components/RegisterLogin';
import CityFlights from './components/CityFlights'
import Booking from './components/Booking';
import Navbar from './components/Navbar'
import Home from './components/Home'
import Footer from './components/Footer'
import SearchResults from './components/SearchResults';
import UserContext from './context/userContext'
import React from 'react';
import Wrapper from './components/Wrapper';
import Boarding from './components/Boarding';

import Paypal from './components/Paypal';
import RegisterTest from './components/RegisterTest'
function App() {
  const [userlogged, setUserlogged] = React.useState()



  return (
    <div className="App">
      <UserContext.Provider value={{ userlogged, setUserlogged }}>
        <Wrapper>
          <BrowserRouter>
            <Navbar />
            <Switch>

              <Route exact path='/'>
                <Redirect to="/home" />
              </Route>

              <Route exact path='/home'>
                <Home />
              </Route>

              <Route exact path='/signup'>
                <RegisterTest />
              </Route>


              <Route exact path="/flights">
                <Allflights />
              </Route>

            <Route exact path="/boarding">
                <Boarding />
              </Route> 

              <Route exact path="/search-results/:from/:to/:date">
                <SearchResults />
              </Route>

              <Route exact path="/flight/:city">
                <CityFlights />
              </Route>


              <Route exact path="/book/:flight_id">
                <Booking />
              </Route>

              <Route exact path="/payment/:flight_id">
                <Paypal />
              </Route>

            </Switch>
            <Footer />
          </BrowserRouter>
        </Wrapper>
      </UserContext.Provider>
    </div>
  );
}

export default App;
