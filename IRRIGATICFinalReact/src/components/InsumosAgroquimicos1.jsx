import React,{Component} from 'react';
import {CardGroup, Container,Menu,Icon} from "semantic-ui-react";
import Instituciones from "./instituciones"
import InsumosAgroquimicos from "./InsumosAgroquimicos"
class InsumosAgroquimicos1 extends Component{
    state = { activeItem: 'mediciones' }
    handleItemClick = (e, { name }) => this.setState({ activeItem: name })
  
    render(){
        const { activeItem } = this.state
        return(

            <div>
                <h2 align="center">Bienvenido a IRRIGATIC - Insumos Agroquímicos</h2>
                
                
               
              <Icon  align="center" name='wifi' />
              Inicio <strong> Insumos Agroquímicos </strong>
       

                <CardGroup> 
                {this.props.insumitos23.map(insumosA => {
              return <InsumosAgroquimicos insumosAgroQ={insumosA} />;
            })}
                </CardGroup>
                
               

            </div>
            
        );

    }

}

export default InsumosAgroquimicos1;