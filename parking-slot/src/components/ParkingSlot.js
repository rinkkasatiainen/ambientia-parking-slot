import React from 'react';

class ParkingSlot extends React.Component {

    reserve() {
        this.props.reserve()
    }

    render() {
        return (
            <div>
                <p>This slot is {this.props.reservedToday ? "reserved" : "free"}</p>
                <button onClick={() => {this.reserve()}}>Hi!</button>
            </div>
        )
    }
}

export default ParkingSlot