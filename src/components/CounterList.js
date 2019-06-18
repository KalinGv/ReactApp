import React, { Component } from 'react';
import CounterBtn from './CounterBtn';
import PropTypes from 'prop-types';

const createRange = num =>
Array.from(Array(num).keys())

class CounterList extends Component {

    state = {
        counters: 1,
    }

    addCounter = () =>
        this.setState ( prevState => ({
            counters: prevState.counters + 1,
            }))

        


    renderCounter(index){
        return (
            <li key = {index}>
                <CounterBtn />
            </li>
        )
    }

    render () {
        const countersArray = createRange(this.state.counters)
     
        return (
            <div>
                <button onClick = {()=>this.addCounter()}>Add counter</button>
                <ul>
                    {
                        countersArray.map(num => this.renderCounter(num))
                    }
                </ul>
            </div>
        
        )


    }
    


}

export default CounterList

