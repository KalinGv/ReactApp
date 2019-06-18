import React, { Component } from 'react';

class CounterBtn extends Component 
{
    state = {
        count: 0,
    }

    handleCount = amount => () => 
        this.setState ( prevState => ({
            count: prevState.count + amount,

            })
        )
    
    increase = this.handleCount(1)
    decrease = this.handleCount(-1)
        
    
    render(){
        return (
            <div>
                <p>Current count: {this.state.count}</p>
                <button className = "increase" onClick = {this.increase}>+++</button>
                <button className = "decrease" onClick = {this.decrease}>---</button>
            </div>
        )
    }
    
}

export default CounterBtn;
