import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class App extends Component {
  render() {
    return (
      <div>
        <button onClick={this.Request}>请求</button>
        <button onClick={this.RequestValue}>请求</button>
      </div>
    );
  }

  Request = ()=>{
    fetch('http://localhost:8090/').then((res)=>{
      return res.json()
    }).then((data)=>{
      console.log(data)
    })
  }

  RequestValue = ()=>{
    fetch('http://localhost:8090/value').then((res)=>{
      return res.json()
    }).then((data)=>{
      console.log(data)
    })
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)