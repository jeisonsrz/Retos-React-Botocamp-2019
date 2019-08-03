import React,{Component} from 'react';
import {CardGroup, Container,Menu,Icon,List,Button,Image} from "semantic-ui-react";
import '../App.css'
class Proveedores extends Component{
    state = { activeItem: 'nosotros' }
    handleItemClick = (e, { name }) => this.setState({ activeItem: name })
  
    render(){
        const { activeItem } = this.state
        return(

            <div className="container">
                <h2 align="center">Proveedores de Insumos</h2>
                
              <Container>
                <List divided verticalAlign='middle'>
                <List.Item>
                  <List.Content floated='right'>
        <Button href="/insumosAnimales" >VER</Button>
      </List.Content>
       <img className="avatar1" src='https://cdnclp.paraguay.com/pictures/2019/02/06/1322752/4781350L.jpg' />
      <List.Content align="center" font-size=""> <strong>Insumos para Animales</strong></List.Content>
    </List.Item>
    <List.Item>
      <List.Content floated='right'>
        <Button href="/insumosAgroquimicos">VER</Button>
      </List.Content>
      <img className="avatar2" src=' https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCpDwyrdXkt3PvkN85KikKZ0W6WzBnkC2vovD90DkQaS6u1zma' />
     <List.Content align="center"><strong>Insumos Agroquimicos</strong></List.Content>
    </List.Item>
    <List.Item>
      <List.Content floated='right'>
        <Button >VER</Button>
      </List.Content>
      <Image avatar src='/images/avatar/small/mark.png' />
      <List.Content>Medicamentos No Vitales</List.Content>
    </List.Item>
    <List.Item>
      <List.Content floated='right'>
        <Button>VER</Button>
      </List.Content>
      <Image avatar src='/images/avatar/small/molly.png' />
      <List.Content>Molly</List.Content>
    </List.Item>
  </List>
                
  </Container>

            </div>
            
        );

    }

}

export default Proveedores;