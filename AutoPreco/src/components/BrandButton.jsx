import { Link } from "react-router"
import './BrandButton.css'

export function BrandButton({imgLink, brandName, vehicleKind, brandCode}) {
    return (
        <Link to={`/consultar/${vehicleKind}/${brandCode}/modelos`} className="brandButton">
            <div className="brandContent">
                {/*<img src={imgLink} alt={brandName} />*/}
                <h1>{brandName}</h1>

            </div>
        </Link>
    )
}