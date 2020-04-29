import React from 'react';
import axios from 'axios';
import {Table} from 'react-bootstrap'

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
                <tr>
                </tr>
                </thead>
                <tbody>
                <tr key="1">
                    <td>mbmnb</td>
                </tr>
                </tbody>
            </Table>
        );
    }
}

export default CommentList;