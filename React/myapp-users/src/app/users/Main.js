import React from "react"
import {UserList} from "./UserList"

export const Main = (props) => {

    return (
        <div className="container">
            <div className="row">
                <UserList />
            </div>
        </div>
    )
}