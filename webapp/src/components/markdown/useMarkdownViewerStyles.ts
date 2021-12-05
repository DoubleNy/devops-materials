import { css } from "@emotion/react";
import { useTheme } from "@mui/material/styles";

export const useMarkdownViewerStyles = () => {
  const { spacing, palette } = useTheme();

  return css`
    line-height: 1.4;

    h1 {
      font-size: 20px;
      font-weight: bold;
    }

    h2 {
      font-size: 16px;
      font-weight: bold;
    }

    h3 {
      font-size: 12px;
      font-weight: bold;
    }

    h4 {
      font-size: 10px;
      font-weight: bold;
    }

    blockquote {
      overflow: auto;
      margin: 0;
      padding: 0 ${spacing(4)}px;
      border-left: 2px solid ${palette.grey[700]};
    }

    ul,
    ol {
      padding-inline-start: ${spacing(4)}px;
    }

    hr {
      border-color: ${palette.grey[700]};
      margin: ${spacing(4)}px 0;
    }

    a {
      text-decoration: none;
    }

    a:hover {
      text-decoration: underline;
    }

    p {
      margin: ${spacing(2)}px 0;
      word-break: break-all;
    }

    img {
      max-width: 100%;
      display: block;
    }
  `;
};
