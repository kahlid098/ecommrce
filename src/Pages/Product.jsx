

import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { BreadCurm } from '../Component/Breadcurms/BreadCurm';
import { ProductDisplay } from '../Component/ProductDisplay/ProductDisplay';
import { ShopContext } from '../Context/ShopContext';
import DescriptionBox from '../Component/DescriptionBox/DescriptionBox';
import RelatedProducts from '../Component/RelatedProducts/RelatedProducts';

export const Product = () => {
  const { all_product } = useContext(ShopContext); // useContext with ShopContext
  const { id: productId } = useParams(); // Ensure useParams is destructuring id
  const product = all_product.find((e) => e.id === Number(productId)); // Find product by id

  return (
    <div>
      <BreadCurm product={product} />
      <ProductDisplay product={product} />
      <DescriptionBox/>
      <RelatedProducts/>
    </div>
  );
};
