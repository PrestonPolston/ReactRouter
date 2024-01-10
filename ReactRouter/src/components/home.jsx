import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";

export default function HomePage() {
  return (
    <div>
      <Card className="card">
        <CardContent>
          <Typography variant="h5" component="div">
            <div className="home">
              <h1>Home</h1>
            </div>
          </Typography>
        </CardContent>
        <CardActions></CardActions>
      </Card>
    </div>
  );
}
