import { useState } from "react";
const User = (props) => {
    const {name , city} = props;
    let [count, setCount] = useState(0);
    return (
        <div className="user-card">
            <button onClick={()=>{
                setCount(count+1)    
            }}>COUNT INCREMENTER</button>
            <h1>Count: {count}</h1>
            <h2>Name: {name}</h2>
            <h3>Location: {city}</h3>
        </div>
    )
}

export default User