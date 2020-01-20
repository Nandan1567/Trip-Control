
import React from 'react';
import { Link } from 'react-router-dom';
import Menu from "../Menu/Menu"
import {DropdownButton,Dropdown} from "react-bootstrap"

var page = function (_this: any) {
    return (
        
        <div className="App">
            <Menu />
            
            <DropdownButton id="dropdown-basic-button" className="options" title="Registrations" style={{paddingLeft:'1000px'}}>
                <Dropdown.Item href="#/add_users">Add users</Dropdown.Item>
                <Dropdown.Item href="#/add_driver">Add driver</Dropdown.Item>
                <Dropdown.Item href="#/view_rides">View rides</Dropdown.Item>
            </DropdownButton>
            <br /><br /><br />
            <p style={{ maxWidth: "80%", margin: "auto" }}>
                <h1>Cab Allocation System</h1>
            </p>
        </div>
    )
}
export default page;
