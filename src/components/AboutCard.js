import React from "react"
class  AboutCard extends React.Component{
    constructor(props){
        super(props)
        console.log(props)
        this.state={
            count:0,
            count1:1,
            count2:21
        }
        console.log(this.props.name+"constructor");
    }
    componentDidMount(){
        console.log(this.props.age+"componentDidmount");
    }
    render(){
        console.log("child render");
        const{name,age}=this.props
        return(
            <div>
<h1>Name:{name}</h1>
<h2>Age:{age}</h2>
<p>{this.state.count}</p>
<p >{this.state.count1}</p>
<p>{this.state.count2}</p>
<button onClick={()=>{this.setState({count:this.state.count+1,count1:this.state.count1+1})}}>click</button>
            </div>
        )
    }
}
export default AboutCard;