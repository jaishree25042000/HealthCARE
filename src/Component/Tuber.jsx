import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link, useRouteMatch } from 'react-router-dom';
import { Navbar, Nav, Form, FormControl, Button, Card, CardGroup} from 'react-bootstrap';
class Tuber extends Component{
    render() {
        
        return(
            <React.Fragment>
                <br/>
                <br/>
             <Card.Body>
                            
                            <Card style={{ width: '75rem', marginLeft:"9rem", marginRight:"9rem"}}>
                            <h2 style={{textAlign:"center"}}>
                                <b>Diet Plan for Tuberculosis Patient</b>
                            </h2>
                                <Card.Img style={{height:"25rem"}} variant="top" src="https://www.thehindu.com/sci-tech/health/mm04y7/article25017307.ece/ALTERNATES/LANDSCAPE_1200/23THiStock-920957194"></Card.Img>
                                <br/>
                                <h3 style={{color:"hotpink"}}><b>A healthy balanced diet for a person with TB</b></h3>
                                <h5>
                                    <ul>
                                        <li><b>Carbohydrates & fats</b>
                                        <br/>Whole grain cereals, millets<br/>Vegetable oils, ghee, butter<br/>Nuts and oil seeds. Sugars</li>
                                        <li><b>Proteins</b><br/>Pulses, nuts and some oilseeds<br/>Milks & milk products<br/>Meat, fish, poultry</li>
                                        <li><b>Vitamins & minerals</b><br/>Green leafy vegatables<br/>Other vegetables & fruits<br/>Eggs, milk & milk products and flesh foods</li>
                                    </ul>
                                </h5>
                                <h3 style={{color:"hotpink"}}><b>What food should be avoided by a person with  TB</b> </h3>
                                <h5>
                                    <ul>
                                        <li>Alcohol in any form, as it increases the risk of drug toxicity</li>
                                        <li>Carbonated drinks</li>
                                        <li>Excess of tea and coffee, or their intake with food</li>
                                        <li>Tobacco and tobacco products</li>
                                        <li>An excess of spices & salt</li>
                                    </ul>
                                    <br/>
                                    <Link to="/DietPlan">Back to previous page</Link>
                                </h5>
                            </Card>
             </Card.Body>
            </React.Fragment>
            
            );
    }
}
export default Tuber;
