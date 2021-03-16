
import './App.css';
import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  return (
    <NavBar></NavBar>
  );
}

class NavBar extends React.Component {
  
  render() {
      return (
        <nav class="navbar navbar-dark bg-dark">
  <a class="navbar-brand">Crypto Currency</a>
  <form class="form-inline">
    <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"></input>
    <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
  </form>
</nav>
      );
    }
}

export default App;
