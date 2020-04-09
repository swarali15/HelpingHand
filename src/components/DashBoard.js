import React from 'react';
import DashboardCard from './dashboard/DashboardCard.js'
import { Grid } from "@material-ui/core";
import Content from './dashboard/DashboardContent';

function DashBoard()
{
    return (
    <Grid container direction="column">
      <Grid item container>
        <Grid item xs={false} sm={2} />
        <Grid item xs={12} sm={8}>
          <h2>Content</h2>
        //<Content />
        </Grid>
        <Grid item xs={false} sm={2} />
      </Grid>
    </Grid>
  );
    
}
export default DashBoard
           /*<ul>
        <li className="sidebar-link">Dashboard</li>
       <li className="sidebar-link">Batteries</li>
       <li className="sidebar-link">Settings</li>
            </ul>*/