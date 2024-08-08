import React, { useContext, useState } from 'react'
import './Navbar.css'
import logo from '../Asset/logo.png'
import cart_icon from '../Asset/cart_icon.png'
import { NavLink } from 'react-router-dom'
import { ShopContext } from '../../Context/ShopContext'

 function Navbar() {
    const [menu, setMenu] = useState("shop")
    const {getTotalCartItems} = useContext(ShopContext)
    return (

        <div className='navbar'>
            <div className='nav-logo'>
                <img src={logo} alt='img' />
                <p>SHOPPER</p>
            </div>
            <ul className='nav-menu'>
                <NavLink to="/"><li onClick={() => { setMenu("shop") }}>Shop {menu === "shop" ? <hr /> : <></>}</li></NavLink>
                <NavLink to="/mens"><li onClick={() => { setMenu("men") }}> Men {menu === "men" ? <hr /> : <></>}</li></NavLink>
                <NavLink to="/womens"><li onClick={() => { setMenu("women") }}>Women{menu === "women" ? <hr /> : <></>}</li></NavLink>
                <NavLink to="/kids"><li onClick={() => { setMenu("kids") }}> Kids {menu === "kids" ? <hr /> : <></>}</li></NavLink>
            </ul>
            <div className='nav-login-cart'>
               <NavLink to="/login"> <button>Login</button></NavLink>
                <NavLink to="/cart"><img src={cart_icon} alt='img'/></NavLink>
                <div className='nav-cart-count'>{getTotalCartItems()}</div>
            </div>

        </div>
    )
}

export default Navbar;
