import { useState } from "react";

const User = ({ name }) => {
    const [count, setCount] = useState(0);
    const [count2, setCount2] = useState(0);

    return (
        <div className="user-card">
            <h2>Name: {name}</h2>
            <h3>Location: Dehradun</h3>
            <h4>Contact: @akshaymarch7</h4>
        </div>
    )
}

export default User;