import React from "react";
import { Grid } from "@material-ui/core";
import Data from "./Data";
import DashboardCard from './DashboardCard'

const DashboardContent = () => {
  const getCard = batteryData => {
    return (
      <Grid item xs={12} sm={4}>
        <DashboardCard {...batteryData} />
      </Grid>
    );
  };

  return (
    <Grid container spacing={2}>
      {Data.map(batteryData => getCard(batteryData))}
    </Grid>
  );
};

export default DashboardContent;