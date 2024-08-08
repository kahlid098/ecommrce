import React, { useContext } from "react";
import "./productdisplay.css";
import star_icon from "../Asset/star_icon.png";
import star_dull from "../Asset/star_dull_icon.png";
import { ShopContext } from "../../Context/ShopContext";

export const ProductDisplay = (props) => {
  const { product } = props;

  const {addToCart} = useContext (ShopContext)
  return (
    <div className="productdisplay">
      <div className="product-left">
        <div className="product-img-list">
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
        </div>
        <div className="productdisplay-img">
          <img className="productdisplay-main-img" src={product.image} alt="" />
        </div>
      </div>
      <div className="product-right">
        <h1>{product.name}</h1>
        <div className="poductdisplay-star">
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_dull} alt="" />
          <p>(122)</p>
        </div>
        <div className="productdisplay-right-prices">
          <div className="productdisplay-right-prices-old">
            ${product.old_price}
          </div>
          <div className="productdisplay-right-prices-new">
            ${product.new_price}
          </div>
        </div>
        <div className="productdisplay-right-description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Error omnis
          maxime eum, cupiditate minus dolores vel odit, voluptatem aliquid ab
          non ipsa consequatur eos dicta!
        </div>
        <div className="productdisplay-right-size">
            <h1>Slelect Size</h1>
            <div className="productdisplay-right-sizes">
                <div>S</div>
                <div>M</div>
                <div>L</div>
                <div>XL</div>
                <div>XXL</div>
            </div>
        </div>
        <button onClick={()=>{addToCart(product.id)}}>Add To Cart</button>
        <p className="productdisplay-right-category"> <span>Category</span>Women, T-Shirt,Crop, Top</p>
        <p className="productdisplay-right-category"> <span>Tags</span>Modern, Latest,Crop, Top</p>
      </div>
    </div>
  );
};
