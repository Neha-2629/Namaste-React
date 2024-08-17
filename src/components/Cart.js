import { useDispatch, useSelector } from "react-redux";
import ItemList from "./itemList";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
    const cartItems = useSelector((store) => store.cart.items);
    console.log(cartItems);
    const dispatch = useDispatch();

    const handleClearCart = () => {
        dispatch(clearCart());
    }
    return (
        <div className="restaurant-menu">
            <div className="restaurant-menu-content">
                <div className="menu-items-container">
                    <h1 className="cart-header">Cart</h1>
                    <div className="cart">
                        <button
                            className="clear-cart-btn"
                            onClick={handleClearCart}
                        >
                            Clear Cart
                        </button>
                        {cartItems.length === 0 && <h1>Cart is empty!</h1>}
                        <ItemList items={cartItems} />
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Cart;




{/* <div className="text-center p-4 m-4">
            <h1>Cart</h1>
            <div className="w-6/12 p-2 m-auto">
                <button 
                    className="m-2 p-2 bg-black text-center rounded-lg text-lg text-white"
                    onClick={handleClearCart}
                >
                    Clear Cart
                </button>
                {cartItems.length === 0 && <h1>Your Cart is Empty! Please Add Items</h1>}
                <ItemList items={cartItems} />
            </div>
        </div> */}