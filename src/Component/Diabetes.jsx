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
                                <b>Diet Plan for Diabetes Patient</b>    
                            </h2>
                                <Card.Img style={{height:"25rem"}} variant="top" src="https://emoha.com/sites/default/files/2021-02/indian-diet-for-diabetic-patients-1.jpg"></Card.Img>
                                <br/>
                                <h3 style={{color:"hotpink"}}><b>Best Foods for Elderly Diabetes Patients</b></h3>
                                <h5>
                                    <br/>
                                    <ul>
                                        <li><b>6:30 AM</b><br/>Methi seeds – 2 tsp (soaked)<br/>Water – 1 glass</li>
                                        <li><b>8:30 AM</b><br/>Millet Vegetable Cheela/Dosa – 2<br/>Green chutney – 1 tsp</li>
                                        <li><b>11:00 AM</b><br/>Buttermilk – 1 glass<br/>Apple – 1</li>
                                        <li><b>1:30 PM</b><br/>Mixed Vegetable Salad – 1 cup & Multigrain chapati – 2<br/>OR<br/>Chapati – 1  & Brown rice – ½ katori & Methi Dal – 1 katori & Bhindi sabji – 1 katori</li>
                                        <li><b>4:30 PM</b><br/>Lemon green tea without sugar/honey – 1 cup<br/>Roasted Chana – 0.25 cup </li>
                                        <li><b>7:30 PM</b><br/>Sprouts salad – 1 katori</li>
                                        <li><b>8:30 PM</b><br/>Mixed vegetable Daliya – 1 cup & Mint curd chutney – 2 tsp<br/>OR<br/>Chapati – 1 & Palak sabji – 2 katori</li>
                                        <li><b>10:00 PM</b><br/>Milk without Sugar – 1/2 cup</li>
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
