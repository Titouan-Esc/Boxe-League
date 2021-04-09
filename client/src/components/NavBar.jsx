import { Link } from 'react-router-dom';


const NavBar = () => {
    return (
        <header>
            <nav>
                <Link to="/champions">Champions</Link>
                <Link to="/"><img src="./logo/logo.png" alt="Logo du site"/></Link>
                <Link to="/connect">Se connecter</Link>
            </nav>
        </header>
    )
}

export default NavBar
