import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { CodeSnippet } from "./CodeSnippet";
import { MarkdownContent } from "./markdown/MarkdownContent";
import { useState } from "react";
import { IconButton, Tooltip } from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import ModeEditOutlineIcon from "@mui/icons-material/ModeEditOutline";

type MainContainerProps = {};

export const Content: React.FC<MainContainerProps> = ({}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [value, setValue] = useState("");

  const handleChange = (content?: string) => {
    if (!content) return;

    setValue(content);
  };

  return (
    <Box
      sx={{
        p: 4,
      }}
    >
      <Box display="flex" justifyContent="flex-end">
        <Tooltip title={isEditing ? "Preview markdown" : "Edit markdown"}>
          <Box>
            <IconButton
              color="primary"
              onClick={() => {
                setIsEditing(!isEditing);
              }}
            >
              {isEditing ? <VisibilityIcon /> : <ModeEditOutlineIcon />}
            </IconButton>
          </Box>
        </Tooltip>
      </Box>
      <MarkdownContent
        value={value}
        isEditing={isEditing}
        onChange={handleChange}
      />
    </Box>
  );
};
