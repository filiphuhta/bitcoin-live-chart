import './Bitcoin.css';
import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';


function Bitcoin() {
  return (
    <BitcoinTable></BitcoinTable>
  );
}

export class BitcoinTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: []
    };
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
          console.log(result.data);
          this.setState({
            isLoaded: true,
            items: result.data
          });
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          console.log(error);
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }

  render() {
    const { error, isLoaded, items } = this.state;
    items.forEach(function(entry) {
      console.log(entry);
    });
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <table  class="table table-dark table-striped">   
  <thead>
    <tr>
      <th scope="col">Rank</th>
      <th scope="col">Name</th>
      <th scope="col">Price</th>
      <th scope="col">Supply</th>
    </tr>
  </thead>
  <tbody>
  {items.map(item => (
    <tr key={item.id}>
      <td>{item.rank}</td>
      <td>{item.name}</td>
      <td>{item.priceUsd}</td>
      <td>{item.supply}</td>
    </tr> ))}
  </tbody>
</table>
      );
    }
  }
}
  export default Bitcoin;