import React, { Component } from 'react'
import Modal from "react-responsive-modal";
import './style.css'
//import icon from './assets/logo-hover.png'

class Header extends Component {

    constructor(props) {
        super(props)

        this.state = {
            sign: false,
            login: false,

        }
    }

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




    render() {
        const { login, sign } = this.state;
        return (
            <div class="Homebody">

            <>
            <header className="header" style={{  "width":"10px","paddingTop": "5px", "paddingBottom": "5px" }}>
                    <div className="container">
                        <nav className="navbar " role="navigation">
                            <div className="navbar-header">
                                <a className="logo">
                                    <img src="logo.jpeg" alt="revogreenLogo" height="42" width="42"/>
                                </a>
                            </div>

                            {/* <!-- Collect the nav links, forms, and other content for toggling --> */}
                            <div className="navbar-collapse collapse in" id="navbarMain" aria-expanded="true" style={{ top: "65px" }}>

                                <ul className="nav ">
                                    <li className="list">
                                        <button className="btn-primary-outline" id="signup" onClick={this.onOpenModal}>SignUp</button>
                                    </li>
                                    <li className="list">
                                        <button className="btn-primary-outline" id="login" onClick={this.onOpenModalLogin}>Login</button>
                                    </li>
                                </ul>
                            </div>

                            {/* <!-- .navbar-collapse --> */}
                        </nav>
                    </div>
                 <div className="sideDescription">
            <h1 className="sideDescription">Revogreen Technologies</h1>
            </div>
            
            
            
                </header>
            
                
                {/* Sign up model */}

                <Modal open={sign} onClose={this.onCloseModal}>
                    <div className="modal-body">
                        <h2>Get Started Absolutely<span> Free!</span></h2>
                        <span className="subtitle">No credit card needed</span>
                        <form className="contact-form form-validate3" novalidate="novalidate">
                            <div className="form-group">
                                <input className="form-control" type="text" name="name" id="name" placeholder="First Name" required="" autocomplete="off" aria-required="true" />
                            </div>
                            <div className="form-group">
                                <input className="form-control" type="email" name="email" placeholder="E-mail" required="" autocomplete="off" aria-required="true" />
                            </div>
                            <div className="form-group">
                                <input type="password" name="pass" className="form-control" placeholder="Password" required="" autocomplete="off" aria-required="true" />
                            </div>
                            <input className="btn btn-md btn-primary btn-center" id="sign_up" type="button" value="Sign Up" />
                        </form>
                    </div>
                </Modal>

                {/* <!-- signUp End -->
                  <!-- login --> */}

                <Modal open={login} onClose={this.onCloseModalclose}>
                
                    <div className="modal-body">
            
                        <center><h2>Login and Get <span>Started</span></h2></center>
                        <center> <span className="subtitle">Just fill in the form below</span></center>
                        <form className="contact-form form-validate4" novalidate="novalidate">
                             <div className="form-group">
                                <center><input className="form-control" type="email" name="email" placeholder="E-mail" required="" autocomplete="off" aria-required="true" /></center>
                            </div>
                            <div className="form-group">
                                 <center><input type="password" name="pass" className="form-control" placeholder="Password" required="" autocomplete="off" aria-required="true" /></center>
                            </div>
                             <center><input className="btn btn-md btn-primary btn-center" id="login_btn" type="button" value="Login" /></center>
                        </form>
                    </div>
                </Modal>
            
           
            
            
            </></div>

        );
    }
}




export default Header