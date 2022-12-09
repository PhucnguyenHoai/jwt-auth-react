import axios from 'axios';
import React from 'react';
import { setAuthToken } from '../component/setAuthen';

class LoginPage extends React.Component {

    state = {
        email: 'eve.holt@reqres.in',
        password: 'cityslicka'
    }

    changeEmail = (event) => {
        this.setState({
            email: event.target.value
        })
    }

    changePassword = (event) => {
        this.setState({
            password: event.target.value
        })
    }

    handleSubmit = (loginPayload) => {

        axios.post("https://reqres.in/api/login", loginPayload)
            .then(response => {
                //get token from response
                const token = response.data.token;
                console.log(">>>change token: ", response);
                //set JWT token to local
                localStorage.setItem("token", token);

                //set token to axios common header
                setAuthToken(token);

                //redirect user to home page
                window.location.href="/"
            })
            .catch(
                err => {
                    console.log(err);
                    alert("Account not found");
                })
    };

    render() {
        console.log(">>>change data: ", this.state);
        return (
            <>
                <form>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Email address</label>
                        <input
                            onChange={this.changeEmail}
                            type="email"
                            className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                        <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Password</label>
                        <input
                            onChange={this.changePassword}
                            type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
                    </div>
                    <button type="button" className="btn btn-primary" onClick={() => this.handleSubmit(this.state)}>Submit</button>
                </form>
            </>
        )
    }
}
export default LoginPage;