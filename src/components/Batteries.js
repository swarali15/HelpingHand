import React, { Component } from 'react'

class Batteries extends Component {
  state = {
     isOpen: true
   }
 
   renderBattery = () => {
       alert("In batteries!");
     if (!this.state.isOpen) {
       return null
     }
 
     return <div className="batterySidebar">
       <div className="battery-link">Battery 1</div>
       <div className="battery-link">Battery 2</div>
       <div className="battery-link">Battery 3</div>
    </div>
  }
toggleSidebar = () => {
    this.setState(prevState => ({
      isOpen: !prevState.isOpen
    }))
  }
render() {
    return <div className="batteries-container">
      {this.renderBattery()}
    </div>
  }
}
export default Batteries