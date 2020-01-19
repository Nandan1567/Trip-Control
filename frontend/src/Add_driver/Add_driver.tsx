
import React from 'react';
import './Add_driver.scss';
import Myservice from '../Myservice/Myservice'
var $ = require("jquery");
var swal = require("sweetalert");
import Menu from "../Menu/Menu"

class Add_driver extends Myservice {

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
            //@ts-ignore
            vehicle_number: this.refs.v_num.value,
        }
        alert(this.fetch_data("/api/adddriver/", "POST", null, user_details))
    }

    render() {
        return (
            <div className="Add_driver">
                <Menu />
                <table className="table">
                    <thead>
                        <tr>
                            <th>User name</th>
                            <th>Mobile number</th>
                            <th>Vehicle number</th>
                            <th></th>
                        </tr>

                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <input type="text" ref="name" />
                            </td>
                            <td>
                                <input type="text" ref="mobile" />
                            </td>
                            <td>
                                <input type="text" ref="v_num" />
                            </td>
                            <td colSpan={3}> <input type="button" className="btn btn-primary" value="Add" onClick={this.adduser.bind(this)} /></td>
                        </tr>
                    </tbody>
                </table>

            </div>
        )
    }
}

export default Add_driver;
