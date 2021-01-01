import React, { Component } from "react";
// import PropTypes from 'prop-types';
import UserConsiner from "../context";
import axios from "axios";
import {Link} from "react-router-dom";
export default class users extends Component {
  state = {
    check: false,
  };
  // constructor(props){
  //     super(props);
  //     this.state={
  //        check : false
  //     }
  // }
  onclikEvent = (number, event) => {
    this.setState({
      check: !this.state.check,
    });
  };

  ondeleteuser = async (dispatch,e)=>{
    const {id} = this.props;
    // delete request
    await axios.delete(`http://localhost:3000/users/${id}`);
    //consumer dispatch
    dispatch({type:"Delete_User",payload:id});
  }

  render() {
    const { check } = this.state;
    const { id,name, Surname, Depertmants, Salary } = this.props;
    return (
      <UserConsiner>
        {
        value => {
          const { dispatch } = value;
          return (
            <div className="col-md-12 mb-4">
                <input type="hidden" value={id}/>
              <hr/>
              <div className="card" style= {check ? {backgroundColor:"#292b2c",color: "white"} : null }>
                <div className="card-header d-flex justify-content-between">
                  <h4 className="d-inline" onClick={this.onclikEvent} 
                  style= {check ? {color: "white",cursor: "pointer",fontSize:"22px",marginLeft:"5px"} : {cursor:"pointer",fontSize:"25px",marginLeft:"5px"}}>
                    {name}
                    {Surname}
                   
                  </h4>
                  <i onClick = {this.ondeleteuser.bind(this,dispatch)}
                    className="fa fa-trash"
                    style= {check ? {color: "white",cursor: "pointer",fontSize:"30px"} : {cursor:"pointer",fontSize:"30px"} }
                  ></i>
                </div>
                {check ? (
                  <div className="card-body">
                    <p className="card-text">Maaş: {Salary}</p>
                    <p className="card-text">Departman:{Depertmants}</p>
                    <Link style={{backgroundColor:"white",color:"black" , fontWeight:"bold"}} to ={`Edit/${id}`} className="btn btn-block">Uptade User</Link>
                  </div>
                ) : null}
              </div>
            </div>
          );
        }
    }
      </UserConsiner>
    );
  }
}
