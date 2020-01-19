import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import App from './App'
import PatchNotes from './components/Pages/PatchNotes/PatchNotes'
import NotFound from "./components/Pages/NotFound/NotFound"
import Soundtrack from "./components/Pages/Soundtrack/Soundtrack"
import DevBlog from "./components/Pages/DevBlog/DevBlog"
import Design from "./components/Pages/Design/Design"
import Crashed from "./components/Pages/Crashed/Crashed"
const routing = (
  <Router>
    <div>
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/patch-notes" component={PatchNotes} />
        <Route path="/soundtrack" component={Soundtrack} />
        <Route path="/devblog" component={DevBlog} />
        <Route path="/design" component={Design} />
        <Route path="/C245H3D" component={Crashed} />
        <Route component={NotFound} />
      </Switch>
    </div>
  </Router>
)
ReactDOM.render(routing, document.getElementById('root'))