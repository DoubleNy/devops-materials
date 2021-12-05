import { editor } from "monaco-editor";
import React, { forwardRef, useCallback, useState } from "react";
import { MAX_ALLOWED_CHARS } from "./constants";
import { Box } from "@mui/material";
import { useDefaultEditorOptions } from "./useDefaultEditorOptions";
import MonacoEditor, { OnChange } from "@monaco-editor/react";

export type MarkdownEditorProps = {
  value: string;
  onChange?: OnChange;
  onExitEditing: () => void;
  focusOnMount?: boolean;
  onChangeContentSize?: (size: number) => void;
};

export const MarkdownEditor = forwardRef<HTMLDivElement, MarkdownEditorProps>(
  (
    { value, onChange, onExitEditing, focusOnMount, onChangeContentSize },
    ref
  ) => {
    const editorDefaultOptions = useDefaultEditorOptions();
    const minContentHeight = (editorDefaultOptions?.lineHeight ?? 0) * 10;
    const maxContentHeight = (editorDefaultOptions?.lineHeight ?? 0) * 20;

    const [content, setContent] = useState(value);
    const [height, setHeight] = useState(minContentHeight);

    const onEditorContentSizeChange = useCallback(
      (event: editor.IContentSizeChangedEvent) => {
        setHeight(
          Math.min(
            Math.max(minContentHeight, event.contentHeight),
            maxContentHeight
          )
        );
      },
      [maxContentHeight, minContentHeight]
    );

    return (
      <Box
        // Hack: missing ref in Material UI type definitions
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        ref={ref}
        height={height}
        onBlur={() => {
          onExitEditing?.();
        }}
      >
        <MonacoEditor
          language="markdown"
          options={{
            wordWrap: "on",
            lineNumbers: (n) => `<span style="padding-left: 8px;">${n}</span>`,
          }}
          value={content}
          onChange={onChange}
        />
      </Box>
    );
  }
);
