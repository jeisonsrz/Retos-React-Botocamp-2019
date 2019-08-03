import React,{Component} from "react";
import { BrowserRouter,Route,Switch} from "react-router-dom"; 
import Inicio from "./inicio";
import NoRute from "./NoRoute";
import SingleInstitucion from "./SingleInstitucion";
import Mediciones from "./mediciones";
import Nosotros from "./nosotros";
import Proveedores from "./proveedores";
import InsumosAnimales1 from "./InsumosAnimales1";
import InsumosAgroquimicos1 from "./InsumosAgroquimicos1";
import Registro from "./registro";
import IrrigaticRegistro from "./IrrigaticRegistro";
class Router extends Component{

    render(){

        return(
            <BrowserRouter>
            
                <Switch>

                     <Route path="/inicio" render={()=>{
                       return(<Inicio  instituciones={this.props.instituciones} ></Inicio>) 

                    }
                    } />
                   
                   <Route path="/mediciones" render={()=>{
                       return(<Mediciones   insumitos={this.props.InsumosAnimales} ></Mediciones>) 

                    }
                    } />
                    

                    
                    />
                    <Route path="/otraruta" component={()=>{
                        return (<div> <h2> Hola ke ace OTRA RUTA </h2></div>)
                    }}  />
                    
                    <Route exact path="/mModulos/:id" 
                    render={
                        (props)=>{
                            
                            const {match} = props;
                            let id=!isNaN(parseInt(match.params.id))?parseInt(match.params.id):0;
                            console.log(match.params.id);
                            return <SingleInstitucion institucion={this.props.instituciones[id]}/>
                        }
                    }></Route>
                    
                    <Route path="/nosotros" render={()=>{
                       return(<Nosotros ></Nosotros>) 

                    }
                    } />

                      <Route path="/proveedores" render={()=>{
                       return(<Proveedores ></Proveedores>) 

                    }
                    } />
                   
                   <Route path="/registro" render={()=>{
                       return(<Registro ></Registro>) 

                    }
                    } />

                    <Route exact path="/registroIrrigatic" component={IrrigaticRegistro} /> 
                   
                   <Route path="/insumosAnimales" render={()=>{
                       return(<InsumosAnimales1  insumitos={this.props.InsumosAnimales} ></InsumosAnimales1>) 

                    }
                    } /> 

                    <Route path="/insumosAgroquimicos" render={()=>{
                       return(<InsumosAgroquimicos1   insumitos23={this.props.InsumosAgroquimicos} ></InsumosAgroquimicos1>) 

                    }
                    } /> 

                </Switch>
            
            </BrowserRouter>
            
        );

    }

}

export default Router;