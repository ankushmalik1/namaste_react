//Here, we abstarct the fetching data logic.
import { useEffect, useState } from "react";
import { MENU_API } from "../utils/constants";

const useRestaurantMenu = (resIdd) => {
    const [resInfo, setResInfo] = useState(null);
    //fetch data
    useEffect(() => {
        fetchData();
    }, [resIdd])

    const fetchData = async () => {
        const data = await fetch(MENU_API + resIdd + "&catalog_qa=undefined&submitAction=ENTER");

        const json = await data.json();

        const newArr = await json.data.cards;
        setResInfo(newArr);
    }
    return resInfo;
}

export default useRestaurantMenu;