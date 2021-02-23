import React from 'react';
import './App.scss';

export class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            valueEmail: '',
            valuePass: '',
            length: 0,
            passShow: false,
            checkNumber: false,
            checkUpper: false,
            checkLower: false
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.togglePassword = this.togglePassword.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
        let inputPass = event.target[1];
        let regex = /^(?=.*[0-9])(?=.*[A-Z])(?=.*[a-z])[A-Za-z0-9 !"#$%&'()*+,\-./:;<=>?@[\\\]^_`{|}~]{8,}&/;
        if (!inputPass.value.match(regex)) {
            inputPass.classList.toggle("error__pass");
            setTimeout(() => inputPass.classList.toggle("error__pass"), 820);
        }
    }

    handleChange(e) {
        this.setState({ [e.target.type === "email" ? "valueEmail" : "valuePass"]: e.target.value });
        if (e.target.type === "password") {
            let regexLower = /(?=.*[a-z])/;
            let regexUpper = /(?=.*[A-Z])/;
            let regexNumber = /(?=.*[0-9])/;
            this.setState({
                length: e.target.value.length,
                checkLower: e.target.value.match(regexLower) ? true : false,
                checkUpper: e.target.value.match(regexUpper) ? true : false,
                checkNumber: e.target.value.match(regexNumber) ? true : false
            });
        }
    }

    togglePassword(event) {
        this.setState({passShow: this.state.passShow ? false : true});
        event.target.classList.toggle("fa-eye-slash");
    }

    render() {
        return (<div>
            <form onSubmit={this.handleSubmit}>
                <input
                    placeholder="Email"
                    onChange={this.handleChange}
                    type="email"
                    value={this.state.valueEmail}
                ></input><br />
                <label>
                <input
                    placeholder="Password"
                    onChange={this.handleChange}
                    type={this.state.passShow ? "text" : "password"}
                    value={this.state.valuePass}
                ></input><i className="far fa-eye" onClick={this.togglePassword}></i></label><br />
                <span 
                    className={this.state.length > 7  ? "correct" : "incorrect"}
                >* Password must be longer than 7 characters</span><br/>
                <span 
                    className={this.state.checkNumber ? "correct" : "incorrect"}
                >* Password must contain at least one number</span><br/>
                <span 
                    className={this.state.checkLower && this.state.checkUpper ? "correct" : "incorrect"}
                >* Password must contain at least one upper and lower case letters</span><br/>
                <input type="submit" />
            </form>
        </div>);
    }
}

function App() {
    return (
        <div>
            Registration with Email
            <Form />
        </div>
    );
}

export default App;