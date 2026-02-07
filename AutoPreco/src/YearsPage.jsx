import { useParams } from 'react-router'
import { useState, useEffect } from 'react'
import { Header } from './components/Header'
import { ModelButton } from './components/ModelButton'
import axios from 'axios'


export function YearsPage() {
    const { vehicleType, brandCode, modelCode } = useParams();
    const [years, setYears] = useState([]);


    useEffect(() => {
        axios.get(`http://localhost:1670/api/${vehicleType}/brands/${brandCode}/models/${modelCode}/years`)
            .then(response => {
                setYears(response.data);
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
                        <h1>Escolha o ano</h1>
                    </div>
                    <div className="modelsContainer">
                        {years.map((year) => (
                            <ModelButton
                                modelName={year.nome}
                                modelCode={year.codigo}
                                vehicleKind={vehicleType}
                                brandCode={brandCode}
                                linkTo={`/consultar/${vehicleType}/${brandCode}/modelos/${modelCode}/anos/${year.codigo}`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}