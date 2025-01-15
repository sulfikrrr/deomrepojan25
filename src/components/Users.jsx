import { useEffect } from "react";
import { useState } from "react";

function Users()

{
    const [users,setUsers]=useState([]);
    useEffect(()=>
    {
     //api call
     fetch("https://jsonplaceholder.typicode.com/users")
     .then(res=>res.json())//convert to readable
     .then(data=>setUsers(data))//use the data from response
     },[])

     return(
     <>
     <h1>User List</h1>
        {/* <ul>
            {users.map((user)=><li>{user.name}</li>)}
        </ul> */}
        <table border="1px">
            <tr tabIndex ><th>Name</th><th>email</th><th>Phone</th></tr>
            {users.map((user)=><tr><td>{user.name}</td><td>{user.email}</td><td>{user.phone}</td></tr>)}
        </table>
     </>
     ) 
}
export default Users;