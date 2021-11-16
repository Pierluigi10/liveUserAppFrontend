import "./App.scss";
import { useState, useEffect } from "react";
import { GrEdit } from "react-icons/gr";
import { RiDeleteBin6Line } from "react-icons/ri";

function App() {
  const [users, setUsers] = useState([]);

  const backendUrl = "http://localhost:3022";
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

  const loadUsers = async () => {
    const response = await fetch(backendUrl);
    const users = await response.json();
    setUsers(users);
  };

  useEffect(() => {
    loadUsers();
  }, []);

  const handleDeleteButton = async (user) => {
    await fetch(`${backendUrl}/deleteuser/${user._id}`, { method: "DELETE" });
    loadUsers();
  };

  const handleEmailChange = (user, e) => {
		user.email = e.target.value;
		setUsers([...users]);
	}

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
                {!user.isEditingEmail ? (
                  <div className="data">{user.email}</div>
                ) : (
                  <div className="data editing">
                    <input
                      type="text"
                      onChange={(e) => handleEmailChange(user, e)}
                      value={user.email}
                    />
                    <button onClick={() => handleEmailSave(user)}>Save</button>
                    <button onClick={() => handleEditCancelButton(user)}>
                      Cancel
                    </button>
                  </div>
                )}
              </div>
              <div className="iconRow">
                <button
                  onClick={() => handleDeleteButton(user)}
                  className="icon"
                >
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
