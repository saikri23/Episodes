import { useState } from "react";

const User=({name})=>{
    const [count1]=useState(0);
    const [count2]=useState(3);
    return (
        <div className="user-card">
            <h1>{name}</h1>
            <h2>Count1:{count1}</h2>
            <h3>Count2:{count2}</h3>
        </div>
    )
}

export default User;