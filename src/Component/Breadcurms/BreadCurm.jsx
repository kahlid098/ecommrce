import React from 'react'
import './Breadcurm.css'
import arrow_icon from '../Asset/breadcrum_arrow.png'

export const BreadCurm = (props) => {
  const {product} = props;
  return (
    <div className='breadcurm'>
        HOME <img src={arrow_icon} alt=''/> SHOP <img src={arrow_icon} alt=''/> {product.category} <img src={arrow_icon} alt=''/> {product.name}
    </div>
  )
}
