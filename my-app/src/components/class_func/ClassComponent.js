import React, { Component} from "react"

export default class ClassComponent extends Component{
    constructor(props){
        super(props)
        this.state = {
            date:new Date()
        }
    }
    componentWillMount(){
        this.timeerID = setInterval(()=>{
            this.setState({
                date:new Date()
            })
        },1000)
    }
    componentWillUnmount(){
        clearInterval(this.timeerID)
    }
    render(){
        return <div>
            {this.state.date.toLocaleTimeString()}
        </div>
    }

}