import React from 'react';
import { Grid } from "@material-ui/core";
import DashboardContent from './dashboard/DashboardContent';

function DashBoard()
{
    return (
    <Grid container direction="column">
      <Grid item container>
        <Grid item xs={false} sm={2} />
        <Grid item xs={12} sm={8}>
        <DashboardContent/>
        </Grid>
        <Grid item xs={false} sm={2} />
      </Grid>
    </Grid>
  );
    
}
export default DashBoard;
           /*<ul>
        <li className="sidebar-link">Dashboard</li>
       <li className="sidebar-link">Batteries</li>
       <li className="sidebar-link">Settings</li>
            </ul>*/