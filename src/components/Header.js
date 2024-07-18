import { LOGO_URL } from "../utils/constants";
import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
    const [btnNameReact, setBtnNameReact] = useState("Login");

    // dependency array is NOT mandatory.
    // If NO dependency array --> useEffect is called after every comp render.
    useEffect(() => {
        console.log("useEffect called without dependency array");
    })
    //If empty dependency array --> useEffect is called on initial render (just once)
    useEffect(() => {
        console.log("useEffect called with empty dependency array");
    }, [])
    //variable in dependency array --> useEffect is called only when dependency array's variable value changes/updates.
    useEffect(() => {
        console.log("useEffect called with dependency array");
    }, [btnNameReact])

    const onlineStatus = useOnlineStatus();
    const { loggedInUser } = useContext(UserContext);

    //Subscribing to the Store using a Selector - useSelector() hook, will give us access to the Store
    const cartItems = useSelector((store) => store.cart.items);

    return (
        <div className="flex justify-between bg-pink-100 shadow-lg sm:bg-yellow-50 lg:bg-green-50">
            <div className="logo-container">
                <img className="w-56" src={LOGO_URL} alt="" />
            </div>
            <div className="flex items-center">
                <ul className="flex p-4 m-4">
                    <li className="px-4">Online Status: {onlineStatus ? "🟢" : "🔴"}</li>
                    <li className="px-4"><Link to="/">Home</Link></li>
                    <li className="px-4"><Link to="/about">About</Link></li>
                    <li className="px-4"><Link to="/contact">Contact Us</Link></li>
                    <li className="px-4"><Link to="/grocery">Grocery</Link></li>
                    <li className="px-4 font-bold text-xl"><Link to="/cart">Cart-({cartItems.length} items)</Link></li>
                    <button className="login" onClick={() => { btnNameReact === "Login" ? setBtnNameReact("Logout") : setBtnNameReact("Login") }}>{btnNameReact}</button>
                    <li className="px-4">{loggedInUser}</li>
                </ul>
            </div>
        </div>
    )
}

export default Header;