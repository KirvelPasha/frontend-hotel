import React from 'react';
import {Card} from 'react-bootstrap';

class CommentList extends React.Component {

    render() {
        return (
            <Card>
                <Card.Body>
                    {this.props.test}
                </Card.Body>
            </Card>
        );
    }

}

export default CommentList;