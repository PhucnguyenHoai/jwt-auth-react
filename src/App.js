import logo from './logo.svg';
import './App.css';
import Routes from './component/route';
import { setAuthToken } from './component/setAuthen';

function App() {
  const token = localStorage.getItem("token");
  if (token) {
    setAuthToken(token);
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Routes />
      </header>
    </div>
  );
}

export default App;
