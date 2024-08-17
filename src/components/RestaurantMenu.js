import { useParams } from "react-router-dom"; // import useParams to read `resId`
import {
  MENU_API_URL,
  IMG_CDN_URL,
  ITEM_IMG_CDN_URL,
  MENU_ITEM_TYPE_KEY,
  RESTAURANT_TYPE_KEY,
} from "../utils/constants";
import {MenuShimmer} from "./Shimmer";
import useResMenuData from "../utils/useResMenuData"; // imported custom hook useResMenuData which gives restaurant Menu data from swigy api
import useOnline from "../utils/useOnline"; // imported custom hook useOnline which checks if user is online or not
import UserOffline from "./UserOffline";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";
//import useRestaurantMenu from "../utils/userestaurantMenu";

const RestaurantMenu = () => {
  const { resId } = useParams(); // call useParams and get value of restaurant id using object destructuring
  const [restaurant, category] = useResMenuData(
    MENU_API_URL,
    resId,
    RESTAURANT_TYPE_KEY,
    MENU_ITEM_TYPE_KEY
  );
  const [showIndex, setShowIndex] = useState(null);
  const isOnline = useOnline();

  // if user is not Online then return UserOffline component
  if (!isOnline) {
    return <UserOffline />;
  }

  return !restaurant ? (
    <MenuShimmer />
  ) : (
    <div className="restaurant-menu">
      <div className="restaurant-summary">
        <img
          className="restaurant-img"
          src={IMG_CDN_URL + restaurant?.cloudinaryImageId}
          alt={restaurant?.name}
        />
        <div className="restaurant-summary-details">
          <h2 className="restaurant-title">{restaurant?.name}</h2>
          <p className="restaurant-tags">{restaurant?.cuisines?.join(", ")}</p>
          <div className="restaurant-details">
            <div
              className="restaurant-rating"
              style={
                restaurant?.avgRating < 4
                  ? { backgroundColor: "var(--light-red)" }
                  : restaurant?.avgRating === "--"
                  ? { backgroundColor: "white", color: "black" }
                  : { color: "white" }
              }
            >
              <i className="fa-solid fa-star"></i>
              <span>{restaurant?.avgRating}</span>
            </div>
            <div className="restaurant-rating-slash">|</div>
            <div>{restaurant?.sla?.slaString}</div>
            <div className="restaurant-rating-slash">|</div>
            <div>{restaurant?.costForTwoMessage}</div>
          </div>
        </div>
      </div>

      <div className="restaurant-menu-content">
        <div className="menu-items-container">
        </div>
      </div>
      {/* Changes for category */}
      {
        category.map((c, index) => (
          <RestaurantCategory 
            key={c?.title} 
            data={c}
            showItems={index === showIndex ? true : false}
            setShowIndex = {() => setShowIndex(index)}
          />
        ))
      }
    </div>
  );
};

export default RestaurantMenu;