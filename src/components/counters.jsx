import React, { Component } from 'react';
import Counter from './counter';
class Counters extends Component {
    render() { 
        return (
            <div>
                <button onClick={this.props.onReset} className="btn btn-primary btn-sm m-2">Reset</button>
                {this.props.counterlist.map(x=>< Counter 
                key={x.id} 
                counterp={x} 
                onDecrement={this.props.onDecrement}
                onIncrement={this.props.onIncrement}
                onDelete={this.props.onDelete} />)}
            </div>
        );
    }
}
 
export default Counters;
