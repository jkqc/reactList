import React, { Component } from 'react';
import store from '../store/ReduxStore'

class ReactPage extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    componentDidMount(){
        store.subscribe(() => {
            console.log("subscribe");
            this.forceUpdate();
            // this.setState({});
        });
    }
    add = ()=>{
        store.dispatch({type:'ADD'})
    }
    render() { 
        return ( 
            <div>
                <p>{store.getState()}</p>
                <button onClick={this.add}>+1</button>
            </div>
         );
    }
}
 
export default ReactPage;