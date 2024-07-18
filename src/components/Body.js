import RestaurantCard, { withOpenedLabel } from "./RestaurantCard";
import { CARDS_API } from "../utils/constants";
// import resList from "../utils/mockData";
import { useState, useEffect, useContext } from "react";
// import resList from "../utils/mockData";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Body = () => {
    //local State Variable - Super Powerful variable
    // const [listOfRestaurants, setListOfRestaurants] = useState(resList);
    const [listOfRestaurants, setListOfRestaurants] = useState([]);
    const [filteredRestaurants, setFilteredRestaurants] = useState([]);

    const [searchText, setSearchText] = useState("");

    const RestaurantCardOpened = withOpenedLabel(RestaurantCard);

    // Whenever state variables update, react re-renders the component(or, triggers a reconciliation cycle)
    // console.log("Body Component rendered", listOfRestaurants);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch(CARDS_API);
        const json = await data.json();
        //Optional Chaining - good way of handling response data
        setListOfRestaurants(json?.data?.success?.cards[1]?.gridWidget?.gridElements?.infoWithStyle?.restaurants);
        setFilteredRestaurants(json?.data?.success?.cards[1]?.gridWidget?.gridElements?.infoWithStyle?.restaurants);
    }

    //Conditional Rendering
    // if (listOfRestaurants === 0) {
    //     // return <h1>Loading...</h1>;
    //     return <Shimmer />;
    // }

    const onlineStatus = useOnlineStatus();

    if (onlineStatus === false)
        return (<h1>Looks like you are offline!! Please check your internet connection.</h1>)

    const { loggedInUser, setUserName } = useContext(UserContext);

    return listOfRestaurants === 0 ? (<Shimmer />) : (
        <div className="body">
            <div className="filter flex">
                <div className="search m-4 p-4">
                    {/* Search Restaurants */}
                    <input type="text" data-testid="searchInput" className="border border-solid border-black" value={searchText} onChange={(e) => {
                        setSearchText(e.target.value);
                        if (e.target.value === '') {
                            setFilteredRestaurants(listOfRestaurants);
                        }
                    }} />
                    <button className="px-4 py-2 bg-green-100 m-4 rounded-lg" onClick={() => {
                        const filteredRestaurants = listOfRestaurants.filter((res) => res?.info?.name.toLowerCase().includes(searchText.toLowerCase()));
                        setFilteredRestaurants(filteredRestaurants);
                    }}>Search</button>

                    {/* Top Rated Restaurants */}

                </div>
                <div className="search m-4 p-4 flex items-center">
                    <button className="px-4 py-4 bg-gray-100" onClick={() => {
                        // console.log("LOR", listOfRestaurants);
                        const filteredList = listOfRestaurants.filter((res) => res.info.avgRating > 4)
                        // setListOfRestaurants(filteredList);
                        setFilteredRestaurants([...filteredList]);
                        console.log("Button clicked and state updated");
                    }}>Top Rated Restaurants</button>
                </div>
                <div className="search m-4 p-4 flex items-center">
                    <label htmlFor="">UserName: </label>
                    <input className="border border-black" value={loggedInUser} onChange={(e) => setUserName(e.target.value)} />
                </div>
            </div>
            <div className="flex flex-wrap">
                {/* <RestaurantCard resName="Burger King" cuisines="Burgers, American, Fries" />
                <RestaurantCard resName="KFC" cuisines="Burger, Pizza, Fast Food" /> */}
                {filteredRestaurants && filteredRestaurants.map((restaurant) => {
                    return <Link
                        key={restaurant?.info?.id}
                        to={"/restaurants/" + restaurant?.info?.id}
                    >
                        {/* if Res is open, then add a Opened label to it */}
                        {restaurant.info.isOpen ? <RestaurantCardOpened resData={restaurant} /> :
                            <RestaurantCard resData={restaurant} />}</Link>
                })}
                {/* React says NEVER to use index
                {resList.map((restaurant, index) => {
                    <RestaurantCard key={index} resData={restaurant} />
                })} */}
            </div>
        </div>
    )
}

export default Body;