import React from "react";
import "./App.css";

// class App extends React.Component {
//      state = {
//        fname: '',
//        lname: '',
//        lan: ''
//      }
//     updateValue = (event) =>{
//       this.setState({
//         [event.target.name]: event.target.value
//       })
//     }
//     render(){
//   return (
//     <div>
//         <form>
//            <input type="text" name="fname" value={this.state.fname} onChange={e=>this.updateValue(e)}/>   <br />
//            <input type="text"name="lname" value={this.state.lname} onChange={e=>this.updateValue(e)}/>   <br />
//            <select name="lan"  onChange={e=>this.updateValue(e)}>

//                <option>Java</option>
//                <option>Android</option>
//            </select>
//         </form>
//         First Name: {this.state.fname}<br/>
//         Last Name: {this.state.lname}<br/>
//         Language: {this.state.lan}<br/>
//       </div>
//   );
//   }
// }
class Calc_Nums extends React.Component {
  state = {
    val: "",
    val1: "",
    val2: "",
    flag: 0
  };
  changeFlag = data => {
    // console.log(this.state.val1,this.state.val2);
    this.setState({
      val: "",
      flag: data
    });
  };
  inputValue = event => {
    if (this.state.flag === 0) {
      this.setState({
        val: this.state.val + event.target.value,
        val1: this.state.val1 + event.target.value
      });
    } else {
      this.setState({
        val: this.state.val + event.target.value,
        val2: this.state.val2 + event.target.value
      });
    }
  };
  render() {
    return (
      <div>
        <input type="text" value={this.state.val} />
        <br />
        <button value="1">-</button>
        <button value="1" onClick={e => this.inputValue(e)}>
          1
        </button>
        <button
          value="2"
          onClick={e => {
            this.inputValue(e);
          }}
        >
          2
        </button>
        <button
          value="3"
          onClick={e => {
            this.inputValue(e);
          }}
        >
          3
        </button>
        <br />
        <button
          value="4"
          onClick={e => {
            this.inputValue(e);
          }}
        >
          4
        </button>
        <button
          value="5"
          onClick={e => {
            this.inputValue(e);
          }}
        >
          5
        </button>
        <button
          value="6"
          onClick={e => {
            this.inputValue(e);
          }}
        >
          6
        </button>
        <button
          value="7"
          onClick={e => {
            this.inputValue(e);
          }}
        >
          7
        </button>
        <br />
        <button
          value="8"
          onClick={e => {
            this.inputValue(e);
          }}
        >
          8
        </button>
        <button
          value="9"
          onClick={e => {
            this.inputValue(e);
          }}
        >
          9
        </button>
        <button
          value="0"
          onClick={e => {
            this.inputValue(e);
          }}
        >
          0
        </button>
        <button
          value="00"
          onClick={e => {
            this.inputValue(e);
          }}
        >
          00
        </button>
        <Calc
          v1={this.state.val1}
          v2={this.state.val2}
          callbackFun={this.changeFlag}
        />
      </div>
    );
  }
}
class Calc extends React.Component {
  state = {
    vl1: "",
    vl2: "",
    operation: "+",
    ans: ""
  };
  componentWillReceiveProps(nextProps) {
		console.log(
			"called"
		)
    this.setState({ vl1: nextProps.v1 });
    this.setState({ vl2: nextProps.v2 });
  }

  perOperation = op => {
		const { vl1 } = this.state
		switch(op){
			case '+':
				console.log(vl1+ this.state.vl2);
			this.setState({ ans: Number(vl1) + Number(this.state.vl2) });
				break;
			case '-':
				this.setState({ ans: Number(vl1) - Number(this.state.vl2) });
				break;
			case '*':
			this.setState({ ans: Number(vl1) * Number(this.state.vl2) });
				break;
			case '/':
			this.setState({ ans: Number(vl1) / Number(this.state.vl2) });
			break;	
		}
    console.log(">>",this.state.ans);
  };
  render() {
    return (
      <div>
        <button
          onClick={e => {
						this.setState({operation: '+'})
            this.props.callbackFun(1);
          }}
        >
          +
        </button>
        <button
          onClick={e => {
						this.setState({operation: '-'})
            this.props.callbackFun(1);
          }}
        >
          -
        </button>
				<button
				 onClick={e => {
						this.setState({operation: '*'})
            this.props.callbackFun(1);
          }}>*</button>
        <button 
				 onClick={e => {
					this.setState({operation: '*'})
					this.props.callbackFun(1);
				}}>/</button>
        <button onClick={() => this.perOperation(this.state.operation)}>=</button>
			<>Ans : {this.state.ans}</>
			</div>
    );
  }
}

export default Calc_Nums;
