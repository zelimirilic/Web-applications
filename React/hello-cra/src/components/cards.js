import React from 'react';

const Cards = (props) => {


  return (


    <div className="col s4">
      <div className="card">
        <div className="card-image">
          <img src={props.data.picture.medium} />
          <span className="card-title">`{props.data.name.title} {props.data.name.first} {props.data.name.last}`</span>
        </div>
        <div className="card-content">
          <p>{props.data.email}</p>
          <p>`Date of birth:{props.data.dob}`</p>

        </div>
        <div className="card-action">
          <a href="#"></a>
        </div>
      </div>
    </div>


  )
}

export default Cards;