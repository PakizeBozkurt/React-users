import React, { useEffect, useState } from "react";

function Users() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3005/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  console.log(users);
  return (
    <div>
      <table>
        <thead>
          <tr>
            <td>Id</td>
            <td>Name</td>
            <td>Email</td>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Users;
