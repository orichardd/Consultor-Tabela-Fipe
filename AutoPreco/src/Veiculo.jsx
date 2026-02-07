import { Vehicle } from "./components/VehicleBlock"
import { Header } from "./components/Header"
import { useParams } from "react-router"
import { useState, useEffect } from "react"
import axios from "axios"

import './Veiculo.css'

export function VeiculoFinal() {
    const { vehicleType, brandCode, modelCode, yearCode } = useParams();
    const [model, setModel] = useState([]);


    useEffect(() => {
        axios.get(`http://localhost:1670/api/${vehicleType}/brands/${brandCode}/models/${modelCode}/years/${yearCode}`)
            .then(response => {
                setModel(response.data);
                console.log(response.data);
            })
            .catch(error => {
                console.error("Error fetching models:", error);
            });
    }, [vehicleType, brandCode, modelCode, yearCode]);
    return (
        <>  
            <Header />
            <div className="finalCarContent">
                <Vehicle
                name={model.Modelo}
                brand={model.Marca}
                year={model.AnoModelo}
                fuel={model.Combustivel}
                price={model.Valor}
                imageLink={`https://tse1.mm.bing.net/th?q=${model.Marca}+${model.Modelo}+${model.AnoModelo}+a&h=200w=300`}
                fipeCode={model.CodigoFipe}
            />
            </div>
        </>
    )
}