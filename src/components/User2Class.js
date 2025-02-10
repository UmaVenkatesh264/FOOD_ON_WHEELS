import React from "react"
class User2Class extends React.Component{

    constructor(props){
        console.log("CONSTRUCTOR");
        
        super(props);
        this.state ={
            userInfo :{
                name: "Dummy",
                location: "Mummy"
            }
        }
    }
    async componentDidMount(){
        const data = await fetch ("https://api.github.com/users/UmaVenkatesh264")

        const json = await data.json();
        //console.log(json);
        
        this.setState({
            userInfo : json
        })
        console.log("COMPONENT DID MOUNT");
        
    }

    componentDidUpdate(){
        console.log("COMPONENT DID UPDATE");
        
    }
    componentWillUnmount(){
        console.log("COMPONENT WILL UNMOUNT");
        
    }

    render(){
        const {name, public_repos } = this.state.userInfo
        console.log("RENDER");
        
        return(
            <div>
                <h1>{name}</h1>
                <h3>REPOS : {public_repos}</h3>
            </div>
        )
    }
}

export default User2Class