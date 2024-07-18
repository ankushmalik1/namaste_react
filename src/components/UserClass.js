import React from "react";

class UserClass extends React.Component {
    // super(props): This not only calls the parent constructor but also passes the props received by the component to the parent constructor, ensuring that this.props is properly set up.
    constructor(props) {
        super(props);
        console.log(props);
        // this.state is the big object which contains all the state variables.
        this.state = {
            count: 0,
            count2: 2,
            userInfo: {
                name: "Dummy",
                location: "Default",
                avatar_url: "http://dummy-photo.com"
            }
        }
    }
    async componentDidMount() {
        const data = await fetch("https://api.github.com/users/akshaymarch7");
        const json = await data.json();
        this.setState({
            userInfo: json
        })
        console.log(json);
    }

    render() {
        // const { name, location } = this.props;
        const { count, count2 } = this.state;
        const { name, location, avatar_url } = this.state.userInfo;
        // debugger;
        return (
            <div className="user-card">
                <h1>Count: {count}</h1>
                <button onClick={() => {
                    // NEVER UPDATE STATE VARIABLES FileSystemDirectoryHandle,AS BELOW
                    // this.state.count = this.state.count + 1; NEVER
                    this.setState({
                        count: this.state.count + 1,
                        count2: this.state.count2 + 1   //We can batch multiple state updates together
                    })
                }}>Count Increase</button>
                <h1>Count2: {count2}</h1>
                <img src={avatar_url} alt="avatar" />
                <h2>Name: {name}</h2>
                <h3>Location: {location}</h3>
                <h4>Contact: @akshaymarch7</h4>
            </div>
        )
    }
}

export default UserClass;