import React from "react";

import { connect } from "react-redux";
import RenderComponent from "./RenderToDoComponent"
import "./Render.css"

class RenderToDo extends React.Component {

    getStore = () => {
        console.log(this.props)
    }

    render() {
        return (
            <React.Fragment>
                <div className="title">
                    <div className="container2">
                {/* <h1 onClick={this.getStore}>hello</h1> */}
                
                {this.props.todos.map(((item, index) => <RenderComponent
                key={index}
                todos={item}
                />))}
                    </div>
                </div>
            </React.Fragment>
            
        )
    }
}

function mapStateToProps(state) {
    return{
        todos: state.todos
    }
}

function mapDispatchToProps(dispatch) {
    return{

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(RenderToDo);