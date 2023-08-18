import { useState } from 'react';
import './App.css';
import NewUserForm from './Components/NewUserForm';
import UserList from './Components/UsersList';
import Modal from './Components/Modal';
import { createPortal } from 'react-dom';

function App() {
  const [users, setUsers] = useState([]);
  const [modalFlg, setModalFlg] = useState(false);
  const [modalError, setModalError] = useState("");

  console.log(users);

  const setModalErrorHandler = (text) => {
    setModalError(text);
  }

  const setUsersHandler = (el) => {
      setUsers((prev) => {
        return [...prev, el];
      });
  }

  const setModalFlgHandler = (state) => {
    setModalFlg(state);
  }

  const deleteElementHandler = (id) => {
    let newUsers = users.filter((el) => {
      return el.id.toString() !== id.toString();
    });
    setUsers(newUsers);
  }

  console.log(modalFlg);

  return (
    <>
        <NewUserForm newUser={setUsersHandler} setModalFlgHandler={setModalFlgHandler} setModalErrorHandler={setModalErrorHandler}/>
        <br></br>
        {users.length > 0 && <UserList users={users} deleteElementHandler={deleteElementHandler}/>}
        {createPortal(<Modal setModalFlgHandler={setModalFlgHandler} modalFlg={modalFlg} modalError={modalError}/>,document.getElementById("modal"))}
    </>
  );
}
export default App;
