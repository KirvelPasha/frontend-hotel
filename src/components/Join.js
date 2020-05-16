import React from "react";

import {Button, Form} from "react-bootstrap";
import axios from 'axios';
import '../css/Join.css';

class Join extends React.Component {
    PERSON_API_URL = 'http://localhost:8081/person';

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            surname: '',
            login: '',
            email: '',
            password: ''
        }
    }

    handleNameChange = e => {
        this.setState({
            name: e.target.value
        })
    };


    handleSurnameChange = e => {
        this.setState({
            surname: e.target.value
        })
    };


    handleLoginChange = e => {
        this.setState({
            login: e.target.value
        })
    };


    handleEmailChange = e => {
        this.setState({
            email: e.target.value
        })
    };

    handlePasswordChange = e => {
        this.setState({
            password: e.target.value
        })
    };

    handleSubmit = e => {
        e.preventDefault();
        console.log(this.state);
        axios.post(this.PERSON_API_URL, this.state)
            .then(() => {
                this.props.history.push('/login')
            })
    };

    render() {
        return (
            <Form className="main">
                <h2>Sign Up</h2>
            <Form className="joinForm" onSubmit={this.handleSubmit}>
                <Form.Group controlId="formGroupName">
                    <Form.Label className="text-white">Name</Form.Label>
                    <Form.Control type="name" placeholder="Enter name" name="name" autoComplete="off"
                                  onChange={this.handleNameChange}/>
                </Form.Group>
                <Form.Group controlId="formGroupSurname">
                    <Form.Label className="text-white">Surname</Form.Label>
                    <Form.Control type="surname" placeholder="Enter surname" name="surname" autoComplete="off"
                                  onChange={this.handleSurnameChange}/>
                </Form.Group>
                    <Form.Group controlId="formGroupEmail">
                        <Form.Label className="text-white">Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" name="email" autoComplete="off"
                                      onChange={this.handleEmailChange}/>
                    </Form.Group>
                    <Form.Group controlId="formGroupLogin">
                        <Form.Label className="text-white">Login</Form.Label>
                        <Form.Control type="login" placeholder="login" name="login" autoComplete="off"
                                      onChange={this.handleLoginChange}/>
                    </Form.Group>
                <Form.Group controlId="formGroupPassword">
                    <Form.Label className="text-white">Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" name="password" autoComplete="off"
                                  onChange={this.handlePasswordChange}/>
                </Form.Group>
                <Button variant="primary" type="submit">
                    Create account
                </Button>
            </Form>
            </Form>
        )
    }
}

export default Join;