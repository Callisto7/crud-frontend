import React from 'react'
import Star from './Star';

 function Stars({count}) {
    if (count < 1 || count > 5) {
      return null;
    }

    let arr = new Array(count).fill(undefined);

  return (
    <ul className="card-body-stars u-clearfix">
      {arr.map((_, index) => <Star key={index}/>)}
    </ul>
  )
}


export default Stars;