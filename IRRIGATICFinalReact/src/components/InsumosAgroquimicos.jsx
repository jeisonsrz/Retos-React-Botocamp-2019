import React,{Component} from 'react';
import {Card, Button,Image,Menu,Icon,activeItem} from "semantic-ui-react";
import { exportDefaultSpecifier } from '@babel/types';

function ImgSwitch(props){
  const tipo = props.tipso;
  if(tipo=="HERBICIDAS"){
    return  <Image floated='right' size='mini' src='https://www.ecured.cu/images/0/04/Herbicida1.jpeg'/>;
  }else if(tipo=="FUNGICIDAS"){
    return  <Image floated='right' size='mini' src='https://www.interempresas.net/FotosArtProductos/P140997.jpg'/>;
  }else{
    return  <Image floated='right' size='mini' src='https://www.hogarsintoxicos.org/sites/hogarsintoxicos.org/files/imagenes/noticias_034.jpg'/>;
  }
}


class InsumosAgroquimicos extends Component{
  state = { activeItem: 'instituciones' }
  handleItemClick = (e, { name }) => this.setState({ activeItem: name })
  
 
  
    render(){

        return(
   
      <Card>
        
      <Card.Content>
       
        <ImgSwitch tipso={this.props.insumosAgroQ.grupo}></ImgSwitch>
        
        <Card.Header>{this.props.insumosAgroQ.grupo}</Card.Header>
        <Card.Meta>{this.props.insumosAgroQ.ingrediente_activo + "**" + this.props.insumosAgroQ.nombre_del_producto}</Card.Meta>
        <Card.Description>
          PRESENTACIÓN:<strong>{this.props.insumosAgroQ.presentaci_n}</strong>
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <div className='ui two buttons'>
          <Button basic color='green'>
            Approve
          </Button>
          <Button basic color='red'>
            Decline
          </Button>
        </div>
      </Card.Content>
    </Card>
 
            
        );

    }

}

export default InsumosAgroquimicos;