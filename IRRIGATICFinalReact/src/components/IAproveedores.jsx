import React,{Component} from 'react';
import {CardGroup, Container,Menu,Icon} from "semantic-ui-react";
import Institucion from "./instituciones"
import InsumosAnimales from './InsumosAnimales';
class IAproveedores extends Component{
    state = { activeItem: 'IaProveedores' }
    handleItemClick = (e, { name }) => this.setState({ activeItem: name })
  
    render(){
        const { activeItem } = this.state
        return(

            <div>
                <h2 align="center">Bienvenido a IRRIGATIC</h2>
                
                <Container>
               
              <Icon  align="center" name='wifi' />
              <strong> Proveedores Insumos </strong>
       

                <CardGroup> 
                    {this.props.instituciones.map(Iaprov=>{
                        return <InsumosAnimales Iaprov={Iaprov}/>;
                    })}
                </CardGroup>
                
                </Container> 

            </div>
            
        );

    }

}

export default IAproveedores;