
import React from 'react';
import { Link } from 'react-router-dom';

var page = function (_this: any) {
    return (
        <div className="Guru">
            <h1 className="wel">Welcome</h1>
            <h2>Guru</h2><br />
            <Link to='/'>App</Link><br />
            <Link to='/routes'>links</Link><br />
            <input type="button" value="test" onClick={_this.guru} /><br />
        </div>
    )
}
export default page;
    