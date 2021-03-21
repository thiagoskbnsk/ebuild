import { createShouldForwardProp } from '@styled-system/should-forward-prop';

import styled from '@emotion/styled';

import {
  background,
  BackgroundProps,
  border,
  BorderProps,
  color,
  ColorProps,
  compose,
  flexbox,
  FlexboxProps,
  grid,
  GridProps,
  layout,
  LayoutProps,
  position,
  PositionProps,
  shadow,
  ShadowProps,
  space,
  SpaceProps,
  typography,
  TypographyProps,
} from 'styled-system';

import { customProps } from './Box.config';

export const systemProps = compose(
  layout,
  color,
  space,
  border,
  background,
  grid,
  position,
  shadow,
  typography,
  flexbox,
);

const propNames = systemProps.propNames || [];
const shouldForwardProp = createShouldForwardProp(propNames);

export interface StyledSystemProps
  extends BackgroundProps,
    BorderProps,
    ColorProps,
    FlexboxProps,
    GridProps,
    LayoutProps,
    PositionProps,
    ShadowProps,
    SpaceProps,
    TypographyProps {}

export const Box = styled('div', {
  shouldForwardProp,
})<StyledSystemProps>({ boxSizing: 'border-box' }, systemProps, customProps);
