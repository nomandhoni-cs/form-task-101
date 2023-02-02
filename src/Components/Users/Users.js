import React from 'react'
import { selectors } from '../../SeletorsData';
const Users = ({users,setUsers}) => {
  // Calling users from api
  React.useEffect(() => {
    fetch("https://form-backend.vercel.app/users")
      .then((res) => res.json())
      .then((data) => {
        setUsers(data);
      });
  }, [setUsers]);
  return (
    <>
    <h1>Users List</h1>
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Sector</th>
        </tr>
      </thead>
      <tbody>
        {/* Users list and finding sector name from selectors */}
        {users.map((user) => (
          <tr key={user.id}>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>
              {selectors.find((selector) =>(user.sector===selector.value)).text}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
    </>
  )
}

export default Users