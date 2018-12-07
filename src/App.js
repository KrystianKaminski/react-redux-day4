import React from 'react';

import { BrowserRouter as Router, Route } from 'react-router-dom'
import Counter from './Counter'
import PassingProps from './PassingProps'
import Navigation from './Navigation'


const App = () => (
  <Router>
    <div>
      <Navigation/>
    <Route exact path="/" component={Counter} />
    <Route exact path="/counter" component={Counter} />
    <Route exact path="/passing-props" component={PassingProps} />
    <Route exact path="/counter-with-start-value"
      component={() => <Counter value={15} />} />
    </div>
  </Router >
)

export default App;
