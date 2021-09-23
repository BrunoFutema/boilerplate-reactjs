import { animated } from 'react-spring';

import styled, { css } from 'styled-components';

import { borders } from '@components/bosons/borders';
import { colors } from '@components/bosons/colors';
import { typography } from '@components/bosons/typography';
import { ToastMessage } from '@contexts/ReactToastContext';

type IToastProps = Pick<ToastMessage, 'type'>;

const toastVariations = {
  success: css`
    background: ${colors.notifications.success[500]};
  `,
  info: css`
    background: ${colors.notifications.info[500]};
  `,
  warning: css`
    background: ${colors.notifications.warning[500]};
  `,
  error: css`
    background: ${colors.notifications.error[500]};
  `,
};

export const Container = styled(animated.div)<IToastProps>`
  width: 300px;

  border-radius: ${borders.radii[300]};

  padding: 16px;

  position: relative;

  display: flex;
  gap: 16px;
  align-items: flex-start;

  cursor: pointer;

  div {
    display: flex;
    flex: 1;
    flex-direction: column;
    justify-content: center;

    strong {
      color: ${colors.white};
      font-family: ${typography.fontFamily};
      font-size: ${typography.fontSize.extraLarge};
      line-height: ${typography.lineHeight};
    }

    p {
      color: ${colors.white};
      font-family: ${typography.fontFamily};
      font-size: ${typography.fontSize.small};
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

  ${({ type = 'info' }) => toastVariations[type]}
`;
