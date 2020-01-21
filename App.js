import React ,{Component} from 'react';
import {connect} from 'react-redux';

class App extends Component {

    render(){
      return (
        <div>
        <div>
        <span>{this.props.num}</span>
        <button onClick={this.props.onAdd}>Add</button>
        <button onClick={this.props.onReduce}>Reduce</button>
        </div>
        </div>
      );
    }
}

const mapStateToProps=(state)=>{
  return{
    num:state.num
  }
}

const mapDispatchToProps =dispatch=>{
  return{
    onAdd:()=>dispatch({type:"Add"}),
    onReduce:()=>dispatch({type:"Reduce"})
  }
}

export default connect(  
  mapStateToProps,
  mapDispatchToProps
  )(App);
