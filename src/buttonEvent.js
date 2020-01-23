import React from 'react';

class ButtonEvent extends React.Component {
    buttonClick = (e) => console.log("Clicked!!");
    render() {
        return (<div>
            <button onClick={(e) => this.buttonClick(e)}>Click Me!!</button>
        </div>);
    }
}

export default ButtonEvent;