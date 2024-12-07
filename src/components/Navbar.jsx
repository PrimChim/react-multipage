import { Link } from 'react-router-dom';
import bloggerLogo from '../assets/images/blogger.webp';

export default function Navbar() {
    return (
        <nav>
            <Link
                style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "1.3rem",
                }}
                to="/"
            >
                <img
                    src={bloggerLogo}
                    alt="Blogger logo"
                    style={{ height: "35px", marginRight: "10px" }}
                />
                Blogger
            </Link>
            <div>
                {/* <Link to="/new">New</Link>
                <Link to="/blogs">Blogs</Link> */}
                <Link to="">SIGN IN</Link>
            </div>
        </nav>
    );
}
