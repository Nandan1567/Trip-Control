import React from 'react';
import './Driver_panel.scss';
import Myservice from '../Myservice/Myservice'
var $ = require("jquery");
var swal = require("sweetalert");
import Menu from "../Menu/Menu"

class Driver_panel extends Myservice {

    constructor(props: any) {
        super(props);
    }

    status={
        ac:"On going",
        dn:"Finshed",
        rq:"requested"
    }

    state = {
        driver_name:"",
        ride: [{
            id:"",
            user: "",
            driver: "",
            date_time: "",
            vehicle_number: "",
            ride_type: "",
        }]
    }

    componentDidMount() {
        let driver_name=this.fetch_data("/api/login_status/", "POST", "driver=1").toLowerCase()
        if ( driver_name== "no data")
            window.location.assign("#driver_login")
        this.setState({driver_name:driver_name})
        this.getRideDetails();
        setInterval(() => {
            this.getRideDetails();
        }, 1000)
        super.componentDidMount();
    }

    getRideDetails = () => {
        this.setAsyncState({ ride: this.fetch_data("/api/get_ride_details/") })
    }

    componentDidUpdate() {
        super.componentDidUpdate();
    }

    logout = () => {
        this.fetch_data("/api/logout_user/", "POST")
        window.location.assign("#driver_login")
    }

    accept=(id:any,e:any)=>{
        this.fetch_data("/api/accept_ride/", "POST","id="+id)
        this.getRideDetails();
    }

    render() {
        return (
            <div className="Driver_panel">
                <Menu />
                <h2>Driver Prvious Ride Details</h2>
                <input type="button" value="logout" className='btn btn-primary' onClick={this.logout.bind(this)} />
                <br /><br />
                <b>Driver name:</b>{this.state.driver_name}<br /><br />
                <table className="table">
                    <thead>
                        <tr>
                            <th>User name</th>
                            <th>Driver</th>
                            <th>Date</th>
                            <th>Vehicle number</th>
                            <th>Status</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.ride.map((data) => {
                                return (
                                    <tr>
                                        <td>{data.user}</td>
                                        <td>{data.driver}</td>
                                        <td>{data.date_time}</td>
                                        <td>{data.vehicle_number}</td>
                                        <td>{
                                        //@ts-ignore
                                        this.status[data.ride_type]}</td>
                                        <td>{data.ride_type=="rq"?<input type="button" value="accept" className='btn btn-primary' onClick={this.accept.bind(this,data.id)} />:""}</td>
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

export default Driver_panel;
