import { MuiComponentThemeDefinition } from "../utils";
import { DividerClassKey, DividerProps } from "@mui/material";

export const MuiDivider: MuiComponentThemeDefinition<
  DividerClassKey,
  DividerProps
> = {
  props: {
    color: "white",
  },
  override: () => ({}),
};
