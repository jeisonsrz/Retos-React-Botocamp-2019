import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import eurekaLogo from '../images/logo1.jpeg';
import ListaIrrRegistro from './ListaIrrRegistro';

class IrrigaticRegistro extends React.Component {
  constructor(props) {
    super(props);
    console.log('1. constructor()');

    this.state = {
      data: [],
    };
  }

  componentDidMount() {
    console.log('3. componentDidMount()');

    this.timeoutId = setTimeout(() => {
      this.setState({
        data: [
          {
            id: '2de30c42-9deb-40fc-a41f-05e62b5939a7',
            firstName: 'Fernando',
            lastName: 'Fulanito',
            email: 'fernando@gmail.com',
            jobTitle: 'Agricultor de Tomate',
            avatarUrl:
              'https://www.gravatar.com/avatar/f63a9c45aca0e7e7de0782a6b1dff40b?d=identicon',
          },
          {
            id: 'd00d3614-101a-44ca-b6c2-0be075aeed3d',
            firstName: 'Gerado',
            lastName: 'Cabezas',
            email: 'gerardomcabezas@hotmail.com',
            jobTitle: 'Agricutlor Maiz',
           
            avatarUrl:
              'https://www.gravatar.com/avatar/d57a8be8cb9219609905da25d5f3e50a?d=identicon',
          },
          {
            id: '63c03386-33a2-4512-9ac1-354ad7bec5e9',
            firstName: 'Hernesto',
            lastName: 'Diaz',
            email: 'nose1239@hotmail.com',
            jobTitle: 'Agricultor Fresa',
            
            avatarUrl:
              'https://www.gravatar.com/avatar/e74e87d40e55b9ff9791c78892e55cb7?d=identicon',
          },
          {
            id: '63c03386-33a2-4512-9ac1-354ad7bed6f0',
            firstName: 'ASPERCOL',
            lastName: 'Colombia',
            email: 'nose1239@hotmail.com',
            jobTitle: 'Agricultor Fresa',
            
            avatarUrl:
              'https://www.gravatar.com/avatar/e74e87d40e55b9ff9791c78892e55cb7?d=identicon',
          },
        ],
      });
    }, 2000);
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('5. componentDidUpdate()');
    console.log({
      prevProps: prevProps,
      prevState: prevState,
    });

    console.log({
      props: this.props,
      state: this.state,
    });
  }

  componentWillUnmount() {
    console.log('6. componentWillUnmount');
    clearTimeout(this.timeoutId);
  }

  render() {
    console.log('2/4. render()');
    return (
      <React.Fragment>
        <div className="Badges">
          <div className="Badges__hero">
            <div className="Badges__container">
              <img
              
                className="Badges_conf-logo"
                src={eurekaLogo}
                alt="Conf Logo"
              />
            </div>
          </div>
        </div>

        <div className="Badges__container">
          <div className="Badges__buttons">
            <Link to="/FormEmpresa" className="btn btn-primary">
              Nueva empresa
            </Link>
          </div>
          
          <div className="Badges__buttons">
            <Link to="/badges/new" className="btn btn-primary">
              Nuevo Usuario
            </Link>
          </div>
          <hr />
          <h1>Nuestros usuarios y Empresas </h1>
          <h1 className="Centro_texto">Destacados</h1>
          <ListaIrrRegistro badges={this.state.data} />
        </div>
      </React.Fragment>
    );
  }
}

export default IrrigaticRegistro;
