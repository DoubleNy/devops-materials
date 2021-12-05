import { createState } from "@hookstate/core";
import { AppState } from "./types";
import { helloworld } from "../components/chapters-content/getting-started";

export const state = createState<AppState>({
  currentContent: helloworld,
});
