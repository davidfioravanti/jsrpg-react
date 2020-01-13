import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import App from './App'
import PatchNotes from './PatchNotes'
import NotFound from "./NotFound"
import Soundtrack from "./Soundtrack"
import DevBlog from "./DevBlog"
const routing = (
  <Router>
    <div>
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/patch-notes" component={PatchNotes} />
        <Route path="/soundtrack" component={Soundtrack} />
        <Route path="/devblog" component={DevBlog} />
        <Route component={NotFound} />
      </Switch>
    </div>
  </Router>
)
ReactDOM.render(routing, document.getElementById('root'))