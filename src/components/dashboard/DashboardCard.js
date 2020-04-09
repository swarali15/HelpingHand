import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { Avatar, IconButton, CardMedia } from "@material-ui/core";

const DashboardCard = props => {
  const { title, subtitle, description} = props;
  return (
    <Card>
      <CardHeader
        title={title}
        description={description}
        subheader={description}
      />
      <CardMedia style={{ height: "150px" }}  />
      <CardContent>
        <Typography variant="body2" component="p">
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default DashboardCard;