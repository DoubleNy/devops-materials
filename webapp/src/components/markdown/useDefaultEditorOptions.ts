import { editor } from 'monaco-editor';

export const useDefaultEditorOptions = (): editor.IEditorOptions => {
  return {
    scrollBeyondLastLine: false,
    renderLineHighlight: 'none',
    wordWrap: 'bounded',
    lineDecorationsWidth: 0,
    lineHeight: 20,
    lineNumbers: 'on',
    lineNumbersMinChars: 0,
    quickSuggestions: false,
    padding: {
      top: 0,
      bottom: 0,
    },
    scrollbar: {
      alwaysConsumeMouseWheel: false,
    },
  };
};
