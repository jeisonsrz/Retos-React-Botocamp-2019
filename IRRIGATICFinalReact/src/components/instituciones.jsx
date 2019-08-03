import React,{Component} from 'react';
import {Card, Button,Image,Menu,Icon,activeItem} from "semantic-ui-react";
class instituciones extends Component{
  state = { activeItem: 'instituciones' }
  handleItemClick = (e, { name }) => this.setState({ activeItem: name })
  
    render(){

        return(
   
      <Card>
        
      <Card.Content>
        <Image floated='right' size='mini' src='/images/avatar/large/steve.jpg' />
        <Card.Header>{this.props.institucion.nombreestablecimiento}</Card.Header>
        <Card.Meta>{this.props.institucion.nombredepartamento + "**" + this.props.institucion.nombremunicipio}</Card.Meta>
        <Card.Description>
          Telefono:<strong>{this.props.institucion.telefono}</strong>
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

export default instituciones;