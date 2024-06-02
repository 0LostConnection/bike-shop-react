import react from "react"
import "./Navbar.css"

export default function Navbar() {
    return (
        <div className="navbar">
            <a href="/" className="navbar-logo">
                <img
                    src="/external/logo.svg"
                    alt="VectorI2001"
                    className="navbar-logo-vector"
                />
                <span className="navbar-logo-text">
                    <span>BikeTop</span>
                </span>
            </a>
            <div className="navbar-links-group">
                <a href="/" className="navbar-link">
                    <span>Home</span>
                </a>
                <a href="/catalogo" className="navbar-link">
                    <span>Catálogo</span>
                </a>
                <a href="/marcas" className="navbar-link">
                    <span>Marcas</span>
                </a>
                <a href="orcamento" className="navbar-link">
                    <span>Orçamento</span>
                </a>
                <a href="novidades" className="navbar-link">
                    <span>Novidades</span>
                </a>
            </div>
        </div>
    )
}