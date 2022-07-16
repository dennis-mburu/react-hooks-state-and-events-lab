import React, {useState} from "react";

function Item({ name, category }) {
  
  const [inCart, setInCart] = useState(false);
  const cartBtnTxt = inCart ? "Remove fromCart" : "Add to Cart";
  const classNameText = inCart ? "in-cart" : "" 
  return (
    <li className={classNameText}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={() => setInCart(!inCart)}>{cartBtnTxt}</button>
    </li>
  );
}

export default Item;
