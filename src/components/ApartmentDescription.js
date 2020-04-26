import React from 'react';
import {withRouter} from "react-router"
class ApartmentDescription extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            apartment: props.apartment
        }
    }

    render() {
        return (
            <div className="bg-dark text-white">
                <h1>{this.props.match.params.id}</h1>
            </div>

        );
    }
}

export default withRouter(ApartmentDescription);