import React from 'react';
import './User_panel.scss';
import Myservice from '../Myservice/Myservice'
var $ = require("jquery");
var swal = require("sweetalert");

class User_panel extends Myservice {

    constructor(props: any) {
        super(props);
    }
    state = {
        ride: [{
            user:"",
            driver:"",
            date_time:"",
            ride_type:"",
        }]
    }

    componentDidMount() {
        if (this.fetch_data("/api/login_status/", "POST", "user=1").toLowerCase() == "no data")
            window.location.assign("#user_login")

        this.setAsyncState({ ride: this.fetch_data("/api/get_ride_details/") })

        super.componentDidMount();
    }

    componentDidUpdate() {
        super.componentDidUpdate();
    }

    logout = () => {
        this.fetch_data("/api/logout_user/", "POST")
        window.location.assign("#user_login")
    }

    getRide=()=>{
        this.fetch_data("/api/add_ride/", "POST")
    }


    render() {
        return (
            <div className="User_panel">
                <input type="button" value="logout" onClick={this.logout.bind(this)} />

                <input type="button" value="request ride" onClick={this.getRide.bind(this)}/>


                <table>
                    <thead>
                        <tr>
                            <th>User</th>
                            <th>Driver</th>
                            <th>Date</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                       {
                           this.state.ride.map((data)=>{
                               return (
                               <tr>                                    
                                   <td>{data.user}</td>            
                                   <td>{data.driver}</td>            
                                   <td>{data.date_time}</td>            
                                   <td>{data.ride_type}</td>
                               </tr>
                               )
                           })
                       }
                    </tbody>
                </table>


            </div>
        )
    }
}

export default User_panel;
