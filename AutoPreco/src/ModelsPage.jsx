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
    /*
        useEffect(() => {
            axios.get(`https://parallelum.com.br/fipe/api/v1/${vehicleType}/marcas/${brandCode}/modelos`)
                .then(response => {
                    setModels(response.data.modelos);
                })
                .catch(error => {
                    console.error("Error fetching models:", error);
                }); 
        }, [vehicleType, brandCode]);
    */

    const json = `
    
  {"modelos": [
    {
      "codigo": 43,
      "nome": "100 2.8 V6"
    },
    {
      "codigo": 44,
      "nome": "100 2.8 V6 Avant"
    },
    {
      "codigo": 45,
      "nome": "100 S-4 2.2 Avant Turbo"
    },
    {
      "codigo": 46,
      "nome": "80 2.0"
    },
    {
      "codigo": 47,
      "nome": "80 2.0 Avant"
    },
    {
      "codigo": 48,
      "nome": "80 2.6/ 2.8"
    },
    {
      "codigo": 49,
      "nome": "80 2.6/2.8 Avant"
    },
    {
      "codigo": 50,
      "nome": "80 2.8 Cabriolet"
    },
    {
      "codigo": 51,
      "nome": "80 S2 Avant"
    },
    {
      "codigo": 5496,
      "nome": "A1 1.4 TFSI 122cv S-tronic 3p"
    },
    {
      "codigo": 6293,
      "nome": "A1 2.0 TFSI Quattro 256cv 3p"
    },
    {
      "codigo": 6143,
      "nome": "A1 Sport 1.4 TFSI 185cv 3p S-tronic"
    },
    {
      "codigo": 7727,
      "nome": "A1 Sport. S Edition 1.4 TFSI 5p S-tronic"
    },
    {
      "codigo": 6201,
      "nome": "A1 Sportback 1.4 TFSI 185cv 5p S-tronic"
    },
    {
      "codigo": 6200,
      "nome": "A1 Sportback 1.4 TFSI 5p S-tronic"
    },
    {
      "codigo": 7418,
      "nome": "A1 Sportback 1.8 TFSI 192cv 5p S-tronic"
    },
    {
      "codigo": 52,
      "nome": "A3 1.6 3p"
    },
    {
      "codigo": 53,
      "nome": "A3 1.6 3p Aut."
    },
    {
      "codigo": 54,
      "nome": "A3 1.6 5p"
    },
    {
      "codigo": 55,
      "nome": "A3 1.6 5p Aut."
    },
    {
      "codigo": 4154,
      "nome": "A3 1.6 8V 102cv 3p"
    },
    {
      "codigo": 56,
      "nome": "A3 1.8 3p"
    },
    {
      "codigo": 57,
      "nome": "A3 1.8 3p Aut."
    },
    {
      "codigo": 58,
      "nome": "A3 1.8 5p Aut."
    },
    {
      "codigo": 59,
      "nome": "A3 1.8 5p Mec."
    },
    {
      "codigo": 60,
      "nome": "A3 1.8 Turbo 180cv 3p Aut./ Tip."
    },
    {
      "codigo": 61,
      "nome": "A3 1.8 Turbo 180cv 3p Mec."
    },
    {
      "codigo": 62,
      "nome": "A3 1.8 Turbo 180cv 5p Aut./ Tip."
}]}
    `
    const parsed = JSON.parse(json);
    return (
        <>
            <Header />
            <div>
                <div className="modelsOut">
                    <div className="escolhaModelo">
                        <h1>Escolha o Modelo</h1>
                    </div>
                    <div className="modelsContainer">
                        {parsed.modelos.map((model) => (
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