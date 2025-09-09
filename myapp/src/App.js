import Hello from'./components/Hello';
import World from './components/World';
import User from './components/User';
import Greet from './components/Greet';

function App() {
  return (
    <div className="App">
      <h1>Hello world</h1>
      <Hello/>
      <World/>
      <User/>
      <Greet/>
    </div>
  );
}

export default App;
