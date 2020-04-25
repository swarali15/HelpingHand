/*import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { Grid } from "@material-ui/core";
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Sidebar from "react-sidebar";
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import Batteries from "./Batteries"
import DashboardContent from './dashboard/DashboardContent';
import DashBoard from './DashBoard.js'
import Modal from "react-responsive-modal";
import Navbar from './Navbar.js'
import SideBar from './SideBar.js'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import LoginContent from './LoginContent'


const theme = createMuiTheme({
  overrides: {
    // Style sheet name ⚛️
    MuiButton: {
      // Name of the rule
      text: {
        // Some CSS
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        borderRadius: 3,
        border: 0,
        color: 'white',
        height: 48,
        padding: '0 30px',
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
      },
    },
  },
});


const useStylesLogin = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
      backgroundColor:"Black"
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
}));

const useStylesDashboard = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

////////////////////////////////
    onOpenModal = () => {
        this.setState({ sign: true });
    };

    onOpenModalLogin = () => {
        this.setState({ login: true });
    };

    onCloseModal = () => {
        this.setState({ sign: false });
    };

    onCloseModalclose = () => {
        this.setState({ login: false });
    };
//////////////////////////////////
export default function Home() {
    const classes = useStylesLogin();
  return (
      
    <Router>
      <div >
        <ul className="NavbarHomePage">
          
          <li className='Links'>
            <Link to="/Signin">Signin</Link>
          </li>
        <li className='Links'>
            <Link to="/Dashboard">Dashboard</Link>
          </li>
        </ul>

        <hr />

        <Switch>
      
          <Route path="/Dashboard">
            <Dashboardapp />
          </Route>
          <Route path="/signin">
            <Signin />
          </Route>
        </Switch>
      </div>
      
      <div>
    
      <div>
    <div className='loginBar'>
      <AppBar position="static">
        <Toolbar variant="dense">
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
        
          </IconButton>
          <Typography variant="h6" color="inherit">
            Login
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
         <LoginContent/>
      </div>
  
    </div>
    </Router>
  );
}

// You can think of these components as "pages"
// in your app.

function Login() {
    const classes = useStylesLogin();
  return (
      <Modal open={sign} onClose={this.onCloseModal}>
    <div>
    
      <div>
    <div className='loginBar'>
      <AppBar position="static">
        <Toolbar variant="dense">
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
        
          </IconButton>
          <Typography variant="h6" color="inherit">
            Login
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
         <LoginContent/>
      </div>
  
    </div>
      </Modal>
  );
}

function Signin() {
  return (
    <div>
      <div className='loginBar'>
      <ThemeProvider theme={theme}>
      <AppBar position="static" >
        <Toolbar variant="dense">
          <IconButton edge="start"  color="inherit" aria-label="menu">
        
          </IconButton>
          <Typography variant="h6" color="inherit">
            Sign in
          </Typography>
        </Toolbar>
      </AppBar>
      </ThemeProvider>
    </div>
      <LoginContent/>
    </div>
  );
}


function Dashboardapp()
{

  
        return (<div className="app">
                <div className="sidebarApp"><SideBar/></div>
            <div className="navbarApp"><Navbar/></div>
                 <div className="dashboardApp"><DashBoard/></div>
            
            </div>)

}*/
