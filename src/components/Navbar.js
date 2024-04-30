import brand from '../images/brand.png';
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <img className='brand-img' src={brand} alt="brand"></img> 
      <h3 className="nav-brand">Xavier</h3>

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
          <a href="#about">Home</a>
        </li>
        <li className="nav-item">
          <a href="#contact">Contact</a>
        </li>
        <li className="nav-item">Resume</li>
      </ul>
    </nav>
  );
};

export default Navbar;
