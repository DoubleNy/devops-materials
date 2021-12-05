import { createState } from "@hookstate/core";
import { AppState } from "./types";

export type Content = any;

export const state = createState<AppState>({
  currentContent: [],
});
