import './Bitcoin.css';
import React, { Component } from 'react'
import History  from './HistoryChart';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';


function Bitcoin() {
  return (
    <BitcoinTable></BitcoinTable>
  );
}

export class BitcoinTable extends Component {
  constructor(props) {
    super(props);
    this.showModal = this.showModal.bind(this);
    this.state = {
      error: null,
      isLoaded: false,
      items: [],
      coinHistoryData: null,
      showModal: false
    };
  }

  showModal() {
    this.setState({ showModal: true });
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
            showModal: true
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
  handler = (selectedRow) => {
    console.log(selectedRow)
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
      <Button variant="outline-success" onClick={() => this.setState({ showModal: true })}  >Price History </Button>
        </td>
    </tr> ))}
  </tbody>
</Table>
<History show={this.state.showModal}></History>
</div>
      );
    }
  }
}
  export default Bitcoin;