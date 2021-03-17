
import './App.css';
import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  return (
    <Header></Header>
  );
}

class Header extends React.Component {
  
  render() {
      return (
        <html>
        <nav class="navbar navbar-dark bg-dark navbar-fixed-top">
  <a class="navbar-brand">Crypto Currency</a>
  <form class="form-inline">
    <input class="form-control mr-sm-2" type="search" placeholder="Filter" aria-label="Search"></input>
  </form>
</nav>

<div class="jumbotron mb-0">
  <h1 class="display-4">Welcome to Crypto currency </h1>
  <p class="lead">This is a simple application for displaying real-time prices for cryptocurrencies.</p>
</div>
</html>
      );
    }
}

export default App;
