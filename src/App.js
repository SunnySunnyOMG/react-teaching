import React, { Component } from 'react';
import { Login, SignUp } from './project1/pages/signInSignUp'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
class App extends Component {


  //password validate seperate
  //error message (white background color)
  //router --> component dupalicate
  //          route component variable
  //new repo, project structure 

  render() {
    return (
      <div>
        <Router>
          <Switch>
            <Route path="/login" component={Login} />
            <Route path="/signup" component={SignUp} />
            <Redirect to="/login" />
          </Switch>
        </Router>
      </div>
    )
  }
}




export default App;
