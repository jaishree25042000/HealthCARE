import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link, useRouteMatch } from 'react-router-dom';
class DietPlan extends Component{
    render() {
        
        return(
            <React.Fragment>
                <br/>
                <br/>
                <h1 class="text-center"><b>Get Your Diet Plan</b></h1>
                <br/>
                <br/>
                <h2 style={{marginLeft:"2rem", color:"hotpink"}}><b>Click on any below Link to get your Diet Plan</b></h2>
                    <h2 style={{marginLeft:"8rem"}}>
                    <ul>
                        <br/>
                        <li><Link to="/diabetes">Diabetes</Link></li>
                        <li><Link to="/cancer">Cancer</Link></li>
                        <li><Link to="/tuber">Tuberculosis</Link></li>
                       
                    </ul>
                    
                    </h2>
            </React.Fragment>
            
            );
    }
}
export default DietPlan;
