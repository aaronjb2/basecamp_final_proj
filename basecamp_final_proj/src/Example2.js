import React, { Component } from 'react';

class Example2 extends Component {
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
        <button onClick={()=>this.props.onClickFunction(this.props.incrementValue)}>
        +{this.props.incrementValue}
        </button>);
    }
}

export default Example2;