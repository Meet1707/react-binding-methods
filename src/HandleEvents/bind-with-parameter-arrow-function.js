import React from 'react';

class ArrowFunctionWithParameter extends React.Component {

    state = {
        foo: 'Initial'
    }

    arrrowFunctionWithPara = (fname="ra", lname) => {
        this.setState({
            foo: fname+" "+lname
        });
    }
    render() {
        return (<>
            <h5>Binding with parameter in arrow function</h5>
            <button onClick={() => this.arrrowFunctionWithPara("Ramsay","Bolton")}>Click Me btn!!</button>
            <p>{this.state.foo}</p><hr />
        </>);
    }
}
export default ArrowFunctionWithParameter;