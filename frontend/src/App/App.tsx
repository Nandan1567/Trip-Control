import React from 'react';
import './App.scss';
import Myservice from '../Myservice/Myservice'
import Page from "./AppHtml"
var $ = require("jquery");
var swal = require("sweetalert");

class App extends Myservice {
  state = { 
    test_style:{
      color:"red"
    }
  }

  constructor(props: any) {
    super(props);

  }


  guru() {
    // swal("hisdf", "")
    swal({
      title: "Data!",
      text: JSON.stringify(this.fetch_data("https://jsonplaceholder.typicode.com/todos/1", "GET")),
      icon: "success",
    });
  }
  test(a: any) {
    swal(a)
  }

  render() {
    return (
      Page(this)
    )
  }

  setColor(e:any) {
    let test_style={
      color:e.target.value,
    }
    this.setState({ test_style: test_style })

  }


  componentDidMount() {
    // $(".wel").css({ 'color': 'red' })
    $(".test").click(function () {
      alert("Guru");
    });

    super.componentDidUpdate();
  }

  componentDidUpdate() {
    super.componentDidUpdate();
  }


}

export default App;
