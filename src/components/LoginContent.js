import React from 'react'
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
      isGoing: true,
      numberOfGuests: 2
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handlePwdChange = this.handlePwdChange.bind(this);
  }

  
    handleSubmit(event) {
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
  <input class="loginBtn" className="loginBtn" type="submit" value="Login" />
      </form>
    );
  }
}
export default LoginContent;