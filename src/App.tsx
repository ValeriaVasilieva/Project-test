import React from 'react';
import './App.scss';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom'
import Login from './components/Login'
import Students from './components/Students'


function App() {

  return (
    
    <BrowserRouter>
      <Switch>

          <Route exact path='/(login)?' component={Login} />
          <Route path='/students' component={Students} />
          <Redirect to='/' />

      </Switch>
    </BrowserRouter>

  )
}

export default App;
