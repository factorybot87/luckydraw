import React from 'react'
import { HashRouter as Router, Redirect, Route, Switch } from 'react-router-dom'
import Layout from './Layout'
import Home from './Home'
import Drawer from './Drawer'
import Winner from './Winner'
import routes from '../constants/routes'
import Award from './Award'

export default function App() {
  return (
    <Layout>
      <Router>
        <Switch>
          <Route exact path={routes.home} component={Home} />
          <Route exact path={routes.drawer} component={Drawer} />
          <Route exact path={routes.winner} component={Winner} />
          <Route exact path={routes.award} component={Award} />
          <Redirect to={routes.home} />
        </Switch>
      </Router>
    </Layout>
  )
}
