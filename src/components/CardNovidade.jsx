import react from "react";

import "./CardNovidade.css"

export default function CardNovidade(Props) {
    return (
        <div className="novidades-entry">
            <img
                src={Props.img}
                alt="Img2001"
                className="card-img"
            />
            <div className="card-content">
                <div className="card-name">
                    <span className="card-title">
                        <span>{Props.title}</span>
                    </span>
                    <span className="card-subtitle">
                        <span>{Props.subtitle}</span>
                    </span>
                </div>
                <div className="card-description-area">
                    <span className="card-description">
                        <span>
                            {Props.children}
                        </span>
                    </span>
                </div>
            </div>
        </div>
    )
}