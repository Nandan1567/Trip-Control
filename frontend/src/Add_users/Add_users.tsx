import React from 'react';
import './Add_users.scss';
// import page from './Add_usersHtml'
import Myservice from '../Myservice/Myservice'
var $ = require("jquery");
var swal = require("sweetalert");

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
                <table>
                    <thead>
                        <tr>
                            <th>User name</th>
                            <th>Mobile number</th>
                        </tr>
                    </thead>
                        <tbody>
                            <td>
                                <input type="text" ref="name" />
                            </td><td>
                                <input type="text" ref="mobile" />
                            </td>
                            <tr>
                                <td colSpan={2}> <input type="button" value="Add" onClick={this.adduser.bind(this)} /></td>
                            </tr>
                        </tbody>
                </table>

            </div>
        )
    }
}

export default Add_users;
