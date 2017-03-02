import React from 'react'
import {render} from 'react-dom'
import ParkingSlot from './components/ParkingSlot'

class App extends React.Component {
   render() {
    
     return (
       <ParkingSlot />
     )
   } 
}



render(<App />, document.getElementById('root'));
