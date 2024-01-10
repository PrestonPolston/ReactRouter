import * as React from "react";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import DensityMediumIcon from "@mui/icons-material/DensityMedium";
import MoreColors from "./moreColors";

export default function NavBar() {
  const [moreColorsOpen, setMoreColorsOpen] = React.useState(false);

  const handleMoreColorsClick = () => {
    setMoreColorsOpen(true);
  };

  const handleMoreColorsClose = () => {
    setMoreColorsOpen(false);
  };

  return (
    <>
      <div>
        <ButtonGroup size="large" aria-label="large button group">
          <Button component={Link} to="/" variant="contained">
            Home
          </Button>
          <Button component={Link} to="/red" variant="contained">
            Red
          </Button>
          <Button component={Link} to="/blue" variant="contained">
            Blue
          </Button>{" "}
          <Button
            startIcon={<DensityMediumIcon />}
            onClick={handleMoreColorsClick}
          >
            {" "}
            More Colors{" "}
          </Button>
        </ButtonGroup>
        {/* <MoreColors open={moreColorsOpen} onClose={handleMoreColorsClose} /> */}
      </div>
    </>
  );
}
