import React from 'react'
import { HashRouter as Router, Redirect, Route, Switch } from 'react-router-dom'
import { routePath } from '../config/appConfig'
import Layout from './Layout'
import Home from './Home'
import Drawer from './Drawer'
import Award from './Award'

export default function App() {
  return (
    <Layout>
      <Router>
        <Switch>
          <Route exact path={routePath.home} component={Home} />
          <Route exact path={routePath.drawer} component={Drawer} />
          <Route exact path={routePath.award} component={Award} />
          <Redirect to={routePath.home} />
        </Switch>
      </Router>
    </Layout>
  )
}
