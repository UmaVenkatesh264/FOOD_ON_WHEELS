import React from "react"

class UserClass extends React.Component {
    constructor (props){
        super(props);
        this.state = {
            count : 0,
        }
    }
    render(){
        const {name, city} = this.props;
        const {count} = this.state;
        return (

            <div className="user-card">
                <button onClick={()=>{
                    this.setState({
                        count : this.state.count + 1
                    }) 
                }}>COUNT INCREMENTER</button>
                <h1>Count: {count}</h1>
                <h2>Name: {name}</h2>
                <h3>Location: {city}</h3>
            </div>
        )
    }
}

export default UserClass