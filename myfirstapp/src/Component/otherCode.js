return(
    <div key={item.id}>
        <p>{item.id}</p>
        <p>{item.name}</p>
        <p>{item.age}</p>
        <hr></hr>
    </div>
)
//////////////////////////////////////////
// if condition
if(item.count > 8){
    return(
        <div key={item.id}>
            <p>{item.id}</p>
            <p>{item.name}</p>
            <p>{item.age}</p>
            <hr></hr>
        </div>
    )
   }else{
       return(
           <div> Don't have any result</div>
       )
   }
//other syntax if condititon
   return item.count > 5 ?(
    <div key={item.id}>
         <p>{item.id}</p>
         <p>{item.name}</p>
         <p>{item.age}</p>
         <hr></hr>
    </div>
  ):null
  ///////////////////////////////////////////
  //rout
  import React, {Component} from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Nav from './Component/Nav';
import home from './Component/home';
import About from './Component/About';
class App extends Component{
  render(){
    return(
      <BrowserRouter>
        <div className="App">
          <Nav/>
          <Route exact path="/" component ={home}/>
          <Route path="/About" component ={About}/>
        </div>
      </BrowserRouter>
    )
  }
}

export default App;
//////////////////
//axios api
https://jsonplaceholder.typicode.com/