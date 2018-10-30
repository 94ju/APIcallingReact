import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Chart from './components/Chart';

class App extends Component {
  constructor() {
    super();
    this.state = {
      chartData: {},
      array: {},
      check:false

    }
  }

  async componentWillMount() {
   await this.fetchData();
     this.getChartData();
  }
  async fetchData(){
     const commits_fetch = await fetch('https://api.github.com/repos/dasaCoder/se_blog/stats/contributors?access_token=15d7d8c6be378b643161d81ae059128412c084f6');
    const commits_json = await commits_fetch.json();
    const commitsBy_user = await commits_json.map(user => ({
      userName: user.author.login,
      total:user.total
    }));
    this.setState({ array:commitsBy_user});
    console.log(commitsBy_user);
    console.log('check');
    
  }

  async getChartData() {
    // Ajax calls here
    const {chartData,array,check} =this.state;
    console.log('check2');
    console.log(check);
    console.log(array);
    // const labels= array;
    let array1=[]
    let data1=[]
    for(let i=0;i<array.length;i++){
      array1.push(array[i].userName);
      data1.push(array[i].total);
    }
    this.setState({ 
      check:true,
      chartData: {
        labels:array1,
        datasets: [
          {
            label: 'Population',
            data:data1,
            backgroundColor: [
              'rgba(255, 99, 132, 0.6)',
              'rgba(54, 162, 235, 0.6)',
              'rgba(255, 206, 86, 0.6)',
              'rgba(75, 192, 192, 0.6)',
              'rgba(153, 102, 255, 0.6)',
              'rgba(255, 159, 64, 0.6)',
              'rgba(51, 99, 132, 0.6)',
              '	#ff9063'
            ]
          }
        ]
      }
    });
  }

  render() {
    const {chartData,array,check} =this.state;
    if(check){
      return (
        <div className="App">
        
          <Chart chartData={this.state.chartData}  />
         
        </div>
      );
    }
    else{
      return null;
    }
   
  }
}

export default App;
