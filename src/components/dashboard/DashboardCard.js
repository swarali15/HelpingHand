import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { Avatar, IconButton, CardMedia } from "@material-ui/core";
import activeCovid from './ACTIVECOVID19.PNG'
import foodbank from './foodbank.jpeg'
import  migrantworkers from './migrantworkers.PNG'
import populationDensity from './populationdensity.PNG'
import totAgriProd from './totalagricultureproduction.PNG'


const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});


const DashboardCard = props => {
  const { title, subtitle, description,ActiveCovidCases,migrantWorkers,totalagriprod,populationDensity,FoodBanks} = props;
    console.log(ActiveCovidCases);
    
  return (<div>
      <div>
    <Card style={{ height: "250px" , width:"220px"}}>
      <CardHeader
        title={title}
        description={description}
      ActiveCovidCases={ActiveCovidCases}
        subtitle={description}
      />
      
      <CardContent>
        <Typography color="secondary" style={{ fontSize: 15 }}>
                        TOTAL COVID CASES:  {ActiveCovidCases}
                      </Typography>
                      
                      <Typography color="primary" style={{ fontSize: 12 }}>
                             Migrant Workers: {migrantWorkers}
                      </Typography>
                        <Typography color="primary" style={{ fontSize: 12 }}>
                             Total agricultural prod: {totalagriprod}
                      </Typography>
                        <Typography color="primary" style={{ fontSize: 12 }}>
                             Population Density: {populationDensity}
                      </Typography>
                        <Typography color="primary" style={{ fontSize: 12}}>
                            FoodBanks: {FoodBanks}
                      </Typography>
      </CardContent>
    </Card>
</div>
      
          </div>
  );
};

export default DashboardCard;