import React from 'react';
import Tours from './components/Tours';
import data from './tours.json';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      tours: data.tours
    }

    this.destroyTour = this.destroyTour.bind(this);
    this.refresh = this.refresh.bind(this);
  }

  refresh(){
    this.setState({
      tours: data.tours
    });
  }

  destroyTour(id) {
    this.setState({
      tours: this.state.tours.filter(tour => tour.id !== id)
    })
  }

  render() {
    return (
      <div className="App">
        <div className="title">
          <h1>{this.state.tours.length > 0 ? "Tours available" : "No tours left"}</h1>
        </div>
          <div className="container">
            <Tours data={this.state.tours} destroy={this.destroyTour}/>
          </div>
          {this.state.tours.length == 0 ? (<div className="refresh-div"><button className="refreshButton" onClick={this.refresh}>Refresh</button></div>):""}
      </div>
    );}
}

export default App;
