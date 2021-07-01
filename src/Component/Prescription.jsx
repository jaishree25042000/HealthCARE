import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link, useRouteMatch } from 'react-router-dom';
class Prescription extends Component{
    render() {
        
        return(
            <React.Fragment>
            <br/>
            <br/>
            <h1 class="text-center"><b>Get Your Prescription</b></h1>
            <br/>
            <br/>
            <h2 style={{marginLeft:"2rem", color:"hotpink"}}><b>Click on any below Link to get your Prescription</b></h2>
            <h2 style={{marginLeft:"8rem"}}>
                <br/>
                <ul>
                    <li><Link to="/pdiabetes">Diabetes Prescription</Link></li>
                    <li><Link to="/pcancer">Cancer Prescription</Link></li>
                    <li><Link to="/ptuber">Tuberculosis Prescription</Link></li>
                </ul>
                

            </h2>
            </React.Fragment>
        );
          
    }
}
export default Prescription;
