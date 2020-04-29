import React from 'react';
import {Button, Form} from "react-bootstrap";
import axios from 'axios';
import '../css/Login.css';

class Login extends React.Component {
    PERSON_API_URL = 'http://localhost:8081/person';

    constructor(props) {
        super(props);
        this.state = {
            login: '',
            password: ''

        }
    }

    handleChange = e => {
        this.setState({
            login: e.target.value,
            password: e.target.value
        })
    };

    handleSubmit = e => {
        e.preventDefault();
        console.log(this.state);
        axios.post(this.PERSON_API_URL, this.state);
    };

    render() {
        return (
            <Form className="mainLogin">
                <h2>Sign In</h2>
            <Form className="loginForm" onSubmit={this.handleSubmi}>
                <Form.Group controlId="formGroupLogin">
                    <Form.Label className="text-white">Login</Form.Label>
                    <Form.Control type="login" placeholder="Login" name="login" autoComplete="off"
                                  onChange={this.handleChange}/>
                </Form.Group>
                <Form.Group controlId="formGroupPassword">
                    <Form.Label className="text-white">Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" name="password" autoComplete="off"
                                  onChange={this.handleChange}/>
                </Form.Group>
                <Button variant="primary" type="submit">
                    Sign in
                </Button>
            </Form>
            </Form>
        )
    }
}

export default Login;