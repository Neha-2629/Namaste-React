import { IoIosArrowDown } from "react-icons/io";
import ItemList from "./itemList";
import { useState } from "react";

const RestaurantCategory = ({data, showItems, setShowIndex}) => {
    const handleClick = () => {
        setShowIndex();
    }
    return (
        <div>      
        {/* Accordian header */}
            <div className="accordian-header">
                <div className="flex justify-between" onClick={handleClick}>
                    <span className="font-bold text-lg">{data.title} ({data.itemCards.length})</span>
                    <span><IoIosArrowDown  /></span>
                </div>
            </div>
        {/* Accordian body */}
            {showItems && <ItemList items={data.itemCards}/>}
        </div>
    )
}


export default RestaurantCategory;



// import { MdOutlineKeyboardArrowUp } from "react-icons/md";
// <MdOutlineKeyboardArrowUp />