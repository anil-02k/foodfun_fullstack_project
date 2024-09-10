import React, { useContext } from "react";
import "./Fooditem.css";
import { assets } from "../../assets/assets";
import { StoreContext } from "../../context/StoreContext";

const Fooditem = ({ id, name, price, description, image }) => {
  const { cartItems, addToCart, removeFromCart } = useContext(StoreContext);

  return (
    <div className="food-item">
      <div className="food-item-img-container">
        <img className="food-item-image" src={image} alt={name} />
        {
          !cartItems[id] || cartItems[id] === 0
          ? <img className="add" onClick={() => addToCart(id)} src={assets.add_icon_white} alt="Add to cart" />
          : <div className="food-item-counter">
              <img onClick={() => removeFromCart(id)} src={assets.remove_icon_red} alt="Remove from cart" />
              <p>{cartItems[id]}</p>
              <img onClick={() => addToCart(id)} src={assets.add_icon_green} alt="Add more" />
            </div>
        }
      </div>
      <div className="food-item-info">
        <div className="food-item-name-rating">
          <p>{name}</p>
          <img src={assets.rating_starts} alt="rating" />
        </div>
        <p className="food-item-desc">{description}</p>
        <p className="food-item-price">${price}</p>
      </div>
    </div>
  );
};

export default Fooditem;
