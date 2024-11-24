import { Link } from 'react-router-dom';

export default function Navbar() {
    return (
        <nav>
            <Link to="/">Root</Link>
            <Link to="/new">New</Link>
            <Link to="/blogs">Blogs</Link>
        </nav>
    );
}
