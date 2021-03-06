import React from 'react';
import './User_panel.scss';
import Myservice from '../Myservice/Myservice'
import { setInterval } from 'timers';
var $ = require("jquery");
var swal = require("sweetalert");
import Menu from "../Menu/Menu"

class User_panel extends Myservice {

    constructor(props: any) {
        super(props);
    }


    status={
        ac:"On going",
        dn:"Finshed",
        rq:"requested"
    }

    state = {
        username:"",
        ride: [{
            id:"",
            user:"",
            driver:"",
            date_time:"",
            vehicle_number:"",
            ride_type:"",
        }]
    }

    componentDidMount() {
        let username=this.fetch_data("/api/login_status/", "POST", "user=1").toLowerCase()
        if ( username== "no data")
            window.location.assign("#user_login")
        this.setState({username:username})
        this.getRideDetails();
        setInterval(()=>{
            this.getRideDetails();
        },1000)
        
        super.componentDidMount();
    }

    componentDidUpdate() {
        super.componentDidUpdate();
    }

    getRideDetails=()=>{
        this.setAsyncState({ ride: this.fetch_data("/api/get_ride_details/") })
    }

    logout = () => {
        this.fetch_data("/api/logout_user/", "POST")
        window.location.assign("#user_login")
    }

    getRide=()=>{
        let resp=this.fetch_data("/api/add_ride/", "POST")
        if(resp!="success")
        swal({title:resp})
        this.getRideDetails()
    }

    finish=(id:any,e:any)=>{
        this.fetch_data("/api/end_ride/", "POST","id="+id)
        this.getRideDetails();
    }


    render() {
        return (
            <div className="User_panel">
                 <Menu />
                 
                 <table >
                     <tr>
                         <td><input type="button" value="logout" className='btn btn-primary' onClick={this.logout.bind(this)} /></td>
                         <td><input type="button" value="request ride" className='btn btn-primary' onClick={this.getRide.bind(this)}/><br /></td>
                     </tr>
                 </table>           
                <br />
                <b>Username:</b>{this.state.username}<br /><br />
                <h2>User Prvious Ride Details</h2>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Driver</th>
                            <th>Date</th>
                            <th>Vehicle number</th>
                            <th>Status</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                       {
                           this.state.ride.map((data)=>{
                               return (
                               <tr>                                   
                                   <td>{data.driver}</td>            
                                   <td>{data.date_time}</td>        
                                   <td>{data.vehicle_number}</td>             
                                   <td>{
                                    //@ts-ignore
                                   this.status[data.ride_type]}</td>
                                   <td>{data.ride_type=="ac"?<input type="button" value="End trip" className='btn btn-primary' onClick={this.finish.bind(this,data.id)} />:""}</td>
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
