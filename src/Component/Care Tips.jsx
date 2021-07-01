import React, { Component } from 'react';
import { Navbar, Nav, Form, FormControl, Button, Card, CardGroup} from 'react-bootstrap';
class CareTips extends Component{
    render() {
        
        return(
            <React.Fragment>
                <br/>
                <br/>
             <Card.Body>
                            
                            <Card style={{ width: '75rem', marginLeft:"9rem", marginRight:"9rem"}}>
                            <h2 style={{textAlign:"center"}}>
                                <b>Care Tips for Good Health</b>
                            </h2>
                                <Card.Img style={{height:"25rem"}} variant="top" src="https://images.everydayhealth.com/images/senior-health/14-most-common-health-concerns-for-seniors-rm-722x406.jpg?sfvrsn=ef7f7453_0"></Card.Img>
                                <br/>
                                <h3 style={{color:"hotpink"}}><b>The Senior’s Guide to Staying Healthy Year-Round</b></h3>
                                <h5 style={{color:"steelblue"}}>
                                    <ul>
                                        <li><b>Get Active</b></li>
                                        <li><b>Take supplements as necessary</b></li>
                                        <li><b>Eat a healthy diet</b></li>
                                        <li><b>Wash your hands frequently</b></li>
                                        <li><b>Learn how to manage stress</b></li>
                                        <li><b>Get plenty of rest</b></li>
                                        <li><b>Take steps to prevent infections</b></li>
                                        <li><b>Schedule annual physicals</b></li>
                                        <li><b>Avoid contact with people who are sick</b></li>
                                    </ul>
                                </h5>
                                <h3 style={{color:"hotpink"}}><b>8 Ways to Boost Your Immune System If You’re Over 65</b> </h3>
                                <h5 style={{color:"darkslateblue"}}>
                                    <ul>
                                        <li>Get a flu vaccination</li>
                                        <li>Eat a healthy diet</li>
                                        <li>Get active</li>
                                        <li>Lower your stress level</li>
                                        <li>Get plenty of sleep</li>
                                        <li>Maintain a healthy weight</li>
                                        <li>Quit smoking</li>
                                        <li>Spend time outdoors</li>
                                    </ul>
                                </h5>
                            </Card>
             </Card.Body>             
            </React.Fragment>
            
            );
    }
}
export default CareTips;
