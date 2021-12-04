import { MuiComponentThemeDefinition } from "../utils";
import { TextFieldClassKey, TextFieldProps } from "@mui/material";

export const MuiTextField: MuiComponentThemeDefinition<
  TextFieldClassKey,
  TextFieldProps
> = {
  props: {
    variant: "outlined",
    size: "small",
  },
  override: () => ({}),
};
