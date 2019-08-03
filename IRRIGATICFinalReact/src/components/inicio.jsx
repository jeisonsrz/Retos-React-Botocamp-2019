import React,{Component} from 'react';
import {CardGroup, Container,Menu,Icon} from "semantic-ui-react";
import Institucion from "./instituciones"
class inicio extends Component{
    state = { activeItem: 'inicio' }
    handleItemClick = (e, { name }) => this.setState({ activeItem: name })
  
    render(){
        const { activeItem } = this.state
        return(

            <div>
                <h2 align="center">Bienvenido a IRRIGATIC</h2>
                
               
               
              <Icon  align="center" name='home' />
               <strong> Inicio </strong>
       
                
                <div class="ui segment">
                <img class="ui centered image"  widht="500px" height="500px" src="https://i.ibb.co/hL0vZFj/principal-Irrigatic.png" />
                <p>Es un prototipo de sistema de riego y fertilización automatizado para cultivos agrícolas, viveros e invernaderos medianos el cual permite supervisar y controlar las variables de humedad de suelo, pH y fertilización adecuada para el cultivo de manera remota por el usuario mediante una plataforma IoT.

En este desarrollo se utilizaran tarjetas de desarrollo open source las cuales reciben las mediciones de humedad de suelo y temperatura ambiente de diferentes sensores para de esta manera activar una motobomba y regar automáticamente mediante goteo el cultivo. 
 
Cada uno de los datos y eventos son enviados y almacenados en un servidor externo para poder visualizar su comportamiento en un ordenador mediante nuestra plataforma iot, todo esto mediante la integración de protocolos de comunicación MQTT, Modbus TCP/IP ,I2C y una API REST.  
</p>
                <p><strong>Necesidad del Mercado:</strong> Actualmente los pequeños cultivadores de nuestro país no tienen una manera precisa de supervisar o controlar las variables que inciden en el crecimiento de sus cultivos ocasionando así mayores gastos de producción, recursos y menos rentabilidad por lo que nuestra propuesta de valor tiene que ver directamente con la reducción de costos de producción hasta un 30% para el cultivador, además de una producción de alta calidad a futuro en su cultivo , todo esto utilizando hardware y software libre además de impresión 3D para la fabricación de nuestra propia línea de accesorios para el sistema de riego y fertilización.</p>
                <img class="ui centered image" widht="500px" height="500px" src="https://i.ibb.co/5kFynS8/Beneficios-Irrigatic.png"/>
                <p>Sss</p>
                </div>
                
                

            </div>
            
        );

    }

}

export default inicio;