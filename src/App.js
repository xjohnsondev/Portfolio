import Heading from './components/Heading';
import Introduction from './components/Introduction';
import TechStack from './components/TechStack';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import './App.css';

function App() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});
  return (
    <div className="App">
      <Navbar/>
      <Heading/>
      <Introduction/>
      <TechStack/>
      <Projects/>
    </div>
  );
}

export default App;
