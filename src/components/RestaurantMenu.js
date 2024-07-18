import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";

const RestaurantMenu = () => {
    // const [resInfo, setResInfo] = useState(null);
    // const params = useParams();
    // const resId = params.resId;
    const { resId } = useParams();
    // const resIdd = resId.slice(1);

    const resInfo = useRestaurantMenu(resId);

    const [showIndex, setShowIndex] = useState(null);

    // useEffect(() => {
    //     fetchMenu();
    // }, [])

    // const fetchMenu = async () => {
    //     const data = await fetch(MENU_API + resIdd + "&catalog_qa=undefined&submitAction=ENTER");
    //     const json = await data.json();
    //     setResInfo(json.data);
    // }
    // console.log("ResInfo is:", resInfo);


    if (resInfo === null) return <Shimmer />;
    const { name, cuisines, costForTwoMessage } = resInfo[2]?.card?.card?.info;
    const { itemCards } = resInfo[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
    // console.log("Cards are: ", resInfo[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards);
    const categories = resInfo[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(c => c?.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");
    // console.log("CAtegoreies are :", categories);

    return (resInfo === null) ? <Shimmer /> : (
        <div className="text-center">
            <h1 className="font-bold my-6 text-2xl">{name}</h1>
            <p className="font-bold text-lg">{cuisines.join(", ")} - {costForTwoMessage}</p>
            {/* <h2>Menu</h2>
            <ul>
                {itemCards.map(item => (
                    <li key={item?.card?.info?.id}>{item?.card?.info?.name} - {"Rs."} {item?.card?.info?.price / 100 || item?.card?.info?.defaultPrice / 100}</li>
                ))}
            </ul> */}
            {/* categories Accordions */}
            {categories.map((category, index) => {
                {/* Controlled Component */ }
                return <RestaurantCategory
                    key={category?.card?.card?.title}
                    data={category?.card?.card}
                    showItems={index === showIndex ? true : false}
                    setShowIndex={() => setShowIndex(index)} />
            })}
        </div>
    )
}

export default RestaurantMenu;