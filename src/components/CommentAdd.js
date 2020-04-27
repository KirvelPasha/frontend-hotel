import React from "react";
import {Button, Form} from "react-bootstrap";
import axios from "axios";


class CommentAdd extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            comment: ''

        }
    }

    handleChange = e => {
        this.setState({
            comment: e.target.value,
        })
    };

    handleSubmit = e => {
        e.preventDefault();
        console.log(this.props.apartmentId);
        axios.post('http://localhost:8081/comments', this.state)

    };

    render() {
        return (
            <Form onSubmit={this.handleSubmit}>
                <Form.Group controlId="formGroupLogin">
                    <Form.Control type="comment" name="comment" autoComplete="off"
                                  onChange={this.handleChange}/>
                </Form.Group>
                <Button variant="primary" type="submit">
                    Add
                </Button>
            </Form>
        )
    }
}

export default CommentAdd;
