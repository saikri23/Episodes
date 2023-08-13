import React from "react";

class UserClass extends React.Component{

    constructor(props){
        super(props);
        console.log(this.props.name+"Child Constructor");
        this.state={
            userInfo:{
                name:"dummy",
                location:"India",
                id:"fuck"
            }
        };
    }
    

   async componentDidMount(){
        console.log(this.props.name+"Child mount");
        const data = await fetch(" https://api.github.com/users/saikri23");
        const json = await data.json();
        this.setState({
            userInfo:json
        })
        console.log(json.login);
    }

    async componentDidUpdate(){
        console.log("updated");
    }

     render(){
        
        console.log(this.state.userInfo.login+"child render");
        return (
            <div className="user-card">
                <h1>myId {this.state.userInfo.login}</h1>
            </div>
        )
     }
}

export default UserClass;