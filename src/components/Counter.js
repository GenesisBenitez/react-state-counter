import React from 'react';

class Counter extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            count: props.initialCount || 0
        };
    }
    
    render(){
        return (
            <div>
                <button onClick={this._decrementCounter}>-</button>
                &nbsp;&nbsp;<span>{this.state.count}</span>&nbsp;&nbsp;
                <button onClick={this._incrementCounter}>+</button>
            </div>
        )
    }
    _incrementCounter = () => {
        this.setState({ 
            count: ++this.state.count
         }, () => {
            if(this.props.onIncrement)
            this.props.onIncrement(this.state.count);
         })

    }
    _decrementCounter = () =>{
        this.setState({ 
            count: --this.state.count
         }, () => {})  
    }
}

export default Counter;