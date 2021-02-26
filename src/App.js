import React from 'react';
import './App.scss';
import './tooltip.scss';

function validateInput(value, regex, target) {
    if (value.match(regex) === null) {
        target.classList.toggle("error__pass");
        setTimeout(() => target.classList.toggle("error__pass"), 820);
        return false;
    }
    return true;
}

export class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            valueEmail: '',
            valuePass: '',
            valueUser: '',
            passwordCheck: {
                length: 0,
                checkNumber: false,
                checkUpper: false,
                checkLower: false
            },
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.handleEmailUserChange = this.handleEmailUserChange.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
        let inputUser = event.target[0],
            inputEmail = event.target[1],
            inputPass = event.target[2],
            inputCheck = true,
            userValidRegex = /^[a-zA-z0-9._-]{4,32}$/,
            emailValidRegex = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
            passValidRegex = /^(?=.*[0-9])(?=.*[A-Z])(?=.*[a-z])[A-Za-z0-9 !"#$%&'()*+,\-./:;<=>?@[\\\]^_`{|}~]{8,}$/;
        inputCheck = inputCheck && validateInput(this.state.valueUser, userValidRegex, inputUser);
        inputCheck = inputCheck && validateInput(this.state.valueEmail, emailValidRegex, inputEmail);
        inputCheck = inputCheck && validateInput(this.state.valuePass, passValidRegex, inputPass);
        if (inputCheck) {
            localStorage.setItem(inputUser.value, JSON.stringify({
                user: inputUser.value, 
                email: inputEmail.value, 
                password: inputPass.value
            }));
        }
    }

    handleEmailUserChange(e) {
        this.setState({ [e.target.type === "email" ? "valueEmail" : "valueUser"]: e.target.value });
    }

    handlePasswordChange(e) {
        this.setState({ "valuePass": e.target.value });
        let regexLower = /(?=.*[a-z])/,
            regexUpper = /(?=.*[A-Z])/,
            regexNumber = /(?=.*[0-9])/;
        this.setState({
            passwordCheck: {
                length: e.target.value.length,
                checkLower: e.target.value.match(regexLower) ? true : false,
                checkUpper: e.target.value.match(regexUpper) ? true : false,
                checkNumber: e.target.value.match(regexNumber) ? true : false
            }
        });
    }

    render() {
        return (<div className="wrapper">
            <form onSubmit={this.handleSubmit}>
                <p>Registration with Email</p>
                <Username userValuePass={this.handleEmailUserChange} value={this.state.valueUser} />
                <Email emailValuePass={this.handleEmailUserChange} value={this.state.valueEmail} />
                <Password
                    passwordValuePass={this.handlePasswordChange}
                    value={this.state.valuePass}
                    passCheck={this.state.passwordCheck}
                />
                <input type="submit" value="Submit"></input>
            </form>
        </div>);
    }
}

class Username extends React.Component {
    constructor(props) {
        super(props);
        this.userHandle = this.userHandle.bind(this);
    }

    userHandle(e) {
        this.props.userValuePass(e);
    }

    render() {
        return (
            <div className="input__wrapper">
                <input
                    type="text"
                    placeholder="Username"
                    onChange={this.userHandle}
                    value={this.props.value}
                >
                </input>
                {this.props.value.match(/^[a-zA-z0-9._-]{4,32}$/)
                    ? <div className="tooltip tooltip__green"><i className="fa fa-check"></i></div>
                    : <div className="tooltip">!<UserTooltip /></div>}
            </div>
        );
    }
}

function UserTooltip(props) {
    return (
        <div className="tooltip__text">
            <span>Username must be between 4 and 32 characters<br />
            Username may contain _, -, .
            </span>
        </div>
    )
}

class Email extends React.Component {
    constructor(props) {
        super(props);
        this.emailChange = this.emailChange.bind(this);
    }

    emailChange(e) {
        this.props.emailValuePass(e);
    }

    render() {
        return (
            <div className="input__wrapper">
                <input
                    placeholder="Email"
                    onChange={this.emailChange}
                    type="email"
                    value={this.props.value}
                ></input>
            </div>
        );
    }
}

class Password extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            passShow: false,
        };
        this.passChange = this.passChange.bind(this);
        this.togglePassword = this.togglePassword.bind(this);
    }

    togglePassword(event) {
        this.setState({ passShow: this.state.passShow ? false : true });
        event.target.classList.toggle("fa-eye-slash");
    }

    passChange(e) {
        this.props.passwordValuePass(e);
    }

    render() {
        let tooltipToggle = this.props.passCheck.checkNumber && this.props.passCheck.checkLower && this.props.passCheck.checkUpper && this.props.passCheck.length > 7;
        return (
            <div className="input__wrapper">
                <input
                    placeholder="Password"
                    onChange={this.passChange}
                    type={this.state.passShow ? "text" : "password"}
                    value={this.props.value}
                ></input><i className="far fa-eye" onClick={this.togglePassword}></i>
                {tooltipToggle
                    ? <div className="tooltip tooltip__green"><i className="fa fa-check"></i></div>
                    : <div className="tooltip">!<PasswordTooltip /></div>}
            </div>
        )
    }
}

function PasswordTooltip(props) {
    return (
        <div className="tooltip__text">
            <span>Password Must:<br />
            * be longer than 7 characters<br />
            * contain at least one number<br />
            * contain at least one upper and lower case letters</span>
        </div>
    )
}

function App() {
    return (
        <div>
            <Form />
        </div>
    );
}

export default App;