import { Link } from 'react-router-dom';

export default function Navbar() {
    return (
        <nav>
            <Link to="/">Root Page</Link>
            <Link to="/new">New Page</Link>
        </nav>
    );
}
