import React, { Component } from 'react';

var formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0
  });


export default class Tours extends Component {
    render() {
        return (
            <div className="tours">
                {this.props.data.map(tour => (
                    <div className="tour">
                        <img className="tour-img" src={tour.image}></img>
                        <div className="tour-title-price">
                            <p className="tour-title">{tour.title}</p>
                            <p className="tour-price">{formatter.format(tour.price)}</p>
                        </div>
                        <div className="tour-desc">
                            <p id={"#" + tour.title}>{tour.description}</p>
                        </div>
                        <button className="button" onClick={this.props.destroy}>Not Interested</button>
                    </div>
                ))}
            </div>
        );
    }
}
