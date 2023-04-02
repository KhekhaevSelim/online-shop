import React, {useState} from 'react';
import { FaShoppingCart } from "react-icons/fa";
import Order from "./Order";
const Header = (props) => {
    let [cartOpen, setCartOpen] = useState(false)
    const editCart = () => {
        setCartOpen(!cartOpen)
    }
    let summa = 0;
    props.orders.forEach(el=> summa += el.price)


    return (
        <header>
            <div>
                <span className="logo"> Body Hunter </span>
                <ul className="nav">
                    <li>Спортивное питание</li>
                    <li>Про нас</li>
                    {props.login ?
                        <li>Выход</li>
                        :
                        <li onClick={props.onLogin}>Вход</li>
                    }


                </ul>
                <FaShoppingCart onClick={editCart} className={`shop-cart-button ${cartOpen && "active"}`}/>

                {cartOpen &&
                    <div className="shop-cart">
                        {props.orders.length ?
                        props.orders.map(o=>{
                            return (
                                <Order onDelete={props.onDelete} key={o.id} item={o}/>
                            )
                        })
                        :
                            <p>your shop cart is empty</p>
                        }
                        <p className="sum">Сумма : {summa}</p>
                </div>}
            </div>
            <div className="presentation"></div>
        </header>
    );
};

export default Header;