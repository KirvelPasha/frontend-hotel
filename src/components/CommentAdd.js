import React from 'react';
import {Button, Form} from 'react-bootstrap';
import axios from 'axios';


class CommentAdd extends React.Component {
    COMMENT_API_URL = 'http://localhost:8081/comments';

    constructor(props) {
        super(props);
        this.state = {
            comment: '',
            apartmentId: ''

        }
    }

    handleChange = e => {
        this.setState({
            comment: e.target.value,
            apartmentId: this.props.apartmentId
        })
    };

    reset = () => {
        this.setState({
            comment: ''
        })
    };

    handleSubmit = e => {
        e.preventDefault();
        console.log(this.state);
        axios.post(this.COMMENT_API_URL, this.state);
        this.reset();
    };

    render() {
        const comment = this.state.comment;
        return (
            <Form className="my-4" onSubmit={this.handleSubmit}>
                <Form.Group controlId="formGroupLogin">
                    <Form.Control type="comment" name="comment" value={comment}
                                  autoComplete="off" onChange={this.handleChange}/>
                </Form.Group>
                <Button variant="primary" type="submit">
                    Add
                </Button>
            </Form>
        )
    }
}

export default CommentAdd;
