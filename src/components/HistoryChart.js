import React, { Component } from 'react'
import { VictoryChart, VictoryLine, VictoryZoomContainer, VictoryBrushContainer, VictoryAxis} from 'victory';
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'

class History extends Component {
    constructor() {
      super();
      this.state = {
        zoomDomain: { x: [new Date(1990, 1, 1), new Date(2009, 1, 1)] }
      };
    }


    handleChange = e => this.setState({ [e.target.id]: e.target.value });
  
    handleZoom(domain) {
      this.setState({ zoomDomain: domain });
    }
  
    render() {
      return (
        <Modal show={this.props.showModal}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!
          <VictoryChart width={600} height={300} scale={{ x: "time" }}
            containerComponent={
              <VictoryZoomContainer
                zoomDimension="x"
                zoomDomain={this.state.zoomDomain}
                onZoomDomainChange={this.handleZoom.bind(this)}
              />
            }
          >
              <VictoryLine
                style={{
                  data: { stroke: "tomato" }
                }}
                data={[
                  { a: new Date(1982, 1, 1), b: 125 },
                  { a: new Date(1987, 1, 1), b: 257 },
                  { a: new Date(1993, 1, 1), b: 345 },
                  { a: new Date(1997, 1, 1), b: 515 },
                  { a: new Date(2001, 1, 1), b: 132 },
                  { a: new Date(2005, 1, 1), b: 305 },
                  { a: new Date(2011, 1, 1), b: 270 },
                  { a: new Date(2015, 1, 1), b: 470 }
                ]}
                x="a"
                y="b"
              />
  
            </VictoryChart>
            <VictoryChart
              padding={{ top: 0, left: 50, right: 50, bottom: 30 }}
              width={600} height={100} scale={{ x: "time" }}
              containerComponent={
                <VictoryBrushContainer
                  brushDimension="x"
                  brushDomain={this.state.zoomDomain}
                  onBrushDomainChange={this.handleZoom.bind(this)}
                />
              }
            >
              <VictoryAxis
                tickFormat={(x) => new Date(x).getFullYear()}
              />
              <VictoryLine
                style={{
                  data: { stroke: "tomato" }
                }}
                data={[
                  { key: new Date(1982, 1, 1), b: 125 },
                  { key: new Date(1987, 1, 1), b: 257 },
                  { key: new Date(1993, 1, 1), b: 345 },
                  { key: new Date(1997, 1, 1), b: 515 },
                  { key: new Date(2001, 1, 1), b: 132 },
                  { key: new Date(2005, 1, 1), b: 305 },
                  { key: new Date(2011, 1, 1), b: 270 },
                  { key: new Date(2015, 1, 1), b: 470 }
                ]}
                x="key"
                y="b"
              />
            </VictoryChart>
  </Modal.Body>
  <Modal.Footer>
          <Button variant="secondary">
            Close
          </Button>
          <Button variant="primary">
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
      );
    }
  }
  
  export default History;