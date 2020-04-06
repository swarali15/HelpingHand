import React from 'react';
import Sidebar from "react-sidebar";
import Batteries from "./Batteries"

  class SideBar extends React.Component {
      constructor() {
    super();
    this.state = {
      showComponent: false,
    };
    this._onButtonClick = this._onButtonClick.bind(this);
  }
      
_onButtonClick() {
    this.setState({
      showComponent: true,
    });
  }
 
render() {
    
    return (<div className="sidebar-container">
       <div className="sidebar-link">Dashboard</div>
            
    <div>
       <div className="sidebar-link batteryId" onClick={this._onButtonClick}>Batteries</div>
            {this.state.showComponent ?
           <Batteries /> :
           null
        }
    </div>
    
       <div className="sidebar-link">Settings</div>
        </div>)
           
  }
}
     
export default SideBar