import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";

export default function Red() {
  return (
    <Card className="card">
      <CardContent>
        <Typography variant="h5" component="div">
          <div className="red">
            <h1>Red</h1>
          </div>
        </Typography>
      </CardContent>
      <CardActions></CardActions>
    </Card>
  );
}
