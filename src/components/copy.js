class LoginControl extends React.Component {
  constructor(props) {
    super(props);
    this.handleLoginClick = this.handleLoginClick.bind(this);
    this.handleLogoutClick = this.handleLogoutClick.bind(this);
    this.state = {isLoggedIn: false};
  }

  handleLoginClick() {
    this.setState({isLoggedIn: true});
  }

  handleLogoutClick() {
    this.setState({isLoggedIn: false});
  }

  render() {
    const isLoggedIn = this.state.isLoggedIn;
    let button;
    if (isLoggedIn) {
      button = <LogoutButton onClick={this.handleLogoutClick} />;
    } else {
      button = <LoginButton onClick={this.handleLoginClick} />;
    }

    return (
      <div>
        <Greeting isLoggedIn={isLoggedIn} />
        {button}
      </div>
    );
  }
}

ReactDOM.render(
  <LoginControl />,
  document.getElementById('root')
);
/***************************SIdebar.js***********************/
import React from 'react';
import Sidebar from "react-sidebar";
import Batteries from "./Batteries"
import ReactDom from 'react-dom'

  class SideBar extends React.Component 
{
    constructor() 
  {
    super();
    this.state = {showComponent: false};
    this.onBatteriesClick = this.onBatteriesClick.bind(this);
  }
      
onBatteriesClick() {
    this.setState({showComponent: true});
  }
 
render() {
    let content;
    if(this.state.showComponent)
        {
            content=<Batteries/>;
        }
    else
        content=null;
    return (
        <div>
        {content}
    </div>       
    )
    }
}

            
ReactDom.render(
    <div className="sidebar-container">
       <div className="sidebar-link">Dashboard</div>
       <div className="sidebar-link batteryId" onClick={this.onBatteriesClick}>Batteries</div>
       <div className="sidebar-link">Settings</div>
    </div>,
  document.getElementById('root')
);

     
export default SideBar