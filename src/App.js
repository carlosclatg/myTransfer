import React, { useEffect, Fragment, useState } from 'react';
import { Route, Redirect, withRouter, Switch  } from "react-router-dom";
import Welcome from './components/welcome'
import Home from './components/home'
import NoMatch from './components/noMatch'
import NavBar from './components/navbar'
import logic from './logic'
import './App.sass';
import Loading from './components/loading';

export default function App() {

  const [isLoading, setIsLoading] = useState(false)

  useEffect(()=>{
    console.log('Is logged in? ' + logic.isUserLoggedIn)
  },[])

  //AS example
  const setVisible = (event) => {
    event.preventDefault()
    setIsLoading(true)
    setTimeout(timeLoading, 2500);
  }

  const timeLoading = () => setIsLoading(false)


  return (
    <Fragment>
      <NavBar />
      <div className="App">
          <Switch>
            <Route exact path="/" render={() => logic.isUserLoggedIn ? <Redirect to="/home" /> : <Redirect to="/welcome" />}/>
            <Route exact path="/welcome" render = {() => logic.isUserLoggedIn ? <Redirect to="/home" /> : <Welcome/> }/>
            <Route exact path="/home" render ={() => logic.isUserLoggedIn ? <Home/> : <Redirect to="/welcome" /> }/>
            <Route path="*"><NoMatch /></Route>
          </Switch>
      </div>
      <button onClick={setVisible}>Loading</button>
      {isLoading ? <Loading/> : null}
    </Fragment>
  );
}

