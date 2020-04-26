import React from 'react';

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
                <h1>{this.props.id}</h1>
            </div>

        );
    }
}

export default ApartmentDescription