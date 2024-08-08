import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import ShopContextProvider from './Context/ShopContext';
import all_product from './Component/Asset/all_product';

const root = ReactDOM.createRoot(document.getElementById('root'));
const category = "men"
root.render(
    <ShopContextProvider value = {category}>
        <App />
    </ShopContextProvider>


);


reportWebVitals();
export default all_product;
