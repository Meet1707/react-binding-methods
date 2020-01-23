import React from 'react';

class Counter extends React.Component {
    state = {
        counter: '12',
        edit: false,
        input: ''
    }
    changeCounter = () => {
        this.setState({
            counter: this.state.input,
            edit: false
        });
    }
    edit = () => {
        this.setState({
            edit: true
        });
    }
    setInput = (e) => {
        this.setState({
            input: e.target.value
        })
    }
    render() {
        let { edit } = this.state;
        if (!edit) {
            return (<>
                <p>Counter: {this.state.counter}</p>
                <button onClick={this.edit}>edit</button>
            </>);
        }
        return (<>
            <p>Counter: {this.state.counter}</p>
            <input type="number" onChange={e => this.setInput(e)} />
            <button onClick={this.changeCounter}>Submit</button>
        </>);
    }
}
export default Counter;