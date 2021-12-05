import { forwardRef } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { useMarkdownViewerStyles } from "./useMarkdownViewerStyles";
import { Box, Typography } from "@mui/material";

type MarkdownViewerProps = {
  content: string;
};

export const MarkdownViewer = forwardRef<HTMLDivElement, MarkdownViewerProps>(
  ({ content }, ref) => {
    const markdownCssStyles = useMarkdownViewerStyles();

    return (
      // Hack: missing ref in Material UI type definitions
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      <Box ref={ref}>
        {content.trim() ? (
          <ReactMarkdown remarkPlugins={[remarkGfm]}>{content}</ReactMarkdown>
        ) : (
          <Typography style={{ opacity: 0.5 }}>
            {"Select edit mode to add content"}
          </Typography>
        )}
      </Box>
    );
  }
);
