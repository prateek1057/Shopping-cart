import React, { Component } from 'react';
import './App.css';

import Counters from './components/counters';
import Navbar from './components/navbar';
class App extends Component {

  state = { 
    counterlist:[
        {id:1,value:0},
        {id:2,value:0},
        {id:3,value:0},
        {id:4,value:0}
    ]
 } ;

handleIncrement=(counterp)=>{
    const counterlist=[...this.state.counterlist];
    const index=counterlist.indexOf(counterp);
    //counterlist[index]={...counterp};
    counterlist[index].value++;
    this.setState({counterlist});
};

handleDecrement=(counterp)=>{
  const counterlist=[...this.state.counterlist];
  const index=counterlist.indexOf(counterp);
  //counterlist[index]={...counterp};
 if(counterlist[index].value>0)
  counterlist[index].value++;
  this.setState({counterlist});
};

handleDelete=(counterId)=>{
    let counterlistnew=this.state.counterlist.filter(c=>c.id!=counterId);
    this.setState({ counterlist:counterlistnew});
}; 
handleReset=()=>
{
    const counterlist=this.state.counterlist.map(
    c=>{c.value=0;return c;});
    this.setState({counterlist});
};
 
render() { 
  return (
    <React.Fragment>
      <Navbar counterlist={this.state.counterlist} />
      <main className="container">
      <Counters
      onIncrement={this.handleIncrement}
      onDecrement={this.handleDecrement}
      onDelete={this.handleDelete}
      onReset={this.handleReset}
      counterlist={this.state.counterlist}
      />
      </main>
    </React.Fragment>
  );
}
}
 
export default App;
