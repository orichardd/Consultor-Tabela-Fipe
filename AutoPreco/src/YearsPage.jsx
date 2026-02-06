import { useParams } from 'react-router'
import { useState, useEffect } from 'react'
import { Header } from './components/Header'
import { ModelButton } from './components/ModelButton'
import axios from 'axios'


export function YearsPage() {
    const { vehicleType, brandCode, modelCode } = useParams();

    const json = `
[
  {
    "codigo": "1995-1",
    "nome": "1995 Gasolina"
  },
  {
    "codigo": "1994-1",
    "nome": "1994 Gasolina"
  },
  {
    "codigo": "1993-1",
    "nome": "1993 Gasolina"
  }
]
`
    const parsed = JSON.parse(json);
    return (
        <>
            <Header />
            <div>
                <div className="modelsOut">
                    <div className="escolhaModelo">
                        <h1>Escolha o ano</h1>
                    </div>
                    <div className="modelsContainer">
                        {parsed.map((year) => (
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