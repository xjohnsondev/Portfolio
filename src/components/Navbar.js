import brand from '../images/brand.png';
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">

      <div className='nav-title'>
        <a href='#about'><img className='brand-img' src={brand} alt="brand"></img> </a>
        <h3 className="nav-brand">Xavier</h3>
      </div>
      <ul className="nav-link-list">
        <li className="nav-link">
          <a
            href="https://www.linkedin.com/in/xjohnsondev"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i class="devicon-linkedin-plain colored"></i>
          </a>
        </li>
        <li className="nav-link">
          <a
            href="https://github.com/xjohnsondev"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i class="devicon-github-original colored"></i>
          </a>
        </li>
      </ul>

      <ul className="nav-item-list">
        <li className="nav-item">
          <a href="#tech">Services</a>
        </li>
        <li className="nav-item">
          <a href="#projects">Projects</a>
        </li>
        <li className="nav-item">         
          <a href="https://docs.google.com/document/d/1uxqzWh3NppJESlX2Nps6BANgp6DvtP5HQnm05A7v8jk/edit?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          >Resume</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
