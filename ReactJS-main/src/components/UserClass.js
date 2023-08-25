import React from "react";
class UserClass extends React.Component{

    constructor(props){
        super(props);
        console.log("constructor")

        this.state = {
            userInfo : {
                name : null,
                location : "India"
            }
        }
        
    }

    async componentDidMount(){
        console.log("mount");

        const data = await fetch("https://api.github.com/users/niralimamaniya");

        const json = await data.json();

        console.log(json);

        this.setState({
            userInfo : json,
        })
        
    }

    componentDidUpdate(){
        console.log("updated");
    }

    componentWillUnmount(){
       
        console.log("unmount");
    }
    render() {
        console.log("render");
        // const {name} = this.props;
        const {name,location} = this.state.userInfo;
        return (
            <div className="user-card">
                {/* <img src={avatar_url}></img> */}
                <h2>Name: {name}</h2>
                <h3>Location: {location}</h3>
                <h4>Contact: nirali.mamaniya12@gmail.com</h4>
            </div>
    
        )
    }
}

export default UserClass;