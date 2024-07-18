import { useContext } from "react";
import { CDN_URL } from "../utils/constants";
import UserContext from "../utils/UserContext";

const RestaurantCard = (props) => {
    // console.log("Props is: ", props);
    // const { resName, cuisines } = props;
    const { resData } = props;
    // console.log("resData is: ", resData);
    const { loggedInUser } = useContext(UserContext);
    const { cloudinaryImageId, name, cuisines, avgRating, costForTwo, sla } = resData?.info;
    return (
        <div data-testid="resCard" className="m-4 p-4 w-[250px] rounded-lg bg-gray-100 hover:bg-gray-200">
            <img className="rounded-lg" src={CDN_URL + cloudinaryImageId} alt="res-logo" />
            {/* <h3>{props.resName}</h3>
            <h4>{props.cuisines}</h4>
            <h4>4.3 stars</h4>
            <h4>38 minutes</h4> */}
            <h3 className="font-bold py-4 text-lg">{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{avgRating} stars</h4>
            <h4>{costForTwo}</h4>
            <h4>{sla.deliveryTime} minutes</h4>
            <h4>User: {loggedInUser}</h4>
        </div>
    )
};

//Higher Order Component
//input - RestaurantCard ==> RestaurantCardOpened

export const withOpenedLabel = (RestaurantCard) => {
    return (props) => {
        return (
            <div>
                <label className="absolute bg-black text-white m-2 p-2 rounded-lg">Opened</label>
                <RestaurantCard {...props} />
            </div>
        )
    }
}

export default RestaurantCard;