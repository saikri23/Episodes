
import UserClass from "./UserClass";
import React from "react";

// const About = ()=>{
//     return (
//         <div className="user-card">
            
//             <UserClass name={"saikriClass"}/>
//         </div>
//     )
// }

class About extends React.Component{
    constructor(){
        super();
        console.log("Parent Constructor")
    }
    componentDidMount(){
        console.log("parent mount");
    }

    render(){
        console.log("parent render");
        return (
            <div className="user-card">
                
                <UserClass />
                
            </div>
        )
    }
}


export default About;