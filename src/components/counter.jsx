import React, { Component } from 'react';

class Counter extends Component {

   
render() { 
    console.log(this.props);
    return (
        <div>
            <span className="badge badge-pill badge-success mr-4"><h6>Item {this.props.counterp.id}</h6></span> 
            <span className={this.getBadgeClass()}>{this.formatCount()}</span>
            <button onClick={()=>this.props.onIncrement(this.props.counterp)} className="btn btn-secondary btn-md m-2">
                +
            </button>
            <button onClick={()=>this.props.onDecrement(this.props.counterp)} className="btn btn-secondary btn-md m-2">
                -
            </button>
            <button onClick={()=>this.props.onDelete(this.props.counterp.id)} className="btn btn-danger btn-sm m-2">Delete</button>
             

        </div>
        );
    }
getBadgeClass()
{
    let classes="badge m-2 badge-";
    classes+= this.props.counterp.value===0? "warning" : "primary";
    return classes; 
}
formatCount(){
    const x=this.props.counterp.value;
    return x===0? "Zero" : x;
}
}
 
export default Counter;
