import React from 'react';
import ShowItem from './ShowItem';

const ShowList = (props) => {
    const {shows} = props
    return (
        <div className='container'>
        <div className="row">
          {
              shows.map(show => {
                  return <ShowItem data={show} />
              })
          }
        </div>
        </div>
           )
    
}



export default ShowList;