import styled, { css } from 'styled-components';

import { colors } from '@components/bosons/colors';
import { shadows } from '@components/bosons/shadows';

interface IContainerProps {
  isFocused: boolean;
  isFilled: boolean;
  hasLabel?: boolean;
}

const containerVariations = {
  focused: css`
    border-color: ${colors.primary[400]};
    box-shadow: ${shadows.normal} ${colors.primary[500]};
  `,
  filled: css`
    border-color: ${colors.primary[600]};
  `,
  errored: css`
    border-color: ${colors.alerts.error[500]};

    transition: none;
  `,
  hasLabel: css`
    input {
      height: 80%;
    }
  `,
};

export const Container = styled.div<IContainerProps>`
  ${({ theme, isFocused, isFilled, hasLabel }) => css`
    height: 40px;

    border-radius: ${theme.borders.radii[300]};
    border: 2px solid ${theme.colors.input.border};
    background: ${theme.colors.input.background};

    position: relative;

    display: flex;
    align-items: center;
    justify-content: center;

    transition: all 400ms;

    input {
      height: 100%;

      border: 0;
      border-radius: ${theme.borders.radii[300]};
      background: transparent;
      outline: 0;

      color: ${theme.colors.input.color};
      font-size: ${theme.typography.fontSize.normal};

      padding: 8px;

      flex: 1;
      align-self: flex-end;

      transition: all 400ms;
    }

    ${isFocused && containerVariations.focused}
    ${isFilled && containerVariations.filled}
    ${isFocused && hasLabel && containerVariations.hasLabel}
    ${isFilled && hasLabel && containerVariations.hasLabel}
  `}
`;

type ILabelContainerProps = IContainerProps;

const labelContainerVariations = {
  focused: css`
    background: ${colors.primary[500]};

    top: -0.7rem;
    left: 8px;

    opacity: 1;
    visibility: visible;
  `,
  filled: css`
    background: ${colors.primary[600]};

    top: -0.7rem;
    left: 8px;

    opacity: 1;
    visibility: visible;
  `,
};

export const LabelContainer = styled.div<ILabelContainerProps>`
  ${({ theme, isFocused, isFilled }) => css`
    background: ${theme.colors.primary[500]};

    color: ${theme.colors.white};
    font-size: ${theme.typography.fontSize.small};
    font-weight: ${theme.typography.fontWeight.normal};

    padding: 2px 8px;

    position: absolute;
    top: 0;
    left: 8px;

    opacity: 0;
    visibility: hidden;

    display: flex;
    align-items: center;
    justify-content: center;

    transition: all 400ms;

    ${isFocused && labelContainerVariations.focused}
    ${isFilled && labelContainerVariations.filled}
  `}
`;
