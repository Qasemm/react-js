import React, {Component} from 'react';

class App extends Component{
  state={
    name:'Qasem',
    age:27
  }
 Change= ()=>{
    this.setState({
      name:'Mohammad',
      age:28
    })
  }
  render(){
    return(
      <div className="App">
        <button onClick={this.Change}>Click</button>
        <p>{this.state.name}</p>
        <p>{this.state.age}</p>
      </div>
    )
  }
}

export default App;
