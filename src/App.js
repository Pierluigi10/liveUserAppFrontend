import "./App.css";
import { useState, useEffect } from "react";

const backendUrl = 'http://localhost:3022';

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
        <ul>
          {users.map((user, index) => {
            return <li key={index}> {user.name}</li>;
          })}
        </ul>
      </section>
    </div>
  );
}

export default App;
