import AddUser from "./components/Users/AddUser";
import UsersList from "./components/Users/UsersList";
import { useState } from "react";

const USERS=[];

function App() {
  const [users,setUsers]=useState(USERS);

  const addUserHandler=(data)=>{
    setUsers(p=>[...p,data])
  }

  return (
    <div>
      <AddUser onAddUser={addUserHandler}/>
      <UsersList users={users}/>
    </div>
  );
}

export default App;
