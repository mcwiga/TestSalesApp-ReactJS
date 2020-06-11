import React, { Component } from 'react';
import Cookies from 'js-cookie'

class CookieButton extends Component {
   handleClick(){
     Cookies.set("email", "jmcgloin@gmail.com")
   }
            
    

    render() { 
        
        return ( 
        <div>
            <button className="btn-tutu-cookie" onClick={this.handleClick}>Cookie</button>
        </div>    
        );
    }
}
 
export default CookieButton;