import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";

export default function Blue() {
  return (
    <Card className="card">
      <CardContent>
        <Typography variant="h5" component="div">
          <div className="blue">
            <h1>Blue</h1>
          </div>
        </Typography>
      </CardContent>
      <CardActions></CardActions>
    </Card>
  );
}
