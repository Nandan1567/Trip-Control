
import React from 'react';
var axios = require('axios');

// import * as $ from 'jquery';
var $ = require("jquery");


class Myservice extends React.Component {

    componentDidMount() {
        console.log("----------Super class Component mounted-----------")
    }

    componentDidUpdate() {
        console.log("----------Super class Component Updated-----------")
    }

    open(link:string){
        window.location.assign("#"+link)
    }
    
    setAsyncState = (newState:any) => new Promise((resolve) => this.setState(newState, () => resolve()));

    
    // fetch_data = async (req:any = null, url:string) => {
    //   let ctx = this, data = null;
    //   return data = await axios({
    //     method: 'post',
    //     headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    //     url: url,
    //     data: req
    //   })
    //     .then(function (response:any) {
    //       return response.data
    //     });
    // }

    public fetch_data = (path: string, method: string = "POST", str_req: any = null, json_req: any = null, async_val: boolean = false, callback?: any, context: any = null): any => {
      let res: string = ""
      let json_str: any
      let data_to_be_send: any = []
      if (str_req != null) {
        let data_arr: any = str_req.split("&");
        if (data_arr.length > 1) {
          for (let val1 in data_arr) {
            //let data_key_val = data_arr[val1].split("=")
            let data_key_val = data_arr[val1].split("=");
            data_key_val[1] = data_key_val.slice(1).join("=")
            console.log(("\"" + data_key_val[0] + "\":\"" + data_key_val[1] + "\""))
            data_to_be_send.push("\"" + data_key_val[0] + "\":\"" + data_key_val[1] + "\"")
          }
        }
        else {
          let data_key_val = data_arr[0].split("=")
          data_to_be_send.push("\"" + data_key_val[0] + "\":\"" + data_key_val[1] + "\"")
        }
  
        json_str = JSON.parse("{" + data_to_be_send.join(",") + "}")
      }
      else if (json_req != null) {
        json_str = json_req;
      }
      else {
        json_str = "{ }"
      }
      //alert(JSON.stringify( json_str));
      $.ajax({
        type: method,
        url: path,
        data: json_str,
        success: function (response: any) {
          res = response
          if (async_val == true)
            if (context != null)
              callback(res, context);
            else
              callback(res);
        },
        async: async_val
      });
      return res;
    }
  
}


export default Myservice;
