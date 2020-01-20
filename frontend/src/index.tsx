import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Switch, HashRouter } from 'react-router-dom';
import { createBrowserHistory } from 'history'
import * as serviceWorker from './serviceWorker';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App/App';
import Not_found from './Not_found/Not_found';
import Myservice from './Myservice/Myservice';
import Add_users from './Add_users/Add_users';
import Add_driver from './Add_driver/Add_driver';
import User_login from './User_login/User_login';
import Driver_login from './Driver_login/Driver_login';
import User_panel from './User_panel/User_panel';
import Driver_panel from './Driver_panel/Driver_panel';
import View_rides from './View_rides/View_rides';
import Menu from './Menu/Menu';
let route_link
try {
   let all_routes=require("./Routes/Routes").default
    route_link=<Route path="/routes" component={all_routes} />
} catch (error) {
    
}
    

// ReactDOM.render(<App />, document.getElementById('root'));

const history = createBrowserHistory()


ReactDOM.render((
    <Router history={history}>
        <HashRouter>
            <Switch>
                <Route exact path="/" component={App} />
				<Route path="/add_users" component={Add_users} />
				<Route path="/add_driver" component={Add_driver} />
				<Route path="/user_login" component={User_login} />
				<Route path="/driver_login" component={Driver_login} />
				<Route path="/user_panel" component={User_panel} />
				<Route path="/driver_panel" component={Driver_panel} />
				<Route path="/view_rides" component={View_rides} />
				<Route path="/menu" component={Menu} />
                {route_link}
                <Route component={Not_found} />
            </Switch>
        </HashRouter>
    </Router>


), document.getElementById('root'))




// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
