/*import React from 'react'
import { makeStyles } from '@material-ui/core/styles';

const useStylesLogin = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
      backgroundColor:'blue'
  },
  
}));

class LoginContent extends React.Component {
    
    
    constructor(props) {
    super(props);
    this.state = {
this.state = {
            sign: false,
            login: false,
            }
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handlePwdChange = this.handlePwdChange.bind(this);
  }

  
    handleSubmit(event) {
        this.setState({ sign: true });
    event.preventDefault();
  }
handleNameChange(event) {
    this.setState({value: event.target.value});
  }
    handlePwdChange(event) {
    this.setState({value: event.target.value});
  }
  render() {
    return (
        
        <div className="loginPage">
        <div className="LoginBar">
        Login
        </div>
        <form onSubmit={this.handleSubmit} className='loginContent'>
        <label>
    Username
    <input type="text" value={this.state.Uname} name="Uname"
        onChange={this.handleNameChange}/>
  </label>
        <br/>
        <br/>
        <label>
    Password
    <input type="password" value={this.state.Upassword} name="Upassword"
        onChange={this.handlePwdChange}/>
  </label>
        <br/>
        <br/>
        <center>
  <input class="loginBtn" className="loginBtn" type="submit" value="Login" />
        </center>
      </form>
        </div>
    );
  }
}
export default LoginContent;*/