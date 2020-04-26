import React from 'react';

import {Jumbotron} from "react-bootstrap";

class Welcome extends React.Component {
    render() {
        return (
            <Jumbotron className="bg-dark text-white">
                <h1>Hello World!</h1>
                <p>Text </p>
            </Jumbotron>
        );
    }
}

export default Welcome