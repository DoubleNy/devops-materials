import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import { useState } from "react";
import { LIGHT_BLUE, LIST_BACKGROUND } from "../themes/themes";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { Collapse, Icon } from "@mui/material";

type ChaptersProps = {};

const CHAPTERS = [
  { name: "Getting Started", expandable: true },
  { name: "Github", expandable: true },
  { name: "Heroku", expandable: true },
  { name: "Shoreline", expandable: true },
  { name: "About" },
];

const SUBCHAPTERS = [
  { name: "Getting Started", expandable: true },
  { name: "Github", expandable: true },
  { name: "Heroku", expandable: true },
  { name: "Shoreline", expandable: true },
  { name: "About" },
];

export const Chapters: React.FC<ChaptersProps> = ({}) => {
  const theme = useTheme();
  const [selected, setSelected] = useState(0);

  const handleSelectChapter = (index: number) => {
    setSelected(index);
  };

  return (
    <List>
      {CHAPTERS.map(({ expandable, name }, index) => (
        <Box key={index} pt={2}>
          <ListItem
            sx={{
              p: 1,
              borderRadius: 2,
              cursor: "pointer",
              "&.Mui-selected": {
                backgroundColor: LIST_BACKGROUND,
              },
              "&:hover": {
                color: LIGHT_BLUE,
                backgroundColor: LIST_BACKGROUND,
              },
            }}
            selected={index === selected}
            onClick={() => handleSelectChapter(index)}
          >
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              width="100%"
            >
              <Typography variant="h1">{name}</Typography>
              {expandable && (
                <Icon
                  sx={
                    selected !== index
                      ? {
                          transform: "rotate(-90deg)",
                        }
                      : {
                          fill: "red",
                        }
                  }
                >
                  <KeyboardArrowDownIcon fontSize="small" />
                </Icon>
              )}
            </Box>
          </ListItem>
          <Box pt={2}>
            <Divider />
          </Box>
          <Collapse
            in={expandable && selected === index}
            timeout="auto"
            unmountOnExit={true}
          >
            {SUBCHAPTERS.map(() => (
              <List>
                <Box key={index} pt={2}>
                  <ListItem
                    sx={{
                      p: 1,
                      borderRadius: 2,
                      cursor: "pointer",
                      "&.Mui-selected": {
                        backgroundColor: LIST_BACKGROUND,
                      },
                      "&:hover": {
                        color: LIGHT_BLUE,
                        backgroundColor: LIST_BACKGROUND,
                      },
                    }}
                    selected={index === selected}
                    onClick={() => handleSelectChapter(index)}
                  />
                </Box>
              </List>
            ))}
          </Collapse>
        </Box>
      ))}
    </List>
  );
};
