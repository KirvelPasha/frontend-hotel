import React from 'react';

import {Card, Table} from 'react-bootstrap';
import {Link} from "react-router-dom"
import axios from 'axios';
import NavigationBar from "./NavigationBar";

class ApartmentList extends React.Component {
    APARTMENT_API_URL = 'http://localhost:8081/apartments';

    constructor(props) {
        super(props);
        this.state = {
            apartments: []
        }
    }

    componentDidMount() {
        localStorage.setItem("user", "test");
        this.getApartments();
    }

    getApartments() {
        axios.get(this.APARTMENT_API_URL)
            .then(response => response.data)
            .then((data) => {
                this.setState({apartments: data})
            })
    }

    render() {
        return (
            <Card className="border border-dark bg-dark text-white">
                <Card.Header>Apartment List</Card.Header>
                <Card.Body>
                    <Table bordered hover striped variant="dark">
                        <thead>
                        <tr>
                            <th>#</th>
                            <th>Count Rooms</th>
                            <th>Count Places</th>
                            <th>Price</th>
                            <th>More</th>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            this.state.apartments.length === 0 ?
                                <tr align="center">
                                    <td colSpan="6">No Apartments</td>
                                </tr> :
                                this.state.apartments.map((apartment) => (
                                    <tr key={apartment.id}>
                                        <td>{apartment.id}</td>
                                        <td>{apartment.countRooms}</td>
                                        <td>{apartment.countPlaces}</td>
                                        <td>{apartment.price}</td>
                                        <td>
                                            <Link to={"/apartments/" + apartment.id} className="nav-link">Read</Link>
                                        </td>
                                    </tr>
                                ))
                        }
                        </tbody>
                    </Table>
                </Card.Body>
            </Card>
        );
    }
}

export default ApartmentList;