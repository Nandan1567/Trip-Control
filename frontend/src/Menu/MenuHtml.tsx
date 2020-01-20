
import React from 'react';
import { Link } from 'react-router-dom';

var page = function (_this: any) {
    return (
        <div className="Menu">
            <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
                <a className="navbar-brand" href="#">Cab Allocation</a>
                <ul className="navbar-nav">
                    {/* <li className="nav-item">
                        <Link className="nav-link" to='/add_users'>add_users</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to='/add_driver'>add_driver</Link>
                    </li> */}
                    <li className="nav-item">
                        <Link className="nav-link" to='/user_login'>user_login</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to='/driver_login'>driver_login</Link>
                    </li>
                    {/* <li className="nav-item">
                        <Link className="nav-link" to='/view_rides'>view_rides</Link>
                    </li> */}
                </ul>
            </nav>
        </div>
    )
}
export default page;
