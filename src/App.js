import "./App.css";
import { useState, useEffect } from "react";

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
            </div>
          );
        })}
      </section>
    </div>
  );
}

export default App;
