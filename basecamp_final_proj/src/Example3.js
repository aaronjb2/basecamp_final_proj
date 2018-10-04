import React, { Component } from 'react';

class Example3 extends Component {
    // incrementNumber = () => 
    // {
    //     this.setState
    //     (
    //         (prevState) => 
    //         (
    //             {
    //                 counter: prevState.counter + 1
    //             }
    //         )
    //     );
    // };
    render()
    {
        return (
        <button onClick={()=>this.props.onClickFunction("Reset")}>
        {"Reset"}
        </button>);
    }
}

export default Example3;