export type Chapter = {
  title: string;
  content: string;
  caption: string;
};

export type AppState = {
  currentContent: Chapter | null;
};
