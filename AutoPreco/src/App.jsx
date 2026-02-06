import { Routes, Route } from 'react-router'
import { HomePage } from './HomePage.jsx'
import { Contato } from './ContatoPage.jsx'
import { SobrePage } from './SobrePage.jsx'
import { ConsultPage } from './ConsultPage.jsx'
import { BrandsPage } from './BrandsPage.jsx'
import { ModelsPage } from './ModelsPage.jsx'
import { YearsPage } from './YearsPage.jsx'
import { VeiculoFinal } from './Veiculo.jsx'
import './App.css'

function App() {

  return (
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/contato' element={<Contato />} />
      <Route path='/sobre' element={<SobrePage />} />
      <Route path='/consultar' element={<ConsultPage />} />
      <Route path='/consultar/:vehicleType' element={<BrandsPage />} />
      <Route path='/consultar/:vehicleType/:brandCode/modelos' element={<ModelsPage />} />
      <Route path='/consultar/:vehicleType/:brandCode/modelos/:modelCode/anos' element={<YearsPage />} />
      <Route path='/consultar/:vehicleType/:brandCode/modelos/:modelCode/anos/:yearCode' element={<VeiculoFinal />} />
      <Route path='*' element={<h1>404 - Página Não Encontrada</h1>} />
    </Routes>
  )
}

export default App
