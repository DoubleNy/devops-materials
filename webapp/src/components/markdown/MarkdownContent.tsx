import { forwardRef, useCallback } from "react";
import { MarkdownEditor } from "./MarkdownEditor";
import { MarkdownViewer } from "./MarkdownViewer";
import { Box } from "@mui/material";

export type MarkdownCellProps = {
  value: string;
  onChange?: (value?: string) => void;
  isEditing?: boolean;
  onExitEdit?: () => void;
  onChangeContentSize?: (size: number) => void;
};

export const MarkdownContent = forwardRef<HTMLDivElement, MarkdownCellProps>(
  ({ value, isEditing, onChange, onExitEdit, onChangeContentSize }, ref) => {
    const onExitEditingHandler = useCallback(() => {
      onExitEdit?.();
    }, [onExitEdit]);

    return (
      <Box>
        {isEditing ? (
          <MarkdownEditor
            value={value}
            onChange={onChange}
            onExitEditing={onExitEditingHandler}
            focusOnMount
            onChangeContentSize={onChangeContentSize}
          />
        ) : (
          <MarkdownViewer content={value} />
        )}
      </Box>
    );
  }
);
