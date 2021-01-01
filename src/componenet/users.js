import React, { Component } from 'react'
import User from "./user";
import UserConsiner from "../context";

class users extends Component {
    render() {

        return (
            <UserConsiner>
                {
                    value => {
                        const { users } = value;
                        return (
                            <div>
                                {
                                    users.map(user => {
                                        return (
                                            <User
                                                id={user.id}
                                                name={user.name}
                                                Surname={user.Surname}
                                                Depertmants={user.Depertmants}
                                                Salary={user.Salary}


                                            />
                                        )
                                    })
                                }

                            </div>
                        )
                    }
                }
            </UserConsiner>
        )
    }
}
export default users;