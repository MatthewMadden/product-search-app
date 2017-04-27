var React = require('react');
var ReactDOM = require('react-dom');
var Search = require('./components/search.jsx');
var SearchBar = require('./components/search_bar.jsx');
var Result = require('./components/result.jsx');
var Results = require('./components/results.jsx');
var products = require('./products.js');

ReactDOM.render(<Search products={products} />, document.getElementById('app'));