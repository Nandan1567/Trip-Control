
import React from 'react';
import './Guru.scss';
import page from './GuruHtml'
import Myservice from '../Myservice/Myservice'
var $ = require("jquery");

class Guru extends Myservice {

    constructor(props:any) {
        super(props);
    }

     componentDidMount() {
        super.componentDidMount();
    }

    componentDidUpdate() {
        super.componentDidUpdate();
    }

    guru() {
        alert("hi")
    }

    render() {
        return (
            page(this)
        )
    }
}

export default Guru;
    