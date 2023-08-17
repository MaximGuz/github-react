import { useState } from 'react';
import './App.css';
import NewUserForm from './Components/NewUserForm';
import UserList from './Components/UsersList';
import Modal from './Components/Modal';

function App() {
  const [users, setUsers] = useState([]);
  const [modalFlg, setModalFlg] = useState(false);

  console.log(users);

  const setUsersHandler = (el) => {
      setUsers((prev) => {
        return [...prev, el];
      });
  }

  const setModalFlgHandler = (state) => {
    setModalFlg(state);
  }

  console.log(modalFlg);

  return (
    <>
        <NewUserForm newUser={setUsersHandler} setModalFlgHandler={setModalFlgHandler}/>
        <br></br>
        {users.length > 0 && <UserList users={users}/>}
        <Modal setModalFlgHandler={setModalFlgHandler} modalFlg={modalFlg}/>
    </>
  );
}

export default App;
