import React, {Component} from 'react';
import {FaTrash} from "react-icons/fa"
class Order extends Component {
    render() {
        return (
            <div className="order">
                <img src={this.props.item.img} alt=""/>
                <h4>{this.props.item.title}</h4>
                <b>{this.props.item.price}P</b>
                <FaTrash className="delete-icon" onClick={()=>this.props.onDelete(this.props.item.id)}/>
            </div>
        );
    }
}

export default Order;