import React, { Component } from 'react';
import LoginForm from "./LoginForm";
import UserStore from "./stores/userStore";
import SignUpModal from "./sevenDayModal";

class LogoutButton extends Component {
   constructor(props){
       super(props)
        this.state = {
            loggedText: "Login",
        LogInState: UserStore.isLoggedIn,
        Username: UserStore.username,
        }
    }
                   
    async handleLogout(){
        try{
            let res = await fetch("/logout",{
                method: "post",
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json"
                }
            })
            let result = await res.json();
            if (result && result.success){
                UserStore.isLoggedIn = false;
                UserStore.username = ""
            }
        }

        catch(e){
            console.log(e);
        }        
    }


    
    render() {
        if (!UserStore.isLoggedIn){ 
        return ( 
            <button 
            className="btn"
            onClick={this.props.showForm}
        >Login</button>
         );
    }
    else{
        return(
            <button 
            className="btn"
            onClick={() => this.handleLogout()}
        >Logout</button>
        )
    }
}
}
 
export default LogoutButton;