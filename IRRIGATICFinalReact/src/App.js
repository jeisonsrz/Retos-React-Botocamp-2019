import React from 'react';
import {Container, Header ,Icon, Menu ,Button, Image, Segment, Sidebar } from "semantic-ui-react";
import Router from "./components/Router";
import jsonDatos from "./data/datos.json";
import jsonDatosInsumosAnimales from "./data/datos.json";
import 'semantic-ui-css/semantic.min.css';
impor
class App extends React.Component {
  state = {instituciones: [], InsumosAnimales: []};

componentWillMount(){
    this.setState({instituciones: jsonDatos,InsumosAnimales: jsonDatosInsumosAnimales});

  }

  state = { activeItem: 'gamepad' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })
  
 render() {
  
  const { activeItem } = this.state

  console.log(this.state)

   return (
    <Container>
         <Menu icon='labeled'>
        <Menu.Item name='gamepad' active={activeItem === 'gamepad'} onClick={this.handleItemClick}>
          <Icon name='gamepad' />
          Games
        </Menu.Item>

        <Menu.Item
          name='video camera'
          active={activeItem === 'video camera'}
          onClick={this.handleItemClick}
        >
          <Icon name='video camera' />
          Channels
        </Menu.Item>

        <Menu.Item
          name='video play'
          active={activeItem === 'video play'}
          onClick={this.handleItemClick}
        >
          <Icon name='video play' />
          Videos
        </Menu.Item>
      </Menu>

        <Router instituciones={this.state.instituciones} InsumosAnimales={this.state.InsumosAnimales}  />
   
   </Container>
   
   );

 }
}

export default App;
