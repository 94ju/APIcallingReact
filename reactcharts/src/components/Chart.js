import React, {Component} from 'react';
import {Bar, Line, Pie} from 'react-chartjs-2';

class Chart extends Component{
  constructor(props){
    super(props);
    this.state = {
      chartData:props.chartData
    }
  }

  static defaultProps = {
    displayTitle:true,
    displayLegend: true,
    // legendPosition:'right',
    // location:'City'
  }

  render(){
    return (
      <div className="chart">
        <Bar
          data={this.state.chartData}
          options={{
            title:{
              display:this.props.displayTitle,
              text:'Number of commits by a Contributor ',
              fontSize:25
            },
            legend:{
              display:this.props.displayLegend,
              position:this.props.legendPosition
            },
            layout: {
              padding: {
                  left: 0,
                  right: 600,
                  top: 0,
                  bottom: 400
              }
          }
          }}
        />

        {/* <Line
          data={this.state.chartData}
          options={{
            title:{
              display:this.props.displayTitle,
              text:'Largest Cities In '+this.props.location,
              fontSize:25
            },
            legend:{
              display:this.props.displayLegend,
              position:this.props.legendPosition
            }
          }}
        /> */}

        <Pie
          data={this.state.chartData}
          options={{
            title:{
              display:this.props.displayTitle,
              text:'Number of commits by a Contributor ',
              fontSize:25,
            },
            legend:{
              display:this.props.displayLegend,
              position:this.props.legendPosition
            },
            // layout: {
            //   padding: {
            //       left: 0,
            //       right: 0,
            //       top: 0,
            //       bottom: 600
            //   }
            // }
          }}
        />
      </div>
    )
  }
}

export default Chart;
