import AboutCard from "./AboutCard"
import { Component } from "react"
class About extends Component{
    constructor(props){
        super(props)
        console.log("Parent constructor");
    }
    componentDidMount(){
        console.log("Parent componentDidmount");
    }
    render(){
        console.log("parent render");
        return(
            <div>
                <h1>
                    <AboutCard name={"children1"} age={1}/>
                    <AboutCard name={"children2"} age={2}/>
                </h1>
            </div>
                )
    }
}
export default About