import react from "react"
import "./LButton.css"

export default function LButton(props) {
    return (
        <a href={props.href} className="button">
            <span className="button-text">
                <span>{props.children}</span>
            </span>
            <img
                src="/external/arrow-right.svg"
                className="button-arrow"
            />
        </a>
    )
}