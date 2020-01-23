import React from 'react'

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
        </>
        );
    }
}
export default ArrowFunction;