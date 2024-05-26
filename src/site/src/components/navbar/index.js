 // for routing check out https://hygraph.com/blog/routing-in-react
import "./index.css"
export default function NavBar() {
  return(
  <nav className="nav"> 
    <a href="/" className="nav-title">
      Red River Ice
    </a>
    <ul>
      <li className="active">
        <a href="#">Home</a>
      </li>
      <li>
        <a href="#">FAQ</a>
      </li>
      <li>
        <a href="#">Contact</a>
      </li>
    </ul>
  </nav>  
)};
