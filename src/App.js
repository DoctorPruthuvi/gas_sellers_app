import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Navbar from './component/layout/navbar'
import Dashbord from './component/dashbord/dashbord'
import ProjectDetails from './component/projects/projectdetails'
import SignIn from './component/auth/signin'
import SignUp from './component/auth/signup'
import CreatrProject from './component/projects/createproject'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path='/' component={Dashbord} />
            <Route path='/project/:id' component={ProjectDetails} />
            <Route path='/signin' component={SignIn} />
            <Route path='/signup' component={SignUp} />
            <Route path='/create' component={CreatrProject} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;