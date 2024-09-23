import { Link } from "react-router-dom";

export default function Header(){
    return (
    <nav className="nav-links">
        <div>Mennatallah Ahmed</div>
        <div style={{display:"flex", gap:"20px"}}>
            <Link to={'/projects'}>Projects</Link>
            <Link to={'/'}>About</Link>
            <Link to={'/contact'}>Contact</Link>
        </div>
    </nav>
    )
}