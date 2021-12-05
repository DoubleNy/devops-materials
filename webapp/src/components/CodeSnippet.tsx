import * as React from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { CODE_BACKGROUND } from "../themes/themes";

type CodeSnippetProps = { content: string };

export const CodeSnippet: React.FC<CodeSnippetProps> = ({ content }) => {
  return (
    <SyntaxHighlighter
      style={atomOneDark}
      customStyle={{
        height: "100%",
        backgroundColor: CODE_BACKGROUND,
        borderRadius: 6,
        fontStyle: "monospace",
      }}
    >
      {content}
    </SyntaxHighlighter>
  );
};
