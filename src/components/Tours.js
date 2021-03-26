import React, { Component } from 'react';
import $ from 'jquery';

var formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0
  });


const MAX_DESC_LENGTH = 140;


function defaultDesc(desc, descId) {

    $("#desc-"+descId).empty();

    $("#desc-" + descId).append(desc.slice(0, MAX_DESC_LENGTH) + "... <button>Read More</button>");

    $("#desc-" + descId).on('click', 'button', function() {
        showAll(desc, descId);
    });    
    
}

function showAll(desc, descId) {

    $("#desc-"+descId).empty();

    $("#desc-"+descId).append(desc + "<button>Show Less</button>");

    $("#desc-"+descId).on('click', 'button', function() {
        defaultDesc(desc, descId);
    });
}


export default class Tours extends Component {

    descBuild(desc, descId) {

        if(desc.length < MAX_DESC_LENGTH) {
            return <p id={"desc-" + descId}>{desc}</p>;
        } else {
            return <p id={"desc-" + descId}>{desc.slice(0, MAX_DESC_LENGTH)}... <button onClick={() => showAll(desc, descId)}>Read More</button></p>;
        }
        
    }

    render() {
        return (
            <div className="tours">
                {this.props.data.map(tour => (
                    <div key={'#' + tour.title} className="tour">
                        <img className="tour-img" src={tour.image} alt={tour.image}></img>

                        <div className="tour-title-price">
                            <p className="tour-title">{tour.title}</p>
                            <p className="tour-price">{formatter.format(tour.price)}</p>
                        </div>

                        <div className="tour-desc">{this.descBuild(tour.description, tour.id)}</div>

                        <button className="button" onClick={() => this.props.destroy(tour.id)}>Not Interested</button>
                    </div>
                ))}
            </div>
        );
    }
}
