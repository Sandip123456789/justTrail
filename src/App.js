import React, { useState } from 'react';
import Tweet from './Tweet';
import "./App.css";

function App() {

  const [users, setUsers] = useState([
    { name: "Sam", message: "Learning ReactJS." },
    { name: "Jack", message: "1m subs dude." },
    { name: "Max", message: "This is the random tweet." }
  ]);

  return (
    <div className="app">
      {users.map(user => (
        <Tweet name={user.name} message={user.message} />
      ))}
      {/* <Tweet name="Sam" message="This is the random tweet." />
      <Tweet name="Mosh" message="New course availabe." />
      <Tweet name="Jack" message="1m subs dude." />
      <Tweet name="Max" message="Learning ReactJS." /> */}
    </div>
  )
}

export default App;