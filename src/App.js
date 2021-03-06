import React from 'react'
import { Route } from 'react-router-dom'

import Navigation from './components/Navigation'
import HomeDisplay from './components/HomeDisplay'
import ProblemDisplay from './components/ProblemDisplay'
import Login from './components/Login'
import Signup from './components/Signup'
import Dashboard from './components/Dashboard'
import PrivateRoute from './components/PrivateRoute'
import Footer from './components/Footer'
import '../src/scss/App.scss'

function App() {
  return (
    <div className='App'>
      <Navigation />
      <Route exact path='/' render={(props) => <HomeDisplay {...props} />} />
      <Route path='/login' render={(props) => <Login {...props} />} />
      <Route path='/signup' render={(props) => <Signup {...props} />} />
      <Route
        path='/problems/:id'
        render={(props) => <ProblemDisplay {...props} />}
      />
      {/* <Route
        path='/problems/:id/edit'
        render={(props) => <EditProblem {...props} />}
      /> */}
      <PrivateRoute
        exact
        path='/dashboard'
        component={(props) => <Dashboard {...props} />}
      />
      <Footer />
    </div>
  )
}

export default App
