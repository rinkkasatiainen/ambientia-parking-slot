import React from 'react';

class ParkingSlot extends React.Component {

  reserve(e) {
    console.log('clicked');
    this.props.reserve('meee');
  }

  render(){
    return(
      <div>
      <p> { this.props.reservedToday ? `Reserved for ${this.props.reservedFor}` : 'vapaa'}</p>
        <button onClick={(e) => this.reserve() }>here</button>
      </div>
    )
  }
}

export default ParkingSlot;
