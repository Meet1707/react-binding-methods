import React from 'react';

class BindWithParameter extends React.Component {
    state = {
        foo: 'Initial'
    }
    bindWithParameter(fname, lname) {
        this.setState({
            foo: fname + " " + lname
        });
    }
    render() {
        return (<>
            <h5>Binding with parameter</h5>
            <button onClick={this.bindWithParameter.bind(this,"Ramsay","Bolton")}>Click Me!!</button>
            <p>{this.state.foo}</p><hr />
        </>);
    }
}
export default BindWithParameter;