import React from 'react'
import { HashRouter as Router, Redirect, Route, Switch } from 'react-router-dom'
import Drawer from './Drawer'

import Award from './Award'

export const routePath = {
  home: '/home',
  drawer: '/drawer',
  award: '/award'
}

const Home = () => <h1>Hello Lucky Draw</h1>

export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path={routePath.home} component={Home} />
        <Route exact path={routePath.drawer} component={Drawer} />
        <Route exact path={routePath.award} component={Award} />
        <Redirect to={routePath.home} />
      </Switch>
    </Router>
  )
}
