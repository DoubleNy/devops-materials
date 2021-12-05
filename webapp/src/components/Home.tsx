import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import { MainContainer } from "./MainContainer";
import { Chapters } from "./Chapters";

type MiniDrawerProps = {};

export const Home: React.FC<MiniDrawerProps> = ({}) => {
  const theme = useTheme();

  return (
    <Box
      display="grid"
      gridTemplateColumns="1fr 4fr"
      px={4}
      sx={{
        gap: 4,
      }}
    >
      <Chapters />
      <MainContainer />
    </Box>
  );
};
