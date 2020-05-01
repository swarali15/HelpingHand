import React from "react";
import { Grid } from "@material-ui/core";
import Data from "./Data";
import DashboardCard from './DashboardCard'

const DashboardContent = () => {
  const getCard = Data => {
    return (
        
      <Grid item xs={6} sm={4}>
        <DashboardCard {...Data} />
      </Grid>
    );
  };

  return (
    <Grid container spacing={10}>
      {Data.map(Data => getCard(Data))}
    </Grid>
  );
};

export default DashboardContent;