import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import ExampleOne from './components/ExampleOne.jsx';
import ExampleTwo from './components/ExampleTwo.jsx';

const App = React.createClass({
  render() {
    return (
      <div className='react-root'>
        { this.props.children }
      </div>
    );
  }
});
render((
  <div>
    <Router history={ browserHistory }>
      <Route path="/examples" component={ ExampleOne } />
      <Route path="/examples/example_two"
             component={ ExampleTwo} />
    </Router>
  </div>
), document.getElementById('react-root'));