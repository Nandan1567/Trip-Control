import React from 'react';
import './User_login.scss';
import Myservice from '../Myservice/Myservice'
var $ = require("jquery");
var swal = require("sweetalert");

class User_login extends Myservice {

    constructor(props: any) {
        super(props);
    }

    componentDidMount() {
        if(this.fetch_data("/api/login_status/","POST","user=1").toLowerCase() != "no data")
            window.location.assign("#user_panel")
        super.componentDidMount();
    }

    componentDidUpdate() {
        super.componentDidUpdate();
    }

    login = () => {
        let user_details = {
            //@ts-ignore
            user: this.refs.name.value,
        }
        if (this.fetch_data("/api/login_user/", "POST", null, user_details) == "pass")
            window.location.assign("#user_panel")
        else
            alert("Invalid username")
    }

    render() {
        return (
            <div className="User_login">
                <input type="text" ref="name" />
                <input type="button" value="Login" onClick={this.login.bind(this)} />
            </div>
        )
    }
}

export default User_login;
