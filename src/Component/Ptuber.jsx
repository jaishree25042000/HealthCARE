import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link, useRouteMatch } from 'react-router-dom';
import { Navbar, Nav, Form, FormControl, Button, Card, CardGroup} from 'react-bootstrap';
class Ptuber extends Component{
    render() {
        
        return(
            <React.Fragment>
                <br/>
                <br/>
             <Card.Body>
                            
                            <Card style={{ width: '75rem', marginLeft:"9rem", marginRight:"9rem"}}>
                            <h2 style={{textAlign:"center"}}>
                                <b>Tuberculosis Prescription</b>
                            </h2>
                                <Card.Img style={{height:"25rem"}} variant="top" src="https://st1.thehealthsite.com/wp-content/uploads/2018/03/tuberculosis-drugs.jpg?impolicy=Medium_Resize&w=1200&h=800"></Card.Img>
                                <br/>
                                <h3 style={{color:"hotpink"}}><b>Follow below for Tuberculosis Patients</b></h3>
                                <h5>
                                    <br/>
                                    <ul>
                                        <li><b>Isoniazid 5 (mg/kg body weight) maximum (mg) 300</b></li>
                                        <li><b>Rifampicin 10 (mg/kg body weight) maximum (mg) 600</b></li>
                                        <li><b>Pyrazinamide 25 (mg/kg body weight)</b></li>
                                        <li><b>Ethambutol 15 (mg/kg body weight)</b></li>
                                        <li><b>Ensure Plus </b></li>
                                        <li><b>Focus Syrup</b></li>
                                    </ul>
                                    <br/>
                                    <Link to="Prescription">Back to previous page</Link>
                                </h5>
                            </Card>
             </Card.Body>
            </React.Fragment>
            
            );
    }
}
export default Ptuber;
