import { MuiComponentThemeDefinition } from "../utils";
import { YELLOW } from "./utils";
import { DialogClassKey, DialogProps } from "@mui/material";

export const MuiDialog: MuiComponentThemeDefinition<
  DialogClassKey,
  DialogProps
> = {
  props: {
    transitionDuration: 100,
  },

  override: ({ zIndex }) => ({}),
};
