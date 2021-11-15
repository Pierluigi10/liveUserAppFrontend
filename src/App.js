import "./App.scss";
import { useState, useEffect } from "react";
import { GrEdit } from "react-icons/gr";
import { RiDeleteBin6Line } from "react-icons/ri";
const backendUrl = "http://localhost:3022";

function App() {
  const [users, setUsers] = useState([]);

  // useEffect(() => {
  //   setUsers([
  //     {
  //       name: "nnn1",
  //     },
  //     {
  //       name: "nnn2",
  //     },
  //   ]);
  // }, []);

  useEffect(() => {
    (async () => {
      const response = await fetch(backendUrl);
      const data = await response.json();
      setUsers(data);
    })();
  }, []);

  return (
    <div className="App">
      <h1>User Management APP</h1>
      <div className="topRow">
        <button>Add User</button>
      </div>
      <section className="users">
        {users.map((user, index) => {
          return (
            <div key={index} className="userCard">
              <div className="row">
                <div className="label">Full Name:</div>
                <div className="data">{user.name}</div>
              </div>
              <div className="row">
                <div className="label">User Name:</div>
                <div className="data">{user.username}</div>
              </div>
              <div className="row">
                <div className="label">E-Mail:</div>
                <div className="data">{user.email}</div>
              </div>
              <div className="iconRow">
                <button className="icon">
                  <RiDeleteBin6Line />
                </button>
                <button className="icon">
                  <GrEdit />
                </button>
              </div>
            </div>
          );
        })}
      </section>
    </div>
  );
}

export default App;
