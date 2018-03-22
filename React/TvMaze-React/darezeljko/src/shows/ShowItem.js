import React from 'react';

const ShowItem = (props) => {
  console.log(props)
  return (
    <div className="col s12 m4">
      <div className="card">
        <div className="card-image">
          <img src={props.data.image} />
          <span className="card-title">{props.data.name}</span>
        </div>
      </div>
    </div>
  )
}

export default ShowItem;