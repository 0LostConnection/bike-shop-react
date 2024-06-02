import react from "react";
import "./CardMarca.css"

export default function CardBike(Props) {
    return (
        <a href="/catalogo" className="card">
            <img
                src={Props.img}
                // src="/external/imgi2001-dmn-300h.png"
                alt="Bike"
                className="card-img"
            />
            <div className="card-content">
                <span className="card-title">
                    <span>{Props.title}</span>
                </span>
            </div>
        </a>
    )
}