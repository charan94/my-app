import logo from './logo.svg';
import './App.css';
import PersonalInfo from './components/personalInfo';
import UsersList from './components/usersList';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getUsersAction } from './actions/personal-info.actions';

function App() {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsersAction());
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        {/* <p>
          Edit <code>src/App.js</code> and save to reload.
        </p> */}
        <UsersList />
        <PersonalInfo />
      </header>
    </div>
  );
}

export default App;
