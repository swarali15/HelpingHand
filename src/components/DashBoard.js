import React from 'react';
import { Grid } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import DashboardContent from './dashboard/DashboardContent';
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));
function DashBoard()
{
    const classes = useStyles();
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
            