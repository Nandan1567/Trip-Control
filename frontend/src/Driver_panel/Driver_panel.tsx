import React from 'react';
import './Driver_panel.scss';
import Myservice from '../Myservice/Myservice'
var $ = require("jquery");
var swal = require("sweetalert");

class Driver_panel extends Myservice {

    constructor(props:any) {
        super(props);
    }

     componentDidMount() {
        if(this.fetch_data("/api/login_status/","POST","driver=1").toLowerCase() == "no data")
            window.location.assign("#driver_login")
        super.componentDidMount();
    }

    componentDidUpdate() {
        super.componentDidUpdate();
    }

    logout=()=>{
        this.fetch_data("/api/logout_user/", "POST")
        window.location.assign("#driver_login")
    }

    render() {
        return (
            <div className="Driver_panel">
              <input type="button" value="logout" onClick={this.logout.bind(this)} />
            </div>
        )
    }
}

export default Driver_panel;
    