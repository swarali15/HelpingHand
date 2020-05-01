import React from 'react'
import DashBoard from './DashBoard.js'
import Navbar from './Navbar.js'
import SideBar from './SideBar.js'
import Visual from './dashboard/Visual'

function App() {
  
        return (<div className="app">
                <div className="sidebarApp"><SideBar/></div>
            <div className="navbarApp"><Navbar/></div>
                 <div className="dashboardApp"><DashBoard/></div>
                
            
            </div>)
}
export default App