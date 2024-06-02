import React from 'react'

import { Helmet } from 'react-helmet'

import './landing.css'
import Navbar from '../components/Navbar'
import LButton from '../components/LButton'

const Landing = (props) => {
  return (
    <div className="landing-container">
      <Helmet>
        <title>BikeTop - Home</title>
      </Helmet>
      <div className="landing-landing">

        <Navbar />

        <div className="landing-hero">
          <div className="landing-hero-container">
            <img
              src="/external/heroimage2001-p5m-600h.png"
              alt="HeroImage2001"
              className="landing-hero-image"
            />
            <div className="landing-hero-column">
              <div className="landing-hero-text">
                <span className="landing-text12">
                  <span>BikeTop</span>
                </span>
                <span className="landing-text14">
                  <span>A melhor loja de bicicleta de Brasília!</span>
                </span>
              </div>
              <div className="landing-hero-buttons">
                <LButton href="/catalogo">Conferir Catálogo</LButton>
                <LButton href="/orcamento">Faça seu Orçamento</LButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Landing
