import React,{Component} from 'react';
import {Segment,Header,Menu,Icon} from 'semantic-ui-react'

class SingleInstitucion extends Component{
    state = { activeItem: 'proveedores' }
    handleItemClick = (e, { name }) => this.setState({ activeItem: name })
  
    render(){
        const { activeItem } = this.state

        return(
    <div>
         <Icon name='dolly' />
              Proveedores
         
        <Segment>

            <Header>{this.props.institucion.nombreestablecimiento}</Header>

        </Segment>
    </div>
            
        );

    }

}

export default SingleInstitucion;