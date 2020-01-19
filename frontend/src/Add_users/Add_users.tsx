import React from 'react';
import './Add_users.scss';
// import page from './Add_usersHtml'
import Myservice from '../Myservice/Myservice'
var $ = require("jquery");
var swal = require("sweetalert");
import Menu from "../Menu/Menu"

class Add_users extends Myservice {

    constructor(props: any) {
        super(props);
    }

    componentDidMount() {
        super.componentDidMount();

    }

    componentDidUpdate() {
        super.componentDidUpdate();
    }

    adduser = () => {
        let user_details = {
            //@ts-ignore
            name: this.refs.name.value,
            //@ts-ignore
            mobile: this.refs.mobile.value,
        }
        alert(this.fetch_data("/api/adduser/", "POST", null, user_details))
    }

    render() {
        return (
            <div className="Add_users">
                <Menu />
                <table className="table">
                    <thead>
                        <tr>
                            <th>User name</th>
                            <th>Mobile number</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <input type="text" ref="name" />
                            </td><td>
                                <input type="text" ref="mobile" />
                            </td>
                            <td colSpan={2}> <input type="button" className="btn btn-primary" value="Add" onClick={this.adduser.bind(this)} /></td>
                        </tr>
                    </tbody>
                </table>

            </div>
        )
    }
}

export default Add_users;
