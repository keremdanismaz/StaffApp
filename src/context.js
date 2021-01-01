import React, { Component } from "react";
import axios from "axios";

const UserContext = React.createContext();
//provider , consiver;
const reducer = (state, action) => {
  switch (action.type) {
    case "Delete_User":
      return {
        ...state,
        users: state.users.filter((user) => action.payload !== user.id),
      };
    case "Add_User":
      return {
        ...state,
        users: [...state.users, action.payload],
      };
    case "Uptade_User":
      return {
        ...state,
        users: state.users.map(user=>user.id === action.payload.id ? action.payload : user)
      };
    default:
      return state;
  }
};

export class UserProvider extends Component {
  state = {
    users: [],
    dispatch: (action) => {
      this.setState((state) => reducer(state, action));
    },
  };
  componentDidMount = async () => {
    const response = await axios.get("http://localhost:3000/users");
    this.setState({
      users: response.data,
    });
  };

  render() {
    return (
      <UserContext.Provider value={this.state}>
        {this.props.children}
      </UserContext.Provider>
    );
  }
}
const UserConsiver = UserContext.Consumer;

export default UserConsiver;
