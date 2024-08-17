import { useDispatch } from "react-redux";
import {
    MENU_API_URL,
    IMG_CDN_URL,
    ITEM_IMG_CDN_URL,
    MENU_ITEM_TYPE_KEY,
    RESTAURANT_TYPE_KEY,
  } from "../utils/constants";
import { addItem } from "../utils/cartSlice";

const ItemList = ({items}) => {
    const dispatch = useDispatch();
    
    const handleAddItems = (item) => {
        dispatch(addItem(item));
    };
    // console.log({items});
    return (
        <div>
            {items.map(item => (
                <div 
                 key={item?.card?.info?.id} 
                 className="menu-item-list">
                    <div className="menu-item" key={item?.card?.info?.id}>
                        <div className="menu-item-details">
                            <h3 className="item-title">{item?.card?.info?.name}</h3>
                            <p className="item-cost">
                                {item?.card?.info?.price > 0
                                ? new Intl.NumberFormat("en-IN", {
                                    style: "currency",
                                    currency: "INR",
                                    }).format(item?.card?.info?.price / 100)
                                : " "}
                            </p>
                            <p className="item-desc">{item?.card?.info?.description}</p>
                        </div>
                        <div className="menu-img-wrapper">
                            {item?.card?.info?.imageId && (
                                <img
                                    className="menu-item-img"
                                    src={ITEM_IMG_CDN_URL + item?.card?.info?.imageId}
                                    alt={item?.card?.info?.name}
                                />
                            )}
                            <button className="add-btn" onClick={() => handleAddItems(item)}> ADD +</button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default ItemList;
