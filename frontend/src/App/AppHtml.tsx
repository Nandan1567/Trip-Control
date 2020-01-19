
import React from 'react';
import { Link } from 'react-router-dom';

var page = function (_this: any) {
    return (
        <div className="App">
            <h1 className="wel">Welcome</h1>
            <h2>Routes</h2><br />
            <Link to='/routes'>links</Link><br />
            <p>
                <input type="text" defaultValue="red" onChange={_this.setColor.bind(_this)} />
                <b style={_this.state.test_style}>Test state update: {JSON.stringify(_this.state.test_style)}</b>
            </p>
            <input type="button" value="test" onClick={_this.guru.bind(_this)} /><br />
        </div>
    )
}
export default page;
