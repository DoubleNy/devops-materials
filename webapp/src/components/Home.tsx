import * as React from "react";
import {
  styled,
  useTheme,
  Theme,
  CSSObject,
  makeStyles,
} from "@mui/material/styles";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import { MainContainer } from "./MainContainer";
import { Chapters } from "./Chapters";

type MiniDrawerProps = {};

export const Home: React.FC<MiniDrawerProps> = ({}) => {
  const theme = useTheme();

  return (
    <Box display="flex" height="100vh">
      <Box px={2} width={800}>
        <Chapters />
      </Box>
      <Divider orientation="vertical" />
      <MainContainer />
    </Box>
  );
};
