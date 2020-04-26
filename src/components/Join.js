import React from "react";

import {Form, Button} from "react-bootstrap";
import axios from 'axios';

class Join extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name : '',
            surname : ''

        }
    }

    handleChange  = e => {
        this.setState({
            name : e.target.value,
            surname : e.target.value
        })
    };

    handleSubmit = e => {
        e.preventDefault();
        console.log(this.state)
        axios.post('http://localhost:8081/person', this.state)
        
    };

    render() {
        return (
            <Form onSubmit={this.handleSubmit}>
                <Form.Group controlId="formGroupEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" name="email" autoComplete="off" onChange={this.handleChange}/>
                </Form.Group>
                <Form.Group controlId="formGroupPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" name="password" autoComplete="off" onChange={this.handleChange}/>
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        )
    }
}

export default Join;