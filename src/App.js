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
  }

  destroyTour(id) {
    this.setState({
      tours: data.tours.filter(tour => tour.id !== id)
    });
  }

  render() {
    return (
      <div className="App">
        <div className="title">
          <h1>Tours Available</h1>
        </div>
          <div className="container">
            <Tours data={this.state.tours} destroy={this.destroyTour}/>
          </div>
      </div>
    );}
}

export default App;
