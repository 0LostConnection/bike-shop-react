import React from 'react'

import { Helmet } from 'react-helmet'
import Navbar from '../components/Navbar'

import './novidades.css'
import CardNovidade from '../components/CardNovidade'

const Novidades = (props) => {
  return (
    <div className="novidades-container">
      <Helmet>
        <title>BikeTop</title>
      </Helmet>
      <Navbar />

      <div className="novidades-novidades">
        <div className="novidades-novidades-container">
          <span className="novidades-text12">
            <span>Novidades - Novidades</span>
          </span>
          <div className="novidades-novidades-lista">

            <CardNovidade
              img="/external/bike5.png"
              title="Bicicleta VIKING-X Tuff"
              subtitle="VIKING-X"
            >
              Com um quadro de fibra de carbono Toray ultraleve e resistente, essa bicicleta é a combinação perfeita
              de força e agilidade. Ele conta com um suporte para freio a disco Post Mount e o cabeamento interno não só
              oferecem um visual futurista, mas também garantem aerodinâmica e um controle preciso em altas velocidades.
              E quando se trata de enfrentar terrenos acidentados, a suspensão Rock Shox Judy Silver RL de 100mm está pronta para o
              desafio, seu amortecimento eficiente e a trava no guidão, você pode alternar entre um passeio suave e uma pilotagem agressiva
              com apenas um movimento rápido.
            </CardNovidade>

            <CardNovidade
              img="/external/bike4.png"
              title="Bicileta 29 ABSOLUTE Mia 3 Elite"
              subtitle="ABSOLUTE"
            >
              O Kit Bicicleta 29 Absolute Mia Elite é a escolha perfeita para quem busca alta performance
              em trilhas e aventuras. Equipado com componentes de qualidade e tecnologia avançada, este kit proporciona
              uma experiência única de pedal
            </CardNovidade>
            <CardNovidade
              img="/external/bike3.png"
              title="Bicicleta 16 Aço Feminino WENDY"
              subtitle="Wendy"
            >
              Apresentamos a Bicicleta 16 Aço Feminino Wendy com Roda Lateral e Aro Alumínio Rosa, perfeita para suas pequenas 
              aventureiras. Esta bicicleta combina durabilidade, segurança e um design encantador, garantindo momentos inesquecíveis de 
              diversão ao ar livre.
              <br/><br/>
              A Bicicleta Wendy é ideal para crianças que estão aprendendo a pedalar. Com sua estrutura robusta e 
              componentes de alta qualidade, ela oferece a estabilidade necessária para que os pequenos ciclistas ganhem 
              confiança e aprimorem suas habilidades.
            </CardNovidade>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Novidades
