import React from 'react';

import { BrowserRouter as Router, Link, Route } from 'react-router-dom'
import Counter from './Counter'
import PassingProps from './PassingProps'


const App = () => (
  <Router>
    <div>
      <Route exact path="/" component={Counter} />
      <Route exact path="/counter" component={Counter} />
      <Route exact path="/passing-props" component={PassingProps} />
    </div>
  </Router>
)

export default App;
