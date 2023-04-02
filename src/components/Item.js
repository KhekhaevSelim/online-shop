import React, {Component} from 'react';

class Item extends Component {
    render() {
        return (
            <div className="item">
                <img src={this.props.item.img} alt="" onClick={()=> this.props.onShowItem(this.props.item)}/>
                <h4>{this.props.item.title}</h4>
                <p>{this.props.item.desc}</p>
                <b>{this.props.item.price}P</b>
                <div className="add-to-cart" onClick={()=>this.props.onAdd(this.props.item)}>+</div>
            </div>
        );
    }
}

export default Item;