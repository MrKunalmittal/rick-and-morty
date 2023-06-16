import { Link } from "react-router-dom";

function Header() {
    return (
        <header>
            <div className="container flex">
                <div className="title">
                    <h1>Rick<span>And</span>Morty</h1>
                </div>
                <nav>
                    <ul>
                        <li><Link to ="/">Home</Link></li>
                        <li><a href="#">Games</a></li>
                        <li><a href="#">Episodes</a></li>
                        <Link to="/add">
                            <input type="button" className="addBtn" value="Add character" />
                        </Link>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header