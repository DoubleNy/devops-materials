// import { Overrides } from "@material-ui/core/styles/overrides";

import { ComponentsProps, Theme } from "@mui/material/styles";

export type MuiComponentThemeDefinition<TClassKey extends string, TProps> = {
  props: Partial<TProps>;
  override: (theme: Theme) => Partial<CSSStyleRule>;
};

export const makeThemeComponentProps = (
  definitions: Record<string, MuiComponentThemeDefinition<string, object>>
) =>
  Object.entries(definitions).reduce<ComponentsProps>(
    (defaults, [name, { props }]) => ({
      ...defaults,
      [name]: props,
    }),
    {}
  );

export const makeThemeComponentOverrides = (
  definitions: Record<string, MuiComponentThemeDefinition<string, object>>,
  theme: Theme
) =>
  Object.entries(definitions).reduce(
    (defaults, [name, { override }]) => ({
      ...defaults,
      [name]: override(theme),
    }),
    {}
  );
