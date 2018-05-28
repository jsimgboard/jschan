import React, { Component } from "react";
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const mapStateToProps = store => {
  return {bans:store.banReducer.bans};
};

const mapDispatchToProps = dispatch => ({
  fetchBans: ()=> dispatch({type: 'BANS_REQUESTED', payload: null})
});

class ModPage extends Component{

  constructor(props){
    super(props);
  }

  componentDidMount(){
    this.props.fetchBans();
  }
  
  render(){
    return (
      <div>
        <h2>A mod page</h2>
        <Link to="/">Go home</Link>
        {this.props.bans.map(ban => (<div>Ban: /{ban}{'\n'}</div>))}
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ModPage);
