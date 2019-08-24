import React from "react";


class RenderComponent extends React.Component {

    render() {
        return(
            <p>{this.props.todos.text}</p>
            // <h1 onClick={this.gg}>hello</h1>
        )
    }
}

export default RenderComponent;