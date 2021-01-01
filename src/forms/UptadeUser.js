import React, { Component } from "react";
import UserConsumer from "../context";
import axios from "axios";
class UptadeUser extends Component {
  state = { 
    error:false
  };
  change = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  validateForm = () => {
    const { name, Depertmants, Salary } = this.state;
    debugger;
    if(name==="" || Salary==="" || Depertmants===""){
      return false;
    }
    return true;
  };

  componentDidMount= async ()=> {
      const {id} =this.props.match.params;
      const response = await axios.get(`http://localhost:3000/users/${id}`)
      const {name ,Depertmants,Salary}= response.data;
      this.setState({
          name,
          Salary,
          Depertmants
      });
  }
  
  UptadeUser = async (dispatch, e) => {
    e.preventDefault(); // Yeniden refresh edilmesini sayfanın engeller
    // Uptade User
    const { name, Depertmants, Salary } = this.state;
    const {id} =this.props.match.params;
    const UptadeUser = {
        name,
        Salary,
        Depertmants,
      };
      if(!this.validateForm()){
        this.setState({
            error: true
        });
        return;
      }
    const response = await axios.put(`http://localhost:3000/users/${id}`,UptadeUser);
    dispatch({ type: "Uptade_User", payload: response.data });
    this.props.history.push("/");
  };
  
  render() {
    const { name, Depertmants, Salary ,error} = this.state;
    return (
      <UserConsumer>
        {(value) => {
          const { dispatch } = value;
          return (
            <div className="col-md-12 mb-4">
                <div className="card">
                  <div className="card-header">
                    <h4>Uptade User Form <i className="fa fa-edit"></i> </h4>
                  </div>
                  <div className="card-body">
                    {
                      error ?
                      <div className="alert alert-danger">Lutfen bilgilerinizi boş bırakmayın !</div>
                      :null
                    }
                    <form onSubmit={this.UptadeUser.bind(this, dispatch)}>
                      <div className="form-group">
                        <label htmlFor="name">
                          Full Name <i className=" fa fa-registered"></i>
                        </label>
                        <input
                          type="text"
                          name="name"
                          placeholder="Enter Name"
                          id="id"
                          className="form-control"
                          value={name}
                          onChange={this.change}
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="Depertmants">
                          Depertmants <i className=" fa fa-user-md"></i>{" "}
                        </label>
                        <input
                          type="text"
                          name="Depertmants"
                          placeholder="Enter Department"
                          id="Depertmants"
                          className="form-control"
                          value={Depertmants}
                          onChange={this.change}
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="Salary">
                          Salary <i className=" fa fa-money"></i>
                        </label>
                        <input
                          type="text"
                          name="Salary"
                          placeholder="Enter Salary"
                          id="Salary"
                          className="form-control"
                          value={Salary}
                          onChange={this.change}
                        />
                      </div>
                      <button
                        type="submit"
                        className="btn  btn-block"
                        style={{ color: "white", backgroundColor: "#292b2c" }}
                      >
                        <i className=" fa fa-edit"></i> Upatde User
                      </button>
                    </form>
                  </div>
                </div>
            </div>
          );
        }}
      </UserConsumer>
    );
  }
}
export default UptadeUser;
