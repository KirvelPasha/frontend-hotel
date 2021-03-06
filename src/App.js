import React from 'react';
import './App.css';

import {Col, Container, Row} from "react-bootstrap";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

import NavigationBar from './components/NavigationBar'
import Welcome from './components/Welcome'
import ApartmentList from "./components/ApartmentList";
import ApartmentDescription from './components/ApartmentDescription';
import CommentList from './components/CommentList';
import Login from './components/Login';
import Join from './components/Join';
import CommentAdd from "./components/CommentAdd";
import SignOut from './components/SignOut';

function App() {

    const marginTop = {
        marginTop: "20px"
    };

    return (
        <Router>
            <NavigationBar/>
            <Container>
                <Row>
                    <Col lg={12} style={marginTop}>
                        <Switch>
                            <Route path="/" exact component={Welcome}/>
                            <Route path="/apartments" exact component={ApartmentList}/>
                            <Route path="/apartments/:id" exact render={(props) => <ApartmentDescription id=":id"/>}/>
                            <Route path="/apartments/:id" exact render={(props) => <CommentList id=":id"/>}/>
                            <Route path="/apartments/:id" exact render={(props) => <CommentAdd id=":id"/>}/>
                            <Route path="/login" exact component={Login}/>
                            <Route path="/join" exact component={Join}/>
                            <Route path="/logout" component={SignOut}/>
                        </Switch>
                    </Col>
                </Row>
            </Container>
        </Router>
    );
}

export default App;
