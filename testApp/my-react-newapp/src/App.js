import logo from './logo.svg';
import './App.css';
import Greet from './components/Greets';
import Welcome from './components/Welcome';

function App() {
  return (
    <div className="App">
      <Greet></Greet>
      <Welcome />
    </div>
  );
}

export default App;
