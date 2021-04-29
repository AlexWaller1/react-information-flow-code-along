import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(<App />, document.getElementById('root'));

/* 

For information to propagate down the component tree, parents pass props
their children

For information to propagate up the component tree, we typically invoke callbacks
that were passed from parents to children as props

Components of the same level (sibling components) cannot communicat directly! We can 
only communicate up and down the component tree. So if components need to share the
same information, that state should live in the parent (or a more general ancestor)
component.

*/