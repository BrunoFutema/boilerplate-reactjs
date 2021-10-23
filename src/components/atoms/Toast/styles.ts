import { animated } from 'react-spring';

import styled, { css } from 'styled-components';

import { colors } from '@components/bosons/colors';
import { ToastMessage } from '@contexts/ReactToastContext';

interface IToastProps extends Pick<ToastMessage, 'type'> {
  description?: 1 | 0;
}

const toastVariations = {
  success: css`
    background: ${colors.alerts.success[500]};
  `,
  info: css`
    background: ${colors.alerts.info[500]};
  `,
  warning: css`
    background: ${colors.alerts.warning[500]};
  `,
  error: css`
    background: ${colors.alerts.error[500]};
  `,
};

export const Container = styled(animated.div)<IToastProps>`
  ${({ theme, description, type = 'info' }) => css`
    width: 300px;

    border-radius: ${theme.borders.radii[300]};

    padding: 14px 16px 16px 16px;

    position: relative;

    display: flex;
    gap: 16px;
    align-items: ${description ? 'flex-start' : 'center'};

    cursor: pointer;

    ${description &&
    css`
      > svg {
        margin-top: 6px;
      }

      button svg {
        margin-top: 4px;
      }
    `};

    div {
      display: flex;
      flex: 1;
      flex-direction: column;
      justify-content: center;

      strong {
        color: ${theme.colors.white};
        font-family: ${theme.typography.fontFamily};
        font-size: ${theme.typography.fontSize.normal};
        line-height: ${theme.typography.lineHeight.normal};
      }

      p {
        color: ${theme.colors.white};
        font-family: ${theme.typography.fontFamily};
        font-size: ${theme.typography.fontSize.small};

        margin-top: 4px;
      }
    }

    button {
      border: none;
      background: none;

      transition: filter 400ms;

      display: flex;
      align-items: center;

      &:hover {
        filter: brightness(1.8);
      }
    }

    & + div {
      margin-top: 16px;
    }

    ${toastVariations[type]}
  `}
`;
