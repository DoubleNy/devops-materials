import { MuiComponentThemeDefinition } from "../utils";
import { BLUE, YELLOW } from "./utils";
import { ButtonClassKey, ButtonProps } from "@mui/material";

export const MuiButton: MuiComponentThemeDefinition<
  ButtonClassKey,
  ButtonProps
> = {
  props: {
    variant: "outlined",
    size: "large",
    color: "primary",
  },
  override: () => ({}),
};
