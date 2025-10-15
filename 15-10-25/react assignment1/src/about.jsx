import React from 'react'
class About extends React.Component{

    constructor(){
        super()
        console.log("constructor")
        this.state = {
            name: "Ashish",
            count: 0
        }
    }

    componentDidMount(){
        console.log("Did mount")
    }

    componentDidUpdate(){
        console.log("did update")
    }

    componentWillUnmount(){
        console.log("will unmount")
    }

   

    render(){
        return (
            <div>
                <h1>hello {this.state.count}</h1>
                <button onClick={() =>  this.setState({count: this.state.count+1})} >Increment</button>
            </div>
        )
    }
}

export default About