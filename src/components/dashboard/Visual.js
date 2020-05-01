import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import activeCovid from './ACTIVECOVID19.PNG'
import foodbank from './foodbank.jpeg'
import  migrantworkers from './migrantworkers.PNG'
import populationDensity from './populationdensity.PNG'
import totAgriProd from './totalagricultureproduction.PNG'




function Visual(){
    return(
    <div className="dataRepresent">
            <center><h2>Active covid cases</h2><img src={activeCovid} alt="Logo" /></center>
     <center> <h2>Food Bank</h2><img src={foodbank} alt="Logo" /></center>
      <center><h2>Migrant Workers</h2><img src={migrantworkers} alt="Logo" /></center>
      <center><h2>Population Density</h2><img src={populationDensity} alt="Logo" /></center>
      <center><h2>Total Agricultural Production</h2><img src={totAgriProd} alt="Logo" /></center>
      </div>);
    
}
        export default Visual

