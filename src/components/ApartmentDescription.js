import React from 'react';
import {withRouter} from "react-router"
import axios from "axios";

class ApartmentDescription extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            apartment: Object
        }
    }

    componentDidMount() {
        this.getApartment();
    }

    getApartment() {
        let id = this.props.match.params.id;
        axios.get("http://localhost:8081/apartments/" + id)
            .then(response => response.data)
            .then((data) => {
                this.setState({apartment: data})
            })
    }

    render() {
        return (
            <div className="bg-dark text-white">
                <h1>{this.state.apartment.id}</h1>
            </div>

        );
    }
}

export default withRouter(ApartmentDescription);