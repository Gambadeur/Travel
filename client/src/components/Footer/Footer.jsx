import React from "react";
import {render} from "react-dom";
import './footer.scss';
import Imageamericanex from '../Images/americanex.png';
import Imagevisa from '../Images/visa.png';
import Imagemastercard from '../Images/mastercard.png';
import Imagelogo from '../Images/logo1.png';







class Footer extends React.Component {

  render () {
    return (
      <div className="footer">
        <div className="bloc_footer">
            <div className="infos_pratiques">
              <h1>Infos pratiques</h1>
                <a href="Guides de voyage">Guides de voyage</a>
                <a href="Look Pratik : infos vols et bagages">Look Pratik : infos vols et bagages</a>
                <a href="Nos brochures en ligne">Nos brochures en ligne</a>
                <a href="Contrats d assurances">Contrats d assurances</a>
                <a href="Conditions de ventes">Conditions de ventes</a>
                <a href="Plan de site">Plan de site</a>
                <a href="Formalités">Formalités</a>              
            </div>
            <div className="A_propos">
              <h1>A propos de BetnGo</h1>
                <a href=" Qui sommes-nous ?"> Qui sommes-nous ?</a>
                <a href="Nos agences de voyages">Nos agences de voyages</a>
                <a href="Votre espace perso">Votre espace perso</a>
                <a href="Nos engagements">Nos engagements</a>
                <a href="La Charte du Voyage">La Charte du Voyage</a>             
            </div>

            <div className="Services_clients">
              <h1>Services clients</h1>
                <a href=" FAQ - Réponses à vos questions"> FAQ - Réponses à vos questions</a>
                <a href="Nous contacter">Nous contacter</a>
                <a href="Votre espace perso">Votre espace perso</a>
                <a href="Mentions légales">Mentions légales</a>
                <a href="Chèques vacances">Chèques vacances</a>          
            </div>
            <div className="Nos_autres_sites">
              <h1>Nos autres sites</h1>
                <a href=" Rejoignez-nous sur Facebook"> Rejoignez-nous sur Facebook</a>
                <a href="Rejoignez-nous sur Twitter">Rejoignez-nous sur Twitter</a>
                <a href="Suivez l'actu de BetnGo">Suivez l actu de BetnGo</a>
                <a href="Partagez vos photos en temps réel">Partagez vos photos en temps réel</a>
                <a href="Conseils et idées de voyages">Conseils et idées de voyages</a> 
            </div>
        </div>
          <div className="charte">
            <p>* Prix TTC/pers., base chambre double.<br />
            (1) (prix d un appel local). 15 € de frais par dossier, en cas de réservation par téléphone. </p>
          </div>
          <div className="icônes">
            <img src={Imageamericanex} className="amex" alt="icônes"/>
            <img src={Imagevisa} className="visa" alt="icônes"/>
            <img src={Imagemastercard} className="mastercard" alt="icônes"/>
            <img src={Imagelogo} className="logo" alt="icônes"/>




            
          </div>
    </div>
   


    );
  }
}

export default Footer;



   







   