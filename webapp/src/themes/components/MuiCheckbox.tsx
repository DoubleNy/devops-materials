import { MuiComponentThemeDefinition } from "../utils";
import { CheckboxClassKey, CheckboxProps } from "@mui/material";

export const MuiCheckbox: MuiComponentThemeDefinition<
  CheckboxClassKey,
  CheckboxProps
> = {
  props: {
    size: "medium",
  },
  override: () => ({}),
};
