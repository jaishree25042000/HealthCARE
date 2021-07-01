import React, { Component } from 'react';
import { Navbar, Nav, Form, FormControl, Button, Card, CardGroup} from 'react-bootstrap';
class Home extends Component{
    render() {
        
        return(
            <React.Fragment>
                <br/>
                <br/>
                <br/>
                    <CardGroup>
                    <Card style={{ width: '40rem', marginLeft:"5rem", marginRight:"2.5rem"}}>
                    <iframe style={{height:"12rem"}} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3720.161126187163!2d79.07734621466001!3d21.185757285913503!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd4c113d847dcbf%3A0x7fd062d82b6be17c!2sAlexis%20Multispecialty%20Hospital!5e0!3m2!1sen!2sin!4v1625066876614!5m2!1sen!2sin" ></iframe>
                        <Card.Body>
                            <h3 style={{color:"darkturquoise"}}><i class="fa fa-map-marker fa-1x"></i><b>   Find Near by Hospitals and Medical Stores</b></h3>
                            <Card.Text>
                            

                            </Card.Text>
                            <Button href="https://g.page/alexishospital?share" variant="primary">Search More</Button>
                        </Card.Body>
                    </Card>
                    <Card style={{ width: '40rem', marginLeft:"2.5rem", marginRight:"5rem"}}>
                        <Card.Img variant="top" height="194rem" src="https://www.pngix.com/pngfile/big/614-6145280_diet-logo-png-health-and-diet-logo-transparent.png"></Card.Img>
                        <Card.Body>
                        <h3 style={{color:"darkturquoise"}}><i class="fa fa-cutlery fa-1x"></i><b>   Diet Plan</b></h3>
                            <Card.Text>
                            

                            </Card.Text>
                            <Button href="/DietPlan" variant="primary">Get your Diet Plan </Button>
                        </Card.Body>
                    </Card>
                    </CardGroup>
                    <br/>
                    <br/>
                    <CardGroup>
                    <Card style={{ width: '40rem', marginLeft:"5rem", marginRight:"2.5rem" }}>
                        <Card.Img style={{height:"15rem"}} variant="top" src="https://image.freepik.com/free-vector/doctor-with-medical-prescription_136162-16.jpg"></Card.Img>   
                        <Card.Body>
                        <h3 style={{color:"darkturquoise"}}><i class="fa fa-file-text fa-1x"></i><b>   Get Prescription by Doctor</b></h3>
                            <Card.Text>
                            

                            </Card.Text>
                            <Button href="/Prescription" variant="primary">Get your Prescription</Button>
                        </Card.Body>
                    </Card>
                    <Card style={{ width: '40rem', marginLeft:"2.5rem", marginRight:"5rem"}}>
                        <Card.Img style={{height:"15rem"}} variant="top" height="194rem" src="https://res.cloudinary.com/a-place-for-mom/image/upload/t_default/web-lighthouse/prod/healthy-habits-for-seniors-to-keep.jpg"></Card.Img>
                        <Card.Body>
                        <h3 style={{color:"darkturquoise"}}><i class="fa fa-pagelines fa-1x"></i><b>   Senior Care Tips for good Health</b></h3>
                            <Card.Text>
                            

                            </Card.Text>
                            <Button href="/CareTips" variant="primary">Tips for good Health</Button>
                        </Card.Body>
                    </Card>
                    </CardGroup>
                
                
                                        
            </React.Fragment>
            
        )
    }
}
export default Home;
