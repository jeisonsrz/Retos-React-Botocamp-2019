import React from 'react';
import {Container, Header ,Icon, Menu ,Button, Image, Segment, Sidebar } from "semantic-ui-react";
import Router from "./components/Router";
import jsonDatos from "./data/datos.json";
import jsonDatosInsumosAnimales from "./data/datosInsumosA.json";
import jsonDatosInsumosAgroquimicos from "./data/datosAgroquimicos.json";
import 'semantic-ui-css/semantic.min.css';

class App extends React.Component {
  state = {instituciones: [], InsumosAnimales: [], InsumosAgroquimicos:[]};
componentWillMount(){
  this.setState({instituciones: jsonDatos,InsumosAnimales: jsonDatosInsumosAnimales,InsumosAgroquimicos: jsonDatosInsumosAgroquimicos});
  }

  state = { visible: true }
  state = { activeItem: 'inicio' }


  handleHideClick = () => this.setState({ visible: false })
  handleShowClick = () => this.setState({ visible: true })
  handleSidebarHide = () => this.setState({ visible: false })
  handleItemClick = (e, { name }) => this.setState({ activeItem: name })
  
 render() {
  const { visible } = this.state
  const { activeItem } = this.state

   return (
    <div>
        <Button.Group>
          <Button disabled={visible} onClick={this.handleShowClick}>
            Mostrar Menú
          </Button>
          <Button disabled={!visible} onClick={this.handleHideClick}>
            Ocultar Menú
          </Button>
        </Button.Group>

        <Sidebar.Pushable as={Segment}>
          <Sidebar
            as={Menu}
            animation='overlay'
            icon='labeled'
            inverted
            onHide={this.handleSidebarHide}
            vertical
            visible={visible}
            width='thin'
          >
            <Menu.Item name='inicio'  href="/inicio" active={activeItem === 'inicio'}
          onClick={this.handleItemClick}
      >
              <Icon name='shower' />
              IrrigaTIC
            </Menu.Item>
            <Menu.Item name='mediciones' href="/mediciones" active={activeItem === 'mediciones'}
          onClick={this.handleItemClick}>
              <Icon name='wifi' />
              Mediciones
            </Menu.Item>
            <Menu.Item name='proveedores' href="/proveedores" active={activeItem === 'proveedores'}
          onClick={this.handleItemClick}>
              <Icon name='dolly' />
              Proveedores
            </Menu.Item>
            <Menu.Item name='nosotros' href="/nosotros" active={activeItem === 'nosotros'}
          onClick={this.handleItemClick}>
              <Icon name='handshake outline' />
              Sobre Nosotros
            </Menu.Item>
            <Menu.Item name='registro' href="/registro" active={activeItem === 'registro'}
          onClick={this.handleItemClick}>
              <Icon name='user' />
              Registro
            </Menu.Item>
          </Sidebar>

          <Sidebar.Pusher dimmed={visible}>
          <Router instituciones={this.state.instituciones} InsumosAnimales={this.state.InsumosAnimales} InsumosAgroquimicos={this.state.InsumosAgroquimicos} />
          <Icon name='dolly' />
              Eureka! Technology
              <Icon name='dolly' />
              Eureka! Technology
              <Icon name='dolly' />
              Eureka! Technology
              <Icon name='dolly' />
              Eureka! Technology
              <Icon name='dolly' />
              Eureka! Technology
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      


   
   </div>
   
   );

 }
}

export default App;
