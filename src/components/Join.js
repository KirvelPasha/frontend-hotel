import React from "react";

import {Button, Form} from "react-bootstrap";
import axios from 'axios';

class Join extends React.Component {
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

    handleChange = e => {
        this.setState({
            name: e.target.value,
            surname: e.target.value,
            login: e.target.value,
            email: e.target.value,
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
                <Form.Group controlId="formGroupName">
                    <Form.Label className="text-white">Name</Form.Label>
                    <Form.Control type="name" placeholder="Enter name" name="name" autoComplete="off"
                                  onChange={this.handleChange}/>
                </Form.Group>
                <Form.Group controlId="formGroupSurname">
                    <Form.Label className="text-white">Surname</Form.Label>
                    <Form.Control type="surname" placeholder="Enter surname" name="surname" autoComplete="off"
                                  onChange={this.handleChange}/>
                    <Form.Group controlId="formGroupEmail">
                        <Form.Label className="text-white">Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" name="email" autoComplete="off"
                                      onChange={this.handleChange}/>
                    </Form.Group>
                    <Form.Group controlId="formGroupLogin">
                        <Form.Label className="text-white">Login</Form.Label>
                        <Form.Control type="login" placeholder="login" name="login" autoComplete="off"
                                      onChange={this.handleChange}/>
                    </Form.Group>
                </Form.Group>
                <Form.Group controlId="formGroupPassword">
                    <Form.Label className="text-white">Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" name="password" autoComplete="off"
                                  onChange={this.handleChange}/>
                </Form.Group>
                <Button variant="primary" type="submit">
                    Create account
                </Button>
            </Form>
        )
    }
}

export default Join;