import React, { Component } from 'react'
import History  from './History';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import * as rxjs from 'rxjs';


function Bitcoin() {
  return (
    <BitcoinTable></BitcoinTable>
  );
}

export class BitcoinTable extends Component {
  constructor(props) {
    super(props);
    this.togglePopup = this.togglePopup.bind(this);
    this.state = {
      error: null,
      isLoaded: false,
      items: [],
      coinHistoryData: null,
      showModal: false,
      cryptoName: null
    };
  }

  togglePopup() {
    this.setState({
        showModal: !this.state.showModal
    });
}

  getPriceHistory(coinId) {
    fetch("https://api.coincap.io/v2/assets/"+coinId+"/history?interval=d1", {
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       }

    })
      .then(res => res.json())
      .then(
        (result) => {
          console.log(result.data);
          this.setState({
            coinHistoryData: result.data,
          });
        },
        (error) => {
          console.log(error);
          this.setState({
            error
          });
        }
      )
  }
  componentDidMount() {
    fetch("https://api.coincap.io/v2/assets", {
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       }

    })
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            items: result.data
          });
        },
        (error) => {
          console.log(error);
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }

  check(arr, el) {
arr.some(element => {
if(element.id === el) {
  this.setState({
    cryptoName: element.name
  });
}
});

  }

  handler = (selectedRow) => {
    this.check(this.state.items, selectedRow);
    this.getPriceHistory(selectedRow);
}

  render() {
    const { error, isLoaded, items } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <div>
          <Table striped bordered hover variant="dark">
  <thead>
    <tr>
      <th>Rank</th>
      <th>Name</th>
      <th>Price</th>
      <th>Supply</th>
    </tr>
  </thead>
  <tbody>
  {items.map(item => (
    <tr key={item.id} onClick={() => this.handler(item.id)}>
      <td>{item.rank}</td>
      <td>{item.name}</td>
      <td>{item.priceUsd}</td>
      <td>{item.supply}</td>
      <td>
      <Button variant="outline-success" onClick={this.togglePopup}  >Price History </Button>
        </td>
    </tr> ))}
  </tbody>
</Table>
<History show={this.state.showModal} name={this.state.cryptoName} historyData={this.state.coinHistoryData} close={this.togglePopup}/>
</div>
      );
    }
  }
}
  export default Bitcoin;