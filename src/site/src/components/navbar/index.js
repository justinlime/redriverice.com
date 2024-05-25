import "./index.css"
export default function NavBar() {
  return(
  <nav className="nav"> 
    <a href="/" className="nav-title">
      Red River Ice
    </a>
    <ul>
      <li className="active">
        <a href="/test1">Test1</a>
      </li>
      <li>
        <a href="/test2">Test2</a>
      </li>
    </ul>
  </nav>  
)};
