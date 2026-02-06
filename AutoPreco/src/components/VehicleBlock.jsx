import './VehicleBlock.css'

export function Vehicle({name, year, price, imageLink, brand, fuel}){
    return(
        <div className="vehicleBlock">
            <div className="vehicleImageContainer">
                <img src={imageLink} alt={name} className="vehicle-image"/>
            </div>
            <div className="vehicleInfo">
                <h2>{brand} {name}</h2>
                <h3>Ano: {year}</h3>
                <h3>Combustível: {fuel}</h3>
            </div>
            <div className="vehiclePrice">
                <h2>R$ {price}</h2>
            </div>
        </div>
    )
}