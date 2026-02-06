import { Link } from "react-router"
import './ModelButton.css'

export function ModelButton({modelName, vehicleKind, brandCode, modelCode, linkTo}) {
    return (
        <Link to={linkTo} className="modelButton">
            <div className="modelContent">
                <h1>{modelName}</h1>
            </div>
        </Link>
    )
}