import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link, useRouteMatch } from 'react-router-dom';
import { Navbar, Nav, Form, FormControl, Button, Card, CardGroup} from 'react-bootstrap';
class Pcancer extends Component{
    render() {
        
        return(
            <React.Fragment>
                <br/>
                <br/>
             <Card.Body>
                            
                            <Card style={{ width: '75rem', marginLeft:"9rem", marginRight:"9rem"}}>
                            <h2 style={{textAlign:"center"}}>
                                <b>Cancer Prescription</b>
                            </h2>
                                <Card.Img style={{height:"25rem"}} variant="top" src="https://healthnirvaana.com/wp-content/uploads/2016/09/Cancer-Health-Nirvaana-6.jpg"></Card.Img>
                                <br/>
                                <h3 style={{color:"hotpink"}}><b>Follow below for Cancer Patients</b></h3>
                                <h5>
                                    <br/>
                                    <ul>
                                        <li><b>Adriamycin (chemical name: doxorubicin)</b></li>
                                        <li><b>Ellence (chemical name: epirubicin)</b></li>
                                        <li><b>Halaven (chemical name: eribulin)</b></li>
                                        <li><b>Mitomycin (chemical name: mutamycin)</b></li>
                                        <li><b>Taxotere (chemical name: docetaxel)</b></li>
                                        <li><b>Xeloda (chemical name: capecitabine)</b></li>
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
export default Pcancer;
