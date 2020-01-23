import React from 'react';
import ArrowFunction from './arrow-function';

class ConstructorBinding extends React.Component {
    constructor() {
        super();
        this.conBinding = this.conBinding.bind(this);
    }
    state = {
        foo: 'Initial'
    }
    conBinding() {
     this.setState({
         foo: 'Button Clicked!!'
     })
    }
    render() {
        return (<>
            <h5>Constructor Binding</h5>
            <button onClick={this.conBinding}>Click Me!!</button>
            <p>{this.state.foo}</p><hr />
            <ArrowFunction />
        </>);
    }
}
export default ConstructorBinding;