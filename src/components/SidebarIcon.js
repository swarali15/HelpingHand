import React from 'react'
import { FaBars, FaClose } from 'react-icons/lib/fa'
const SidebarIcon = ({handleClick, isOpen}) => {
  return <span onClick={handleClick}>
    {isOpen ? <FaClose /> : <FaBars/>}
  </span>
}
export default SidebarIcon


 /*
  constructor(props) {
    super(props);
    this.state = {
        sidebarDocked: true,
      sidebarOpen: true
    };
    this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this);
  }

  onSetSidebarOpen(open) {
    this.setState({ sidebarOpen: open });
  }

  render() {
    return (
      <Sidebar
        sidebar={<div classNAme="sidebarId"><b>Sidebar content</b>
        <b>Dashboard</b>
        <b>Batteries</b>
        <b>Settings</b></div>}
        open={this.state.sidebarOpen}
        onSetOpen={this.onSetSidebarOpen}
        styles={{ sidebar: { background: "white" } }}
      >
        <button onClick={() => this.onSetSidebarOpen(true)}>
          Open sidebar
        </button>
      </Sidebar>
    );
  }
}

class SideBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sidebarDocked: true,
      sidebarOpen: false
    };
  }

  render() {
    return (
      <Sidebar
        sidebar={<b></b>}
        docked={this.state.sidebarDocked}
       className="sidebarId" 
      >
        
        
      </Sidebar>
    );
  }

}
*/