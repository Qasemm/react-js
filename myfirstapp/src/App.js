import React, {Component} from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Nav from './Component/Nav';
import home from './Component/home';
import About from './Component/About';
import Blog from './Component/blog';
class App extends Component{
  render(){
    return(
      <BrowserRouter>
        <div className="App">
          <Nav/>
          <Route exact path="/" component ={home}/>
          <Route path="/About" component ={About}/>
          <Route path="/blog" component ={Blog}/>
        </div>
      </BrowserRouter>
    )
  }
}

export default App;
