import React from 'react'

class ParkingSlot extends React.Component {

    reserve() {
        console.log('varaa');
    }


    render() {
        const { reservedToday } = this.props;

        return (
            <div>
                <p>Parking slot is {reservedToday ? 'reserved' : 'free'}</p>
                <button onClick={() => this.reserve()}>varaa</button>
            </div>
        )
    }
}

export default ParkingSlot