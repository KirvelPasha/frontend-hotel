import React from 'react';
import {withRouter} from "react-router";
import axios from "axios";
import CommentList from "./CommentList";
import CommentAdd from "./CommentAdd";

class ApartmentDescription extends React.Component {
    APARTMENT_API_URL = 'http://localhost:8081/apartments/';

    constructor(props) {
        super(props);
        this.state = {
            apartment: Object
        };
    }

    componentDidMount() {
        this.getApartment();
    }

    getApartment() {
        let apartmentId = this.props.match.params.id;
        axios.get(this.APARTMENT_API_URL + apartmentId)
            .then(response => response.data)
            .then((data) => {
                this.setState({apartment: data})
            })
    }

    render() {
        return (
            <div>
                <h1>{this.state.apartment.id}</h1>
                <CommentList/>
                <CommentAdd/>
            </div>
        );
    }
}

export default withRouter(ApartmentDescription);