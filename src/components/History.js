import React, { Component } from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

class History extends Component {

    render() {
      return (
        <Modal size="lg" show={this.props.show} onHide={this.props.close}>
        <Modal.Header closeButton>
          <Modal.Title>{this.props.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <ResponsiveContainer  width="95%" height={400}>
            <LineChart id="container"
  data={this.props.historyData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
>
  <XAxis dataKey="date" />
  <yAxis dataKey="priceUsd" />
  <Tooltip />
  <CartesianGrid stroke="#f5f5f5" />
  <Line type="monotone" dataKey="priceUsd" stroke="#ff7300" yAxisId={0} />
</LineChart>
</ResponsiveContainer>  
  </Modal.Body>
  <Modal.Footer>
          <Button variant="outline-success" onClick={this.props.close}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
      );
    }
  }
  
  export default History;