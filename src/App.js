
import './App.css';
import React from 'react'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container'
import logo from './assets/bitcoin-Logo.png';

function App() {
  return (
    <Header></Header>
  );
}

class Header extends React.Component {
  
  render() {
      return (
        <div>
<Navbar bg="dark" variant="dark" className="fixed-top-nav">
    <Navbar.Brand href="#home">
      <img
        alt=""
        src={logo}
        width="50"
        height="30"
        className="d-inline-block align-top"
      />{' '}
      Crypto Currency
    </Navbar.Brand>
  </Navbar>

<Jumbotron fluid className="mb-0">
  <Container>
  <h1>Welcome to Crypto currency </h1>
  <p>This is a simple application for displaying real-time prices for cryptocurrencies.</p>
  </Container>
</Jumbotron>
</div>
      );
    }
}

export default App;
