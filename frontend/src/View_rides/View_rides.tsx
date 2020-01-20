import React from 'react';
import './View_rides.scss';
import Myservice from '../Myservice/Myservice'
var $ = require("jquery");
var swal = require("sweetalert");
import Menu from "../Menu/Menu"

class View_rides extends Myservice {

    constructor(props: any) {
        super(props);
    }

    status = {
        ac: "On going",
        dn: "Finshed",
        rq: "requested"
    }

    state = {
        ride: [{
            id: "",
            user: "",
            driver: "",
            date_time: "",
            vehicle_number: "",
            ride_type: "",
        }]
    }

    componentDidMount() {
        this.fetch_data("/api/logout_user/", "POST")
        this.getRideDetails();
        super.componentDidMount();
    }

    componentDidUpdate() {
        super.componentDidUpdate();
    }

    getRideDetails = (req: any = null) => {
        this.setAsyncState({ ride: this.fetch_data("/api/get_ride_details/", "GET", null, req) })
    }

    filter = () => {

        let query = {
            //@ts-ignore
            user: this.refs.user.value,
            //@ts-ignore
            driver: this.refs.driver.value,
            //@ts-ignore
            status: this.refs.status.value,
        }
        //@ts-ignore
        if (this.refs.status.value == -1)
            delete query["status"]
        //@ts-ignore
        if (this.refs.user.value == "")
            delete query["user"]
        //@ts-ignore
        if (this.refs.driver.value == "")
            delete query["driver"]

        this.getRideDetails(query)
    }


    render() {
        return (
            <div className="View_rides">
                <Menu />
                <h2>All User Driver  Ride Details</h2>
                <table className="table">
                    <thead >
                        <tr>
                            <th>user</th>
                            <th>Driver</th>
                            <th>status</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><input type="text" ref="user" onKeyUp={this.filter} /></td>
                            <td><input type="text" ref="driver" onKeyUp={this.filter} /></td>
                            <td>
                                <select ref="status" onChange={this.filter}>
                                    <option value="-1">All</option>
                                    <option value="rq">Reuqetsed</option>
                                    <option value="ac">On going</option>
                                    <option value="dn">Finished</option>
                                </select>
                            </td>
                        </tr>
                    </tbody>
                </table>

                <table className="table table-striped">
                    <thead className="table-dark">
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

export default View_rides;
