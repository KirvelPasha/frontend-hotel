import React from 'react';
import axios from 'axios';
import {Table} from 'react-bootstrap'
import {Link} from "react-router-dom";

class CommentList extends React.Component {
    COMMENT_API_URL = 'http://localhost:8081/comments/';
    constructor(props) {
        super(props);
        this.state = {
            comments: []
        };
    }

    componentDidMount() {
        this.getComments();
    }

    getComments() {
        let apartmentId = this.props.apartmentId;
        console.log(apartmentId);
        axios.get(this.COMMENT_API_URL + apartmentId)
            .then(response => response.data)
            .then((data) => {
                this.setState({comments: data})
            })
    }

    render() {
        return (
            <Table bordered hover striped variant="dark">
                <thead>
                </thead>
                <tbody>
                {
                    this.state.comments.length === 0 ?
                        <tr align="center">
                            <td colSpan="6">No comments</td>
                        </tr> :
                        this.state.comments.map((comment) => (
                            <tr key={comment.id}>
                                <td>{comment.comment}</td>
                            </tr>
                        ))
                }
                </tbody>
            </Table>
        );
    }
}

export default CommentList;