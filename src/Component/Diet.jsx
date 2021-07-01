import React, { Component } from 'react';
import DietPlan from './DietPlan';
import Prescription from './Prescription';
import Home from './Home';
import CareTips from './Care Tips';
import Diabetes from './Diabetes';
import Cancer from './Cancer';
import Tuber from './Tuber';
import Pdiabetes from './Pdiabetes';
import Pcancer from './Pcancer';
import Ptuber from './Ptuber';
import { BrowserRouter as Router, Switch, Route, Link, useRouteMatch } from 'react-router-dom';
import { Navbar, Nav, Form, FormControl, Button, Card, CardGroup, NavDropdown} from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
class Diet extends Component{
    render() {
        
        return(
           
           
            <React.Fragment>
                 <Router>
                <Navbar sticky="top" bg="dark" variant="dark">
                    <Navbar.Brand href="/"><i class="fa fa-heartbeat fa-2x"></i>   Health CARE +</Navbar.Brand>
                    <Nav className="mr-auto">
                    <Nav.Link  style={{marginLeft:"2rem"}} href="/Home"><i class="fa fa-home fa-2x"></i>  Home</Nav.Link><t/>
                    <Nav.Link style={{marginLeft:"2rem"}} href="/DietPlan"> <i class="fa fa-cutlery fa-2x"></i></Nav.Link>
                    <Nav.Link href="/DietPlan">
                    <NavDropdown title="Diet Plan" id="basic-nav-dropdown">
                        <NavDropdown.Item href="/DietPlan">Pick Diet Plan</NavDropdown.Item>
                        <NavDropdown.Item href="/Diabetes">Diabetes</NavDropdown.Item>
                        <NavDropdown.Item href="/Cancer">Cancer</NavDropdown.Item>
                        <NavDropdown.Item href="/Tuber">Tuberculosis</NavDropdown.Item>
                    </NavDropdown>
                    </Nav.Link>
                   
                    <Nav.Link  style={{marginLeft:"2rem"}} href="/Prescription"> <i class="fa fa-file-text fa-2x"></i></Nav.Link>
                    <Nav.Link href="/Prescription">
                    <NavDropdown title="Prescription" id="basic-nav-dropdown">
                        <NavDropdown.Item href="/Prescription">Pick Prescription</NavDropdown.Item>
                        <NavDropdown.Item href="/Pdiabetes">Diabetes</NavDropdown.Item>
                        <NavDropdown.Item href="/Pcancer">Cancer</NavDropdown.Item>
                        <NavDropdown.Item href="/Ptuber">Tuberculosis</NavDropdown.Item>
                    </NavDropdown>
                    </Nav.Link>
                    
                    <Nav.Link  style={{marginLeft:"2rem"}} href="/CareTips"><i class="fa fa-pagelines fa-2x"></i>  Care Tips</Nav.Link>
                    </Nav>
                    <Form inline>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                    <Button variant="outline-info">Search</Button>
                    </Form>
                </Navbar>
                <Carousel>
                    <Carousel.Item>
                        <img style={{height:"500px", width:"200px"}}
                        className="d-block w-100"
                        src="https://res.cloudinary.com/g5-assets-cld/image/upload/x_0,y_819,h_2392,w_4349,c_crop/q_auto,f_auto,fl_lossy,g_center,h_1100,w_2000/g5/g5-c-5kw4dkbh3-providence-assisted-living/g5-cl-1jsxccmi2o-providence-assisted-living/uploads/GettyImages-1053414448_psl87e.jpg"
                        />
                        <Carousel.Caption>
                        <h3 style={{color:"black"}}><b>GET YOUR PROPER DIET PLAN</b></h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img style={{height:"500px", width:"200px"}}
                        className="d-block w-100"
                        src="https://www.asterdmhealthcare.com/fileadmin/_processed_/8/5/csm_medcare-hospital_4d98b56f22.jpg"/>

                        <Carousel.Caption>
                        <h3 style={{color:"lightgray"}}><b>FIND NEARBY HOSPITALS IN YOUR LOCALITY</b></h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img style={{height:"500px", width:"200px"}}
                        className="d-block w-100"
                        src="https://www.spineuniverse.com/sites/default/files/imagecache/gallery-large/wysiwyg_imageupload/3998/2017/11/14/30023853_ML.jpg"/>

                        <Carousel.Caption>
                        <h3 style={{color:"black"}}><b>GET PRESCRIPTION BY YOUR DOCTOR</b></h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                    </Carousel>
                <Switch>
                    <Route exact path="/Home">
                        <Home/>
                    </Route>
                    <Route path="/DietPlan">
                        <DietPlan/>
                    </Route>
                    <Route path="/Prescription">
                        <Prescription/>
                    </Route>
                    <Route path="/CareTips">
                        <CareTips/>
                    </Route>
                    <Route path="/Diabetes">
                        <Diabetes/>
                    </Route>
                    <Route path="/Cancer">
                        <Cancer/>
                    </Route>
                    <Route path="/Tuber">
                        <Tuber/>
                    </Route>
                    <Route path="/DietPlan">
                        <DietPlan/>
                    </Route>
                    <Route exact path="/pdiabetes">
                        <Pdiabetes/>
                    </Route>
                    <Route path="/pcancer">
                        <Pcancer/>
                    </Route>
                    <Route path="/ptuber">
                        <Ptuber/>
                    </Route>
                    <Route path="/Prescription">
                        <Prescription/>
                    </Route>
                    
                </Switch>
                </Router>  
               
                <Navbar sticky="bottom" bg="dark" variant="dark" >
                <p style={{marginLeft:"41rem", color:"White"}}>
                <Navbar.Brand href="/"><i class="fa fa-heartbeat fa-2x"></i>   Health CARE +</Navbar.Brand>
                <br/>
                <i class="fa fa-user-circle-o"></i>    Contact us-0712 255666                    
                     <br/>
                     <i class="fa fa-envelope-o"></i>    healthcare65@gmail.com
                </p>
                </Navbar>                        
            </React.Fragment>
            
        )
    }
}
export default Diet;