import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import { Content } from "./Content";
import { Chapters } from "./Chapters";

type MiniDrawerProps = {};

export const Home: React.FC<MiniDrawerProps> = ({}) => {
  const theme = useTheme();

  return (
    <Box
      display="grid"
      gridTemplateColumns="1fr 4fr"
      p={4}
      sx={{
        gap: 4,
      }}
    >
      <Box
        sx={{
          height: "100vh",
          position: "sticky",
          top: 0,
        }}
      >
        <Chapters />
      </Box>
      <Content />
    </Box>
  );
};
