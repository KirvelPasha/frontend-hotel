import React from 'react';
import {Button, Form} from "react-bootstrap";
import axios from 'axios';

class Login extends React.Component {
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
        axios.post('http://localhost:8081/person', this.state)

    };

    render() {
        return (
            <Form onSubmit={this.handleSubmit}>
                <Form.Group controlId="formGroupLogin">
                    <Form.Label>Login</Form.Label>
                    <Form.Control type="login" placeholder="Login" name="login" autoComplete="off"
                                  onChange={this.handleChange}/>
                </Form.Group>
                <Form.Group controlId="formGroupPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" name="password" autoComplete="off"
                                  onChange={this.handleChange}/>
                </Form.Group>
                <Button variant="primary" type="submit">
                    Sign in
                </Button>
            </Form>
        )
    }
}

export default Login;