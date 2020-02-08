import React, {Component} from 'react';
import Child from './Child';
import Item from './Component/item'
class App extends Component{
  state={
    items:[
      {id:'1' , name:'Qasem'    , age:'27' , count:'1'},
      {id:'2' , name:'mohammad' , age:'30' , count:'2'},
      {id:'3' , name:'Ahmad'    , age:'27' , count:'3'},
      {id:'4' , name:'Ali'      , age:'30' , count:'4'},
      {id:'5' , name:'Mahmmoud' , age:'27' , count:'5'},
      {id:'6' , name:'mohammad' , age:'30' , count:'6'},
    ] 
  }
  render(){
    return(
      <div className="App">
       List Item
       <p>*********************************************</p>
       <Item items={this.state.items}/>
      </div>
    )
  }
}

export default App;
