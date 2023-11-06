import React, { useState } from 'react';
 
function App() {
  const [email, setEmail] = useState('abc@123gmail.com');
  const [password, setPassword] = useState('hashed_passwordpasswordddpassworddd');
  const [userData, setUserData] = useState(null);
 
  const handleSignIn = () => {
    const data = { email, password };
 
    fetch('http://ircnv.id.vn:8080/v1/api/authen/signin', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        setUserData(data.user);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };
 
  console.log(userData)
 
  return (
    <div>
      <div>
        <label>Email:</label>
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div>
        <label>Password:</label>
        <input
          type="text"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button onClick={handleSignIn}>Sign In</button>
      {userData && (
        <div>
          <p>User ID: {userData.userid}</p>
          <p>Full Name: {userData.fullname}</p>
          <p>Email: {userData.email}</p>
          <p>Role: {userData.role}</p>
          <p>Token: {userData.token}</p>
        </div>
      )}
    </div>
  );
}
 
export default App;