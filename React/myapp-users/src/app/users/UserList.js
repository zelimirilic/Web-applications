import React from "react"
import { UserItem } from "./UserItem"

import { Grid } from "./Grid";



export const UserList =(props) =>{

    // const { users, listView } = props
 
    return (
        <ul className="collection" >
            {
                props.users.map((user, i) => {
                    return props.listView 
                        ? <UserItem user={user} key={i} /> 
                        : <Grid user={user} key={i} />
                })
            }
        </ul>
    )

}
 
                    
   
   

