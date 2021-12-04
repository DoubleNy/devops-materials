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

type MiniDrawerProps = {};

export const Home: React.FC<MiniDrawerProps> = ({}) => {
  const theme = useTheme();

  return (
    <Box display="flex" height="100vh">
      <Box width={400}>
        <List>
          {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
            <Box>
              <ListItem button key={text}>
                <Typography
                  style={{
                    fontWeight: 700,
                  }}
                >
                  {text}
                </Typography>
              </ListItem>
              <Box>
                <Divider />
              </Box>
            </Box>
          ))}
        </List>
      </Box>
      <Divider orientation="vertical" />
      <MainContainer />
    </Box>
  );
};
