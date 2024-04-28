import Heading from './components/Heading';
import Introduction from './components/Introduction';
import TechStack from './components/TechStack';
import Navbar from './components/Navbar';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Heading/>
      <Introduction/>
      <TechStack/>
    </div>
  );
}

export default App;
