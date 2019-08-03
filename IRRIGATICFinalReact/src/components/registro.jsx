import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import '../App.css';
// import irrigaticLogoImage from '../images/fondo.jpg';
import logo1Image from '../images/logo1.jpeg';

class registro extends Component {
  render() {
    return (
      <div className="Home">
        <div className="container">
          <div className="row">
            <div className="Home__col col-12 col-md-4">
              {/* <img
                src={irrigaticLogoImage}
                alt="Platzi Conf Logo"
                className="img-fluid mb-2"
              /> */}

              <h1 className="texto_home">Irrgitic Registro Usuarios/Empresas</h1>
              <Link className="btn btn-primary" to="/registroIrrigatic">
                Registro
              </Link>
            </div>

             <div className="Home__col d-none d-md-block col-md-8">
              <img
                
                src={logo1Image}
                alt="Logo_Eureka"
                className="img-fluid p-4"
              />
            </div> 
          </div>
        </div>
      </div>
    );
  }
}

export default registro;