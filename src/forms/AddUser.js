import React, { Component } from "react";
import posed from "react-pose";
import UserConsumer from "../context";
import axios from "axios";
const Animation = posed.div({
  visible: {
    opacity: 1,
    applyAtStart: {
      display: "block",
    },
  },
  hidden: {
    opacity: 0,
    applyAtEnd: {
      display: "none",
    },
  },
});

class AddUser extends Component {
  state = {
    visible: true,
    error:false
  };
  changevisible = (e) => {
    this.setState({
      visible: !this.state.visible,
    });
  };
  change = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  validateForm = () => {
    const { name, Depertmants, Salary } = this.state;
    
    if(name===undefined || Salary===undefined || Depertmants===undefined){
      return false;
    }
    return true;
  };

  AddUser = async (dispatch, e) => {
    e.preventDefault(); // Yeniden refresh edilmesini sayfanın engeller
    const { name, Depertmants, Salary } = this.state;
    const newUser = {
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
    const response = await axios.post("http://localhost:3000/users",newUser); 
    dispatch({ type: "Add_User", payload: response.data });
    // redirect 
    this.props.history.push("/");
  };
  render() {
    const { error,name, Depertmants, Salary, visible } = this.state;
    return (
      <UserConsumer>
        {(value) => {
          const { dispatch } = value;
          return (
            <div className="col-md-12 mb-4">
              <button
                onClick={this.changevisible}
                className="btn btn-block  btn-dark mb-2"
                type="button"
              >
                {visible ? "Hide Form " : "Show Form "}
                <i className=" fa fa-registered"></i>
              </button>
              <Animation pose={visible ? "visible" : "hidden"}>
                <div className="card">
                  <div className="card-header">
                    <h4>Add User Form  <i className="fa fa-plus"></i> </h4>
                  </div>
                  <div className="card-body">
                    {
                      error ?
                      <div className="alert alert-danger">Lutfen bilgilerinizi boş bırakmayın !</div>
                      :null
                    }
                    <form onSubmit={this.AddUser.bind(this, dispatch)}>
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
                        <i className=" fa fa-plus"></i> Add User
                      </button>
                    </form>
                  </div>
                </div>
              </Animation>
            </div>
          );
        }}
      </UserConsumer>
    );
  }
}
export default AddUser;
