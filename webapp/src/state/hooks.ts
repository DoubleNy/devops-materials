import { useState } from "@hookstate/core";
import { state } from "./state";

export const useCurrentContent = () => {
  return useState(state.currentContent);
};
