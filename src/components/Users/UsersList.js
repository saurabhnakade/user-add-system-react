import React from 'react'
import Card from '../UI/Card'
import classes from './UsersList.module.css'

const UsersList = (props) => {
  return (
    <Card className={classes.users}>
        <ul>
            {props.users.map(u=>{
                return <Card>
                  <li key={u.key}>{u.username} {u.age} years old</li>
                </Card>
                
            })}
        </ul>
    </Card>
  )
}

export default UsersList