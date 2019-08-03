import React,{Component} from 'react';
import {CardGroup, Container,Menu,Icon} from "semantic-ui-react";

class nosotros extends Component{
    state = { activeItem: 'nosotros' }
    handleItemClick = (e, { name }) => this.setState({ activeItem: name })
  
    render(){
        const { activeItem } = this.state
        return(

            <div>
                <h2 align="center">Sobre Nosotros</h2>
                
               
               
              <Icon  align="center" name='handshake outline' />
               <strong> Nosotros </strong>
       
                
                <div class="ui segment">
                <img class="ui centered image" widht="500px" height="500px" src="https://i.ibb.co/12rM8WT/principal.png" />
                <p>Te eum doming eirmod, nominati pertinacia argumentum ad his. Ex eam alia facete scriptorem, est autem aliquip detraxit at. Usu ocurreret referrentur at, cu epicurei appellantur vix. Cum ea laoreet recteque electram, eos choro alterum definiebas in. Vim dolorum definiebas an. Mei ex natum rebum iisque.</p>
                <p>Audiam quaerendum eu sea, pro omittam definiebas ex. Te est latine definitiones. Quot wisi nulla ex duo. Vis sint solet expetenda ne, his te phaedrum referrentur consectetuer. Id vix fabulas oporteat, ei quo vide phaedrum, vim vivendum maiestatis in.</p>
                <img class="ui small centered image" src="/images/wireframe/text-image.png"/>
                <p>Eu quo homero blandit intellegebat. Incorrupte consequuntur mei id. Mei ut facer dolores adolescens, no illum aperiri quo, usu odio brute at. Qui te porro electram, ea dico facete utroque quo. Populo quodsi te eam, wisi everti eos ex, eum elitr altera utamur at. Quodsi convenire mnesarchum eu per, quas minimum postulant per id.</p>
                </div>
                
               

            </div>
            
        );

    }

}

export default nosotros;