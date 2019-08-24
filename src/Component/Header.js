import React from "react";

import "./Header.css";
import { connect } from "react-redux";
import { inputNewToDo, addNewToDo } from "../store/Action"


class Header extends React.Component {

    showStore = () => {
        console.log(this.props.todos);
    }
    

    render() {
        return(
            <div className="App">
                <header className="App-header">
                    <div className="container">
                        <h1>To-Do-list</h1>
                        <h3 className="add-to-do">add ToDo</h3>
                        <div className="App_inp_div">
                           <input onChange={(event) => this.props.inptodo(event.target.value)}></input>
                           <button onClick={this.props.addtodo}>Add</button> 
                           <button onClick={this.showStore}></button>
                        </div>
                        
                    </div>
                </header>
            </div>
        );
    }
}
function mapStateToProps(state) {
    return {
        todo: state.todo,
        todos: state.todos
    }
}



function mapDispatchToProps(dispatch) {
    return{
        
        inptodo: (value) => dispatch(inputNewToDo(value)),
        addtodo: () => dispatch(addNewToDo()),
    }
        
    
}


export default connect(mapStateToProps, mapDispatchToProps)(Header);