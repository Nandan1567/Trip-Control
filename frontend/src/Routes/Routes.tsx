
import './Routes.scss';
import page from './RoutesHtml'
import Myservice from '../Myservice/Myservice'
var $ = require("jquery");
var swal = require("sweetalert");

class Routes extends Myservice {

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
         swal("hi","")
    }

    render() {
        return (
            page(this)
        )
    }
}

export default Routes;
    