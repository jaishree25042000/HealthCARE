import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link, useRouteMatch } from 'react-router-dom';
import { Navbar, Nav, Form, FormControl, Button, Card, CardGroup} from 'react-bootstrap';
class Diabetes extends Component{
    render() {
        
        return(
            <React.Fragment>
                <br/>
                <br/>
             <Card.Body>
                            
                            <Card style={{ width: '75rem', marginLeft:"9rem", marginRight:"9rem"}}>
                            <h2 style={{textAlign:"center"}}>
                                <b>Diet Plan for Cancer Patients</b>
                            </h2>
                                <Card.Img style={{height:"25rem"}} variant="top" src="can.jpg"></Card.Img>
                                <br/>
                                <h3 style={{color:"hotpink"}}><b>Best Cancer-Fighting Meal Plan</b></h3>
                                <h5>
                                    <br/>
                                    <ul>
                                        <li><b>Breakfast</b><br/>Blueberry-Orange Smoothie, English Muffin With Peanut Butter <b> / </b>Scrambled Eggs With Broccoli<b> / </b> Cereal Bar, Pear & Latte<b> / </b> Almond Butter & Banana Toast<b> / </b>Cereal With Raisins & Almonds; Half Grapefruit With Honey<b> / </b>Berry-Coconut Oatmeal<b> / </b>Pear Pancakes With Honey</li>
                                        <br/>
                                        <li><b>Lunch</b><br/>Tomato Soup & White Bean Salad<b> / </b>Pasta Salad With Salmon<b> / </b>Avocado, Spinach & Swiss Sandwich<b> / </b>Waldorf Chicken Salad<b> / </b> Zippy Egg-Salad Sandwich<b> / </b>Tofu Salad<b> / </b>Tabbouleh, Hummus & Pita</li>
                                        <br/>
                                        <li><b>Dinner</b><br/>Spinach Pizza With Romaine Salad<b> / </b>Chicken Tacos With Mango & Jicama<b> / </b>Turkey Bolognese With Tricolor Salad<b> / </b>Minestrone With Squash, Beans & Kale<b> / </b> Steak Salad <b> / </b>Tomato-Pesto Tilapia With Garlicky Kale<b> / </b>Chicken Kebabs With Couscous</li>
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
export default Diabetes;
