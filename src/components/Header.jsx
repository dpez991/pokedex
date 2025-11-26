import { Link } from "react-router";
export const Header = ( { title = "Pokedex 2025 Tercero" } )=>{
    return (
        <header>
            <h1>{title}</h1>
            <nav>
                <ul>
                    <li><Link to="/">Inicio</Link></li>
                    <li><Link to="/about">Acerca de Nosotros</Link></li>
                </ul>
            </nav>
        </header>
    );
}