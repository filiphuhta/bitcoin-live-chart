import React from 'react';
import { VictoryChart, VictoryLine, VictoryZoomContainer, VictoryBrushContainer, VictoryAxis} from 'victory';
import 'bootstrap/dist/css/bootstrap.css';

function HistoryChart() {
    return (
      <History></History>
      
    );
  }

class History extends React.Component {
    constructor() {
      super();
      this.state = {
        zoomDomain: { x: [new Date(1990, 1, 1), new Date(2009, 1, 1)] }
      };
    }
  
    handleZoom(domain) {
      this.setState({ zoomDomain: domain });
    }
  
    render() {
      return (
        <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
        <div  class="container">
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
        </div>
        </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>
      );
    }
  }
  
  export default HistoryChart;