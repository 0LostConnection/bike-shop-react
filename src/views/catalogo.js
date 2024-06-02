import React from 'react'
import Navbar from '../components/Navbar'
import { Helmet } from 'react-helmet'

import './catalogo.css'
import CardBike from '../components/CardBike'

const Catalogo = (props) => {
  return (
    <div className="catalogo-container">
      <Helmet>
        <title>BikeTop - Catálogo</title>
      </Helmet>
      <div className="catalogo-catalogo">
        <Navbar />
        <div className="catalogo-catalogo-container">
          <div className="catalogo-catalogo-lista">

            <CardBike
              img="/external/bike1.png"
              title="Bicileta 700 ABSOLUTE All Road Hibrida"
              subtitle="ABSOLUTE"
            />
            <CardBike
              img="/external/bike2.png"
              title="Bicileta 29 ABSOLUTE Prime"
              subtitle="ABSOLUTE"
            />
            <CardBike
              img="/external/bike3.png"
              title="Bicicleta 16 Aço Feminino Wendy"
              subtitle="Wendy"
            />
            <CardBike
              img="/external/bike4.png"
              title="Bicileta 29 ABSOLUTE Mia 3 Elite"
              subtitle="ABSOLUTE"
            />
            <CardBike
              img="/external/bike5.png"
              title="Bicicleta VIKING-X Tuff"
              subtitle="VIKING-X"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Catalogo
