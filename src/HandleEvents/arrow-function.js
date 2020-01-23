import React from 'react'
import BindWithParameter from './bind-with-parameter'

class ArrowFunction extends React.Component {
    state = {
        foo: 'Initial'
    }
    arrowFunction = () => this.setState({ foo: 'Button Clicked' })
    render() {
        return (<>
            <h5>Arrow-function Binding</h5>
            <button onClick={this.arrowFunction}>Click Me!!</button>
            <p>{this.state.foo}</p><hr />

            <BindWithParameter />
        </>
        );
    }
}
export default ArrowFunction;