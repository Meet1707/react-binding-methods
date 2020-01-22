
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