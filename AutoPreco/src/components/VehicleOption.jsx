import { Link } from "react-router";
import './VehicleOption.css'

export function VehicleOption({ vehicleType, vehicleText, imageSource }) {
    return (
        <Link to={`/consultar/${vehicleType}`} className='consultButton'>
            <div className="optionImage">
                <img src={imageSource} alt={`${vehicleType}`} />
            </div>
            <h1>{vehicleText}</h1>

        </Link>
    )
}