import * as React from "react";
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
  {
    name: "Getting Started",
    expandable: true,
    subchapters: [
      {
        name: "Hello World",
        content: [
          {
            title: "Introduction",
          },
        ],
      },
      { name: "Introduction", content: [] },
      { name: "Scope" },
      { name: "Prepare your hands" },
    ],
  },
  {
    name: "Github",
    expandable: true,
    subchapters: [
      { name: "What is Github" },
      { name: "Create a repo" },
      { name: "Fork a repo" },
      { name: "Github flow" },
      { name: "Contributing to projects" },
    ],
  },
  {
    name: "Heroku",
    expandable: true,
    subchapters: [
      { name: "What is Github" },
      { name: "Create a repo" },
      { name: "Fork a repo" },
      { name: "Github flow" },
      { name: "Contributing to projects" },
    ],
  },
  {
    name: "Shoreline",
    expandable: true,
    subchapters: [
      { name: "What is Github" },
      { name: "Create a repo" },
      { name: "Fork a repo" },
      { name: "Github flow" },
      { name: "Contributing to projects" },
    ],
  },
  { name: "DevOpsverse" },
  { name: "About" },
];

export const Chapters: React.FC<ChaptersProps> = ({}) => {
  const [collapseChapter, setCollapseChapter] = useState(0);
  const [selectedSubchapter, setSelectedSubchapter] = useState(0);

  const handleCollapseChapter = (index: number) => {
    if (index === collapseChapter) {
      setCollapseChapter(-1);
      return;
    }
    setCollapseChapter(index);
  };

  const handleSelectSubChapter = (index: number) => {
    setSelectedSubchapter(index);
  };

  return (
    <List>
      {CHAPTERS.map(({ expandable, name, subchapters }, index) => (
        <Box key={index}>
          <ListItem
            sx={{
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
            onClick={() => handleCollapseChapter(index)}
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
                    collapseChapter !== index
                      ? {
                          transform: "rotate(-90deg)",
                          mr: 1,
                        }
                      : null
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
            in={expandable && collapseChapter === index}
            timeout="auto"
            unmountOnExit={true}
          >
            {subchapters?.map(({ name }, index) => (
              <List>
                <Box key={index} pt={2}>
                  <ListItem
                    sx={{
                      py: 1,
                      px: 4,
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
                    selected={index === selectedSubchapter}
                    onClick={() => handleSelectSubChapter(index)}
                  >
                    {name}
                  </ListItem>
                </Box>
              </List>
            ))}
          </Collapse>
        </Box>
      ))}
    </List>
  );
};
