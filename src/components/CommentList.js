import React from 'react';
import CommentAdd from "./CommentAdd";

class CommentList extends React.Component {

    render() {
        return (
            <CommentAdd apartmentId={this.props.apartmentId}/>
        );
    }
}

export default CommentList;