import react from "react";
import "./CardBike.css"

export default function CardBike(Props) {
    return (
        <a href="/orcamento" className="catalogo-card">
            <img
                src={Props.img}
                // src="/external/imgi2001-dmn-300h.png"
                alt="Bike"
                className="catalogo-card-img"
            />
            <div className="catalogo-card-content">
                <span className="catalogo-card-title">
                    <span>{Props.title}</span>
                </span>
                <span className="catalogo-card-subtitle">
                    <span>{Props.subtitle}</span>
                </span>
            </div>
        </a>
    )
}