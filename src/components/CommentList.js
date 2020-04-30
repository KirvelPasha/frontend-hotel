import React from 'react';
import {withRouter} from 'react-router';
import axios from 'axios';
import {Table} from 'react-bootstrap'

class CommentList extends React.Component {
    COMMENT_API_URL = 'http://localhost:8081/comments/filter?apartmentId=';
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
        let apartmentId = this.props.match.params.id;
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

export default withRouter(CommentList);