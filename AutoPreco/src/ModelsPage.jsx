import { Header } from "./components/Header";
import { Link } from "react-router";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { ModelButton } from "./components/ModelButton";
import axios from "axios";
import './ModelsPage.css'

export function ModelsPage() {
    const { vehicleType, brandCode, brandName, modelCode } = useParams();
    const [models, setModels] = useState([]);
    
        useEffect(() => {
            axios.get(`http://localhost:1670/api/${vehicleType}/brands/${brandCode}/models`)
                .then(response => {
                    setModels(response.data.modelos);
                })
                .catch(error => {
                    console.error("Error fetching models:", error);
                }); 
        }, [vehicleType, brandCode]);

    return (
        <>
            <Header />
            <div>
                <div className="modelsOut">
                    <div className="escolhaModelo">
                        <h1>Escolha o Modelo</h1>
                    </div>
                    <div className="modelsContainer">
                        {models.map((model) => (
                            <ModelButton
                                modelName={model.nome}
                                modelCode={model.codigo}
                                vehicleKind={vehicleType}
                                brandCode={brandCode}
                                linkTo={`/consultar/${vehicleType}/${brandCode}/modelos/${model.codigo}/anos`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}