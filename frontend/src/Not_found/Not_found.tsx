
import React from 'react';
import './Not_found.css';
import page from './Not_foundHtml'
import Myservice from '../Myservice/Myservice'

class Not_found extends Myservice {

    constructor(props:any) {
        super(props);
    }

    componentDidMount() {
        super.componentDidMount();
    }

    componentDidUpdate() {
        super.componentDidUpdate();
    }

    render() {
        return (
            page
        )
    }
}

export default Not_found;
    