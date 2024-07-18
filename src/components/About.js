import React from "react";
import User from "./User";
import UserClass from "./UserClass";
import UserContext from "../utils/UserContext";

class About extends React.Component {
    constructor(props) {
        super(props);

    }
    render() {
        return (
            <div>
                <h1>About</h1>
                <div>
                    LoggedIn User:
                    <UserContext.Consumer>
                        {/* {(data) => console.log(data)} */}
                        {({ loggedInUser }) => <h1 className="text-xl font-bold">{loggedInUser}</h1>}
                    </UserContext.Consumer>
                </div>
                <h2>This is Namaste React Web Series</h2>
                <UserContext.Consumer>
                    {({ loggedInUser }) => <h1 className="text-xl font-bold">{loggedInUser}</h1>}
                </UserContext.Consumer>
                <User name="Akshay Saini (functional props)" />
                <UserClass name="Akshay Saini (class props)" location="Dehradun" />
            </div>
        )
    }
}

// const About = () => {
//     return (
//         <div>
//             <h1>About</h1>
//             <h2>This is Namaste React Web Series</h2>
//             {/* <User name="Akshay Saini (functional props)" /> */}
//             <UserClass name="Akshay Saini (class props)" location="Dehradun" />
//         </div>
//     )
// }

export default About;