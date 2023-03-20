import AddUser from "./components/Users/AddUser";
import UsersList from "./components/Users/UsersList";
import { useState } from "react";

const USERS=[];

function App() {
  const [users,setUsers]=useState(USERS);

  const addUserHandler=(data)=>{
    setUsers(p=>[...p,data])
  }

  const delUserHandler=(key)=>{
    const newA=users.filter(u=>u.key!=key);
    setUsers([...newA]);
  }

  return (
    <div>
      <AddUser onAddUser={addUserHandler}/>
      <UsersList onDelete={(key)=>delUserHandler(key)} users={users}/>
    </div>
  );
}

export default App;
