import React, {Component} from 'react';

class Categories extends Component {
    constructor(props) {
        super(props);
        this.state = {
            categories : [
                {
                    key : "all",
                    name : "все"
                },
                {
                    key : "protein",
                    name : "протеин"
                },
                {
                    key : "carbs",
                    name : "гейнер"
                },
                {
                    key : "creatine",
                    name : "креатин"
                },
                {
                    key : "sarms",
                    name : "сарм"
                },
                {
                    key : "boost",
                    name : "бустеры"
                },
                {
                    key : "other",
                    name : "другое"
                },
            ]
        }
    }
    render() {
        return (
            <div className="categories">
                {this.state.categories.map(el=>(
                    <div key={el.key} onClick={()=> this.props.setFilter(el.key)}>{el.name}</div>
                ))}
            </div>
        );
    }
}

export default Categories;