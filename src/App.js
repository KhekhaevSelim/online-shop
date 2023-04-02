import './App.css';
import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Items from "./components/Items";
import Categories from "./components/Categories";
import ShowFullItem from "./components/ShowFullItem";
// import firebase from "firebase/compat";
// import "firebase/firestore"
// import "firebase/auth"
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

 firebase.initializeApp({
    apiKey: "AIzaSyANKLe3UoDNtvgACyYwazsQ6bMfqs3dQc4",
    authDomain: "body-hunter.firebaseapp.com",
    projectId: "body-hunter",
    storageBucket: "body-hunter.appspot.com",
    messagingSenderId: "592916423728",
    appId: "1:592916423728:web:5af5418485add403f5f9f5",
    measurementId: "G-Y3TK179715"
})


const imgWheyProtein = "data:image/jpeg;base64,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"

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            orders: [],
            currentItems : [],
            items: [
                {
                    id: 1,
                    title: "Протеин Gold Standard 100% Whey ",
                    img: imgWheyProtein,
                    desc: "Добавка для восполнения потребности белка",
                    category: "protein",
                    price: 4500
                },
                {
                    id: 2,
                    title: "Протеин Gold Standard 100% Whey ",
                    img: imgWheyProtein,
                    desc: "Добавка для восполнения потребности белка",
                    category: "protein",
                    price: 4500
                },
                {
                    id: 3,
                    title: "Протеин Gold Standard 100% Whey ",
                    img: imgWheyProtein,
                    desc: "Добавка для восполнения потребности белка",
                    category: "carbs",
                    price: 4500
                },
                {
                    id: 4,
                    title: "Протеин Gold Standard 100% Whey ",
                    img: imgWheyProtein,
                    desc: "Добавка для восполнения потребности белка",
                    category: "carbs",
                    price: 4500
                },
                {
                    id: 5,
                    title: "Протеин Gold Standard 100% Whey ",
                    img: imgWheyProtein,
                    desc: "Добавка для восполнения потребности белка",
                    category: "creatine",
                    price: 4500
                },
                {
                    id: 6,
                    title: "Протеин Gold Standard 100% Whey ",
                    img: imgWheyProtein,
                    desc: "Добавка для восполнения потребности белка",
                    category: "sarms",
                    price: 4500
                },
                {
                    id: 7,
                    title: "Протеин Gold Standard 100% Whey ",
                    img: imgWheyProtein,
                    desc: "Добавка для восполнения потребности белка",
                    category: "sarms",
                    price: 4500
                },
                {
                    id: 8,
                    title: "Протеин Gold Standard 100% Whey ",
                    img: imgWheyProtein,
                    desc: "Добавка для восполнения потребности белка",
                    category: "other",
                    price: 4500
                },
                {
                    id: 9,
                    title: "Протеин Gold Standard 100% Whey ",
                    img: imgWheyProtein,
                    desc: "Добавка для восполнения потребности белка",
                    category: "sarms",
                    price: 4500
                },
                {
                    id: 10,
                    title: "Протеин Gold Standard 100% Whey ",
                    img: imgWheyProtein,
                    desc: "Добавка для восполнения потребности белка",
                    category: "boost",
                    price: 4500
                },
                {
                    id: 11,
                    title: "Протеин Gold Standard 100% Whey ",
                    img: imgWheyProtein,
                    desc: "Добавка для восполнения потребности белка",
                    category: "boost",
                    price: 4500
                },
                {
                    id: 12,
                    title: "Протеин Gold Standard 100% Whey ",
                    img: imgWheyProtein,
                    desc: "Добавка для восполнения потребности белка",
                    category: "other",
                    price: 4500
                },
                {
                    id: 13,
                    title: "Протеин Gold Standard 100% Whey ",
                    img: imgWheyProtein,
                    desc: "Добавка для восполнения потребности белка",
                    category: "other",
                    price: 4500
                },
            ],
            showFullItem : false,
            fullItem : {},
            login : false
            // auth : firebase.auth()
            // fireStore : firebase.firestore()
        }
        this.state.currentItems = this.state.items
        this.login = this.login.bind(this)
        this.addToOrder = this.addToOrder.bind(this)
        this.deleteOrder = this.deleteOrder.bind(this)
        this.setFilter = this.setFilter.bind(this)
        this.onShowItem = this.onShowItem.bind(this)

    }

    render() {
        return (
            <div className="wrapper">
                <Header orders={this.state.orders} onDelete={this.deleteOrder} login={this.state.login} onLogin={this.login} />
                <Categories setFilter={this.setFilter}/>
                <Items onShowItem={this.onShowItem} items={this.state.currentItems} onAdd={this.addToOrder}/>
                {this.state.showFullItem && <ShowFullItem onShowItem={this.onShowItem} onAdd={this.addToOrder} item={this.state.fullItem}/>}
                <Footer/>
            </div>
        );
    }


    login = async () => {
        const auth = firebase.auth();
        const provider = new firebase.auth.GoogleAuthProvider();
        const {user} = await auth.signInWithPopup(provider)
        this.setState({login : true})
        console.log(this.state.login)
        console.log(user)

    }
    onShowItem(item){
        this.setState({fullItem : item})
        this.setState({showFullItem : !this.state.showFullItem})
    }
    setFilter(category){
        if(category === "all"){
            this.setState({ currentItems : this.state.items})
        } else {
            this.setState({ currentItems : this.state.items.filter(i=>i.category === category
                )})
        }
        }

    deleteOrder (id) {
        this.setState({orders : this.state.orders.filter(el => el.id !== id)})
    }
    addToOrder(item) {
        let isInArray = false;
        this.state.orders.forEach(el => {
            if (el.id === item.id) {
                isInArray = true
            }
        })
        if (!isInArray) {
            this.setState({orders: [...this.state.orders, item]}, () => {
            })
        }
    }
}

export default App;
