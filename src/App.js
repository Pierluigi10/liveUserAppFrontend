import "./App.css";
import { useState, useEffect } from "react";

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    setUsers([
      {
        name: "nnn1",
      },
      {
        name: "nnn2",
      },
    ]);
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
