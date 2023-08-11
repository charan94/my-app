import logo from './logo.svg';
import './App.css';
import PersonalInfo from './components/personalInfo';
import UsersList from './components/usersList';

function App() {
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
