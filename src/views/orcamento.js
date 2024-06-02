import React from 'react'

import { Helmet } from 'react-helmet'
import Navbar from '../components/Navbar'

import './orcamento.css'

const Orcamento = (props) => {
  return (
    <div className="orcamento-container">
      <Helmet>
        <title>BikeTop - Orçamento</title>
      </Helmet>
      <div className="orcamento-orcamento">
        <Navbar />
        <div className="orcamento-orcamento1">
          <div className="orcamento-orcamento-box">
            <span className="orcamento-text12">
              <span>Faça o seu Orçamento</span>
            </span>
            <div className="orcamento-orcamento-field-area">
              <div className="orcamento-orcamento-field-area-group">

                <div className="orcamento-field">
                  <span className="form-title">
                    <span>Produto</span>
                  </span>
                  <select class="input" name="produto" id="produto">
                    <option disabled="null" selected="null">Selecione um produto</option>
                    <option>Bicileta 700 ABSOLUTE All Road Hibrida</option>
                    <option>Bicileta 29 ABSOLUTE Prime</option>
                    <option>Bicileta 29 ABSOLUTE Mia 3 Elite</option>
                    <option>Bicicleta VIKING-X Tuff</option>
                    <option>Bicicleta 16 Aço Feminino WENDY</option>
                  </select>
                </div>

                <div className="orcamento-field">
                  <span className="form-title">
                    <span>Nome Completo *</span>
                  </span>
                  <input type="text" class="input" access="false" id="nome" />
                </div>

                <div className="orcamento-field">
                  <span className="form-title">
                    <span>E-Mail *</span>
                  </span>
                  <input type="text" class="input" access="false" id="email" />
                </div>

              </div>
              <button onClick={() => { alert("Pedido de Orçamento realizado com sucesso! Confira o seu e-mail."); document.getElementById("produto").selected = null; document.getElementById("nome").value = ''; document.getElementById("email").value = ''; }} className="orcamento-button">Pedir Orçamento</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Orcamento
