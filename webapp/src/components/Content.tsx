import * as React from "react";
import Box from "@mui/material/Box";
import { MarkdownContent } from "./markdown/MarkdownContent";
import { useState } from "react";
import { IconButton, Tooltip, Typography } from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import ModeEditOutlineIcon from "@mui/icons-material/ModeEditOutline";
import { useCurrentContent } from "../state/hooks";
import { useScopedDowngradedStateValue } from "./useScopedDowngradedStateValue";

type MainContainerProps = {};

export const Content: React.FC<MainContainerProps> = ({}) => {
  const [isEditing, setIsEditing] = useState(false);
  const currentContent = useScopedDowngradedStateValue(useCurrentContent());
  const [value, setValue] = useState("");

  const handleChange = (content?: string) => {
    if (!content) return;

    setValue(content);
  };

  if (currentContent) {
    return (
      <Box
        sx={{
          p: 4,
        }}
      >
        <Typography variant="h1">{currentContent.title}</Typography>
        <Typography
          variant="h3"
          style={{
            color: "gray",
          }}
        >
          {currentContent.caption}
        </Typography>
        <MarkdownContent value={currentContent.content} />
      </Box>
    );
  }

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
