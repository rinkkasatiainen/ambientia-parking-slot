import React from 'react';

class ParkingSlot extends React.Component {

  reserve(e) {
    console.log('clicked');
  }


  render(){
    return(
      <div>
        <button onClick={(e) => this.reserve() }>here</button>
      </div>
    )
  }
}

export default ParkingSlot;
