import React from 'react';
import {withRouter} from 'react-router';

class SignOut extends React.Component {
    componentWillMount() {
        localStorage.clear();
        this.props.history.push('/login')
    }
}

export default withRouter(SignOut);