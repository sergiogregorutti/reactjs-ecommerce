import React, {useState, useEffect} from 'react';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://reqres.in/api/users")
    .then(res => {
      return res.json();
    })
    .then(json => {
      console.log('json', json);
      setUsers(json.data);
    });
  }, []);

  return (
    <div className="container">
      <NavBar />
      <ItemListContainer greeting={'Bienvenidos'} />

      <h2>Usuarios</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <img src={user.avatar} />
            <h4>{`${user.first_name} ${user.last_name}`}</h4>
            <p>{user.email}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
