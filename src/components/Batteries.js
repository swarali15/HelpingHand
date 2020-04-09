import React, { Component } from 'react'
import SideBar from './SideBar.js'

class Batteries extends Component {
  state = {
     isOpen: true
   }
 accessState=()=>{
   if(this.refs.child.state.showComponent) 
       this.setState({isOpen: true});
     else
         this.setState({showComponent: false});
 }
   renderBattery = () => {
       alert("In batteries!");
     if (!this.state.isOpen) {
       return null
     }
 else
 {    
     return <div className="batterySidebar">
       <div className="battery-link">Battery 1</div>
       <div className="battery-link">Battery 2</div>
       <div className="battery-link">Battery 3</div>
    </div>
 }
     
  }
toggleSidebar = () => {
    this.setState(prevState => ({
      isOpen: !prevState.isOpen
    }))
  }
render() {
    return <div className="batteries-container">
      {this.renderBattery()}
    <SideBar ref='child'/>
    </div>
  }
}
export default Batteries