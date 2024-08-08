import React, { useContext } from "react";
import "./CSS/ShopCategoy.css"; //  // Ensure the path is correct
import { ShopContext } from "../Context/ShopContext";
import dropdown_icon from "../Component/Asset/dropdown_icon.png";
import { Item } from "../Component/Item/Item";

export const ShopCategory = (props) => {
  const { all_product } = useContext(ShopContext);

  console.log("All products:", all_product); // Debug log
  console.log("Selected category:", props.category); // Debug log

  const filteredProducts = all_product.filter(product => product.category === props.category);
  console.log("Filtered products:", filteredProducts); // Debug log

  return (
    <div className="shopcategory">
      <img className="Shopcategorybanner" src={props.banner} alt="Category Banner" />

      <div className="shopcategory-indexshort">
        <p>
          <span>Showing 1-12</span> out of {filteredProducts.length} products
        </p>
        <div className="shopcategory-sort">
          Sort by <img src={dropdown_icon} alt="Sort Dropdown Icon" />
        </div>
      </div>
      <div className="shopcategory-product">
        {filteredProducts.map((product, i) => (
          <Item
            key={i}
            id={product.id}
            name={product.name}
            category={product.category}
            image={product.image}
            new_price={product.new_price}
            old_price={product.old_price}
          />
        ))}
      </div>
      <div className="shopcategory-loadmore">Explore More</div>
    </div>
  );
};
