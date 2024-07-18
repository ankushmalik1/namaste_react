import { CDN_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";

const ItemList = ({ items }) => {
    const dispatch = useDispatch();

    const handleAddItem = (item) => {
        // dispatch an action
        dispatch(addItem(item));
        // returns {
        //     payload: "pizza"
        // }
    }
    return (
        <div>
            {items.map((item) => <div data-testid="foodItems" key={item.card.info.id} className="p-2 m-2 border-gray-200 border-b-2 text-left flex justify-between">
                <div className="w-9/12">
                    <div className="py-2">
                        <span>{item.card.info.name}</span>
                        <span> - ₹{item.card.info.price / 100 || item.card.info.defaultPrice / 100}</span>
                    </div>
                    <p className="text-xs">{item.card.info.description}</p>
                </div>
                <div className="w-3/12 p-4">
                    <div className="absolute">
                        <button className="p-2 mx-16 my-16 rounded-lg bg-white text-green-700 shadow-lg font-bold" onClick={() => handleAddItem(item)}>Add +</button>
                    </div>
                    <img src={CDN_URL + item.card.info.imageId} alt="Image" />
                </div>
            </div>)}
        </div>
    )
}

export default ItemList;