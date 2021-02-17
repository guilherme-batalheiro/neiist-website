import React from 'react'
import ReactDOM from 'react-dom';

import { createGlobalStyle } from 'styled-components';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom"

import Home from "./pages/Home"
import HashCode from "./pages/HashCode"
import About from "./pages/About"
import Blog from "./pages/Blog"
import Post from "./pages/Post"

const GlobalStyle = createGlobalStyle`
body {
  margin: 0
}
`

ReactDOM.render(
  <>
    <GlobalStyle />
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/sobre" component={About} />
        <Route path="/hash-code" component={HashCode} />
        <Route exact path="/blog" component={Blog} />
        <Route path="/blog/post/:id" render={props => <Post {...props} />} />
        <Route path="/*"><Redirect to="/" /></Route>
      </Switch>
    </Router>
  </>,
  document.getElementById('root')
)
