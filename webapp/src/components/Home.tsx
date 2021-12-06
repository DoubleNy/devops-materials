import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import { Content } from "./Content";
import { Chapters } from "./Chapters";
import { Divider, Fade } from "@mui/material";
import { useEffect, useState } from "react";
import { useCurrentContent } from "../state/hooks";
import { useScopedDowngradedStateValue } from "./useScopedDowngradedStateValue";

type MiniDrawerProps = {};

export const Home: React.FC<MiniDrawerProps> = ({}) => {
  const theme = useTheme();
  const [mounted, setMounted] = useState(false);
  const currentContent = useScopedDowngradedStateValue(useCurrentContent());

  useEffect(() => {
    setMounted(true);
  }, [currentContent]);

  return (
    <Box
      display="grid"
      gridTemplateColumns="1fr 1px 4fr"
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
      <Divider orientation="vertical" />
      <Fade in={mounted}>
        <Box>
          <Content />
        </Box>
      </Fade>
    </Box>
  );
};
