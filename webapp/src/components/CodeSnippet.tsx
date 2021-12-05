import * as React from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";

type CodeSnippetProps = { content: string };

export const CodeSnippet: React.FC<CodeSnippetProps> = ({ content }) => {
  return (
    <SyntaxHighlighter
      style={atomOneDark}
      customStyle={{
        height: "100%",
        backgroundColor: "rgba(19, 47, 76, 0.5)",
        borderRadius: 6,
        fontStyle: "monospace",
      }}
    >
      {content}
    </SyntaxHighlighter>
  );
};
