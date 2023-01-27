// import { Component } from "react";
import React, { Component } from "react";

/*const Test = () => {
    return (
        <div>
            <h1 id="testId"
                style={{
                    color: "red",
                    backgroundColor: "yellow",
                    // BackgroundColor:"yellow",
                }}>Hello Sagar</h1>
        </div>
    );
};*/
// class Test extends React.component{
//     render(){
//          console.log("Hello");
//          return(
//             <div>
//                 <h1 id="testId"
//                 style={{
//                     color:"red",
//                     BackgroundColor:"yellow",
//                 }}>Hello Sagar</h1>
//             </div>
//          );
//     }
// }

class Test extends Component {
    isLoggedIn = false;

    render() {
        return (
            <div>
                { if (this.isLoggedIn){
                    <h1> you are not logged</h1>} else
                {<h1> you are logged in!</h1>}}
                <button onClick={(e) => this.setState({ isLogged: true })}>login</button>
            </div>
        };
}
}

export default Test;
