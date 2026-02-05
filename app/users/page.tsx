// Next.js looks for conventions over configuration

import React from 'react'

interface User{
  id: number;
  name: string;
}

const UsersPage = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users")
// with this approach we dont ahave to use state variable, effect hook with zero dependencies, ther's no ceremony. 
// WE just fetch and get the data
// All of this happens under the server
const users:User[] = await res.json()
  return (
    <>
    <h1>Users</h1>
    <ul>
      {users.map(user => <li key={user.id}>{user.name}</li>)}
      {/* user => This user is a parameter name only. */}
    </ul>
    </>
  )
}

export default UsersPage

