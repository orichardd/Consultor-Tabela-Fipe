import { Header } from "./components/Header";
import { BrandButton } from "./components/BrandButton";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import axios from "axios";

import './BrandsPage.css'

export function BrandsPage() {
    const [brands, setBrands] = useState([]);
    const { vehicleType } = useParams();

    const json = `[
  {
    "codigo": "1",
    "nome": "Acura"
  },
  {
    "codigo": "2",
    "nome": "Agrale"
  },
  {
    "codigo": "3",
    "nome": "Alfa Romeo"
  },
  {
    "codigo": "4",
    "nome": "AM Gen"
  },
  {
    "codigo": "5",
    "nome": "Asia Motors"
  },
  {
    "codigo": "189",
    "nome": "ASTON MARTIN"
  },
  {
    "codigo": "6",
    "nome": "Audi"
  },
  {
    "codigo": "207",
    "nome": "Baby"
  },
  {
    "codigo": "7",
    "nome": "BMW"
  },
  {
    "codigo": "8",
    "nome": "BRM"
  },
  {
    "codigo": "123",
    "nome": "Bugre"
}]`

    /*
    useEffect(() => {
        axios.get(`https://parallelum.com.br/fipe/api/v1/carros/marcas`)
            .then(response => {
                setBrands(response.data);
            })
            .catch(error => {
                console.error("Error fetching brands:", error);
            }); 
    }, [vehicleType]); */

    return (
        <>
            <Header />
            <div className="brandsOut">

                <div className="brandsContainer">
                    <div className="escolhaFabricante">
                        <h1>Escolha a Fabricante</h1>
                    </div>
                    {JSON.parse(json).map((brand) => (
                        <BrandButton
                            brandName={brand.nome}
                            brandCode={brand.codigo}
                            vehicleKind="carros"
                            imgLink={"https://upload.wikimedia.org/wikipedia/commons/3/3e/Ford_logo_flat.svg"}
                        />
                    ))}
                </div>
            </div>
        </>
    )
}