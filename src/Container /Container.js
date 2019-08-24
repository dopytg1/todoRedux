import React from "react";

import { Provider } from "react-redux";
import { createStore } from "redux";
import "./Container.css"
import Header from "../Component/Header"
import reduser from "../store/Reducer";
import RenderToDo from "../Component/RenderToDo"

let store = createStore(reduser);

// let test = store.getState();
// console.log(store.getState());

class Container extends React.Component {

    render() {
        return (
            <React.Fragment>
                <Provider store={store}>

                    <Header/>
                    <RenderToDo />

                </Provider>
            </React.Fragment>

        )
    }
}

export default Container;