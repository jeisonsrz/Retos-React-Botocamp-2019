import React,{Component} from 'react';
import {CardGroup, Container,Menu,Icon} from "semantic-ui-react";
import InsumosAnimales from "./InsumosAnimales"
import Instituciones from "./instituciones"
class Mediciones extends Component{
    state = { activeItem: 'mediciones' }
    handleItemClick = (e, { name }) => this.setState({ activeItem: name })

    
  
    render(){
        const { activeItem } = this.state
        return(

            <div>
                <h2 align="center">Bienvenido a IRRIGATIC</h2>
                
       
               
              <Icon  align="center" name='wifi' />
              Inicio <strong> Mediciones </strong>
       

                <CardGroup> 
                {this.props.insumitos.map(insumosA => {
              return <InsumosAnimales insumosAnimales={insumosA} />;
            })}
                </CardGroup>
                
              

            </div>
            
        );

    }

}

export default Mediciones;