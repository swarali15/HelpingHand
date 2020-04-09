import React from 'react';
import Sidebar from "react-sidebar";
import Batteries from "./Batteries"
import ReactDom from 'react-dom'

  class SideBar extends React.Component {
      constructor() 
  {
    super();
    this.state = {
      showComponent: false,
    };
    this.onBatteriesClick = this.onBatteriesClick.bind(this);
  }
      
onBatteriesClick() {
    this.setState({showComponent: true});
  }
 
accessBatery =()=>{
    if(!this.setState.showComponent)
        return;
    else
    this.refs.child.renderBattery();
    
}
render() {
    
    return (
    <div className="sidebar-container">
       <div className="sidebar-link">Dashboard</div>
       <div className="sidebar-link batteryId" onClick={this.onBatteriesClick}>Batteries</div>
       <div className="sidebar-link">Settings</div>
        <Batteries ref='child'/>
    </div>      
  )
}
  }

    


            
     
export default SideBar