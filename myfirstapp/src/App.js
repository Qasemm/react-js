import React, {Component} from 'react';
import Child from './Child';
import Item from './Component/item'
class App extends Component{
  state={
    items:[
      {id:'1' , name:'Qasem' , age:'27'},
      {id:'2' , name:'mohammad' , age:'30'},
      {id:'3' , name:'Ahmad' , age:'29'},
      {id:'4' , name:'Ali' , age:'22'},
      {id:'5' , name:'Mahmmoud' , age:'32'},
      {id:'6' , name:'waad' , age:'2'},
    ]
  }
  render(){
    return(
      <div className="App">
       List Item
       <Item items={this.state.items}/>
      </div>
    )
  }
}

export default App;
