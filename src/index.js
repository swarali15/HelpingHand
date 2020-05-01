import React from 'react';
import { Router, Route, Switch } from "react-router";
import ReactDOM from 'react-dom';
import './index.css';
import Login from './components/Login'
import LoginContent from './components/LoginContent'
import App from './components/App'
import Visual from './components/dashboard/Visual'


ReactDOM.render(<div>
        <App />
    <Visual/></div>
    ,
    document.getElementById("root"))

/*class App extends Component{
   render(){
      return(
         <div>
            <h1>Hello World</h1>
         </div>
      );
   }
}
export default App;*/