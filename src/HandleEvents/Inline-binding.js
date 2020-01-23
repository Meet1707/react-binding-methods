import React from 'react';
import ConstructorBinding from './Constructor-Binding'

class App extends React.Component {
    // state = {
    //     foo: 'Initial'
    // }
    // inlineBinding(e) {
    //     this.setState({
    //         foo: 'Button Clicked!!'
    //     });
    // }
    render() {
        return (<><h5>Inline Binding</h5>
                {/* <button onClick={this.inlineBinding.bind(this)}>Click Me!!</button>
                <p>{this.state.foo}</p><hr /> */}

                <ConstructorBinding />
            </>
        );
    }
}
export default App;