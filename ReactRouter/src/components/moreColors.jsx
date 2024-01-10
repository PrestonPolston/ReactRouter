import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import axios from "axios";

export default function MoreColors() {
  const [colorInfo, setColorInfo] = useState(null);

  useEffect(() => {
    const fetchColorInfo = async () => {
      try {
        const response = await axios.get(
          "https://www.thecolorapi.com/id?hex=AA1185"
        );
        setColorInfo(response.data);
      } catch (error) {
        console.error("Error fetching color data:", error);
      }
    };

    fetchColorInfo();
  }, []);

  return (
    <div>
      <Drawer anchor="left" open={colorInfo !== null}>
        <Box sx={{ width: 300 }} role="presentation">
          <List>
            {colorInfo ? (
              <div>
                <h2>Color Information</h2>
                <p>Hex Value: {colorInfo.hex.value}</p>
                <p>RGB: {colorInfo.rgb.value}</p>
                <p>Name: {colorInfo.name.value}</p>
                {/* Display other color properties as needed */}
              </div>
            ) : (
              <p>Loading color information...</p>
            )}
          </List>
        </Box>
      </Drawer>
    </div>
  );
}
