import React, { Component } from 'react'
import './App.css';
class App extends Component{
    state={
       count:0
    }
    plus=()=>{
       this.setState({count:this.state.count+1});
    }
    minus=()=>{
      if(this.state.count!=0){
        this.setState({count:this.state.count-1});
      }
    }
    render() {
      const style={
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
      }
      return (
        <div>
           <h1>Items Counter App</h1>
           <div style={style}> 
              <button type="" className='plus' onClick={this.plus}>+</button>
              <h1>{this.state.count}</h1>
              <button type="" className='minus' onClick={this.minus}>-</button>
           </div>
        </div>
      )
    }
}
export default App;