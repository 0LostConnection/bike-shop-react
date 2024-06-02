import React from 'react'
import ReactDOM from 'react-dom'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom'

import './style.css'
import Landing from './views/landing'
import Catalogo from './views/catalogo'
import Orcamento from './views/orcamento'
import Novidades from './views/novidades'
import Marcas from './views/marcas'
import NotFound from './views/not-found'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route component={Landing} exact path="/" />
        <Route component={Catalogo} exact path="/catalogo" />
        <Route component={Orcamento} exact path="/orcamento" />
        <Route component={Novidades} exact path="/novidades" />
        <Route component={Marcas} exact path="/marcas" />
        <Route component={NotFound} path="**" />
        <Redirect to="**" />
      </Switch>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
