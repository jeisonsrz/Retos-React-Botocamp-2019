import React,{Component} from 'react';
import {Card, Button,Image,Menu,Icon,activeItem} from "semantic-ui-react";


function ImgSwitch(props){
  const clase = props.clasea;
  if(clase=="VACUNA"){
    return  <Image floated='right' size='mini' src='http://www.tuviajedesurf.com/wp-content/uploads/2017/01/vacuna.png'/>;
  }else if(clase=="Antibióticos"){
    return  <Image floated='right' size='mini' src='https://www.alonsoquiropractica.com/images/que-son-los-antibioticos_web.jpg'/>;
  }else if(clase=="Antiparasitarios"){
    return  <Image floated='right' size='mini' src='https://www.sani.com.ar/usr/images/o/38743_2435.jpg'/>;
  }else if(clase=="Desinfectantes"){
    return  <Image floated='right' size='mini' src='http://www.interempresas.net/FotosArtProductos/P84024.jpg'/>;
  }else if(clase=="Vitaminas"){
    return  <Image floated='right' size='mini' src='https://www.farmavazquez.com/45507-large_default/juanola-jalea-real-ninos-apetito-jarabe-150-ml.jpg'/>;
  }
  else if(clase=="Hormonales"){
    return  <Image floated='right' size='mini' src='https://http2.mlstatic.com/afford-novul-anticonceptivos-x-400-comprimidos-para-perro-D_NQ_NP_656282-MLA28550440998_112018-F.jpg'/>;
  }
  else{
    return  <Image floated='right' size='mini' src='http://www.interempresas.net/FotosArtProductos/P84024.jpg'/>;
  }
  
}



class InsumosAnimales extends Component{
  state = { activeItem: 'instituciones' }
  handleItemClick = (e, { name }) => this.setState({ activeItem: name })
  

  
    render(){

        return(
   
      <Card>
        
      <Card.Content>
      <ImgSwitch clasea={this.props.insumosAnimales.clase}></ImgSwitch>
        <Card.Header>{this.props.insumosAnimales.clase}</Card.Header>

        <Card.Meta>{this.props.insumosAnimales.descripci_n_producto + "**" + this.props.insumosAnimales.especie}</Card.Meta>
        <Card.Description>
          PRESENTACÓN:<strong>{this.props.insumosAnimales.presentaci_n}</strong>
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

export default InsumosAnimales;