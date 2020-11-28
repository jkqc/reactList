import React, { Component } from 'react';

class SetStatePage extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            count:0
         }
    }
    changeCount = (v)=>{
        this.setState({
            count: this.state.count + v
        })
    }
    setCounter = ()=>{
        // this.setState({
        //     count:this.state.count + 1
        // })
        this.changeCount(1)
        this.changeCount(2)
    }
    render() { 
        let {count} = this.state
        return ( 
            <div>
                <button onClick = {this.setCounter}>{count}</button>
            </div>
         );
    }
}
 
export default SetStatePage;
