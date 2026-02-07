import { Header } from "./components/Header";
import { BrandButton } from "./components/BrandButton";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import axios from "axios";

import './BrandsPage.css'

export function BrandsPage() {
    const [brands, setBrands] = useState([]);
    const { vehicleType } = useParams();

    useEffect(() => {
        axios.get(`http://localhost:1670/api/${vehicleType}/brands`)
            .then(response => {
                setBrands(response.data);
            })
            .catch(error => {
                console.error("Error fetching brands:", error);
            });
    }, [vehicleType]);

    return (
        <>
            <Header />
            <div className="brandsOut">

                <div className="brandsContainer">
                    <div className="escolhaFabricante">
                        <h1>Escolha a Fabricante</h1>
                    </div>
                    {brands.map((brand) => (
                        console.log(brand.nome),
                        <BrandButton
                            brandName={brand.nome}
                            brandCode={brand.codigo}
                            vehicleKind={vehicleType}
                            imgLink={`https://logos-api.apistemic.com/domain:${brand.nome
                                .toLowerCase()
                                .replace(/\s/g, '')}.com`}

                        />
                    ))}
                </div>
            </div>
        </>
    )
}