import React from 'react'

import { Helmet } from 'react-helmet'

import './marcas.css'
import Navbar from '../components/Navbar'
import CardMarca from '../components/CardMarca'

const Marcas = (props) => {
  return (
    <div className="marcas-container">
      <Helmet>
        <title>BikeTop - Marcas</title>
      </Helmet>
      <div className="marcas-marcas">
        <Navbar />
        <div className="marcas-marcas-container">
          <div className="marcas-marcas-lista">

            <CardMarca
              img="/external/absolute.png"
              title="ABSOLUTE"
            />
            <CardMarca
              img="/external/vikingx.png"
              title="VIKING-X"
            />
            <CardMarca
              img="/external/wendy.png"
              title="Wendy"
            />

          </div>
        </div>
      </div>
    </div>
  )
}

export default Marcas
