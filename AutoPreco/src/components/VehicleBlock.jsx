import './VehicleBlock.css'

export function Vehicle({name, year, price, imageLink, brand, fuel, fipeCode}){
    return(
        <div className="vehicleBlock">
            <div className="vehicleImageContainer">
                <div className="vehicleImageContainerContent">
                    <img src={imageLink} alt={name} className="vehicle-image"/>
                </div>
            </div>
            <div className="vehicleInfo">
                <h2>{brand} {name}</h2>
                <h3>Ano: {year}</h3>
                <h3>Combustível: {fuel}</h3>
                <h3>Código Fipe: {fipeCode}</h3>
            </div>
            <div className="vehiclePrice">
                <h2>{price}</h2>
            </div>
        </div>
    )
}