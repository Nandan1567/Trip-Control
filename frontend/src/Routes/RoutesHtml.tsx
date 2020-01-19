
    import React from 'react';
    import { Link } from 'react-router-dom';

    var page = function (_this: any) {
        return (
            <div className="Routes">
                <h1 className="wel">Welcome</h1>
                <h2>Routes</h2><br />
                <Link to='/routes'>links</Link><br />
                
				<Link to='/'></Link><br />
				<Link to='/add_users'>add_users</Link><br />
				<Link to='/add_driver'>add_driver</Link><br />
				<Link to='/user_login'>user_login</Link><br />
				<Link to='/driver_login'>driver_login</Link><br />
				<Link to='/user_panel'>user_panel</Link><br />
				<Link to='/driver_panel'>driver_panel</Link><br />
				<Link to='/view_rides'>view_rides</Link><br />
				<Link to='/menu'>menu</Link><br />

                <input type="button" value="test" onClick={_this.guru} /><br />
            </div>
        )
    }
    export default page;
    