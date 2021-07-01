import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link, useRouteMatch } from 'react-router-dom';
import { Navbar, Nav, Form, FormControl, Button, Card, CardGroup} from 'react-bootstrap';
class Pdiabetes extends Component{
    render() {
        
        return(
            <React.Fragment>
                <br/>
                <br/>
             <Card.Body>
                            
                            <Card style={{ width: '75rem', marginLeft:"9rem", marginRight:"9rem"}}>
                            <h2 style={{textAlign:"center"}}>
                                <b>Diabetes Prescription</b>
                            </h2>
                                <Card.Img style={{height:"25rem"}} variant="top" src="https://pharmaphorum.com/wp-content/uploads/2016/10/Diabetes-generic-600-600x340.jpg"></Card.Img>
                                <br/>
                                <h3 style={{color:"hotpink"}}><b>Follow below for Elderly Diabetes Patients</b></h3>
                                <h5>
                                    <br/>
                                    <ul>
                                        <li><b>Novolin 70/30 (human insulin NPH-human insulin regular)</b></li>
                                        <li><b>Pramlintide (SymlinPen 120, SymlinPen 60)</b></li>
                                        <li><b>acarbose (Precose)</b></li>
                                        <li><b>Bromocriptine (Cycloset)</b></li>
                                        <li><b>linagliptin (Tradjenta)</b></li>
                                        <li><b>pioglitazone (Actos)</b></li>
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
export default Pdiabetes;
