import React from 'react';
import { useTransition } from 'react-spring';

import { Toast } from '@components/atoms';
import { ToastMessage } from '@contexts/ReactToastContext';
import { useViewPort } from '@hooks/useViewPort';

import { Container } from './styles';

interface IToastsProps {
  messages: ToastMessage[];
}

const Toasts: React.FC<IToastsProps> = ({ messages }) => {
  const { isMobile, isTablet } = useViewPort();

  const messagesWithTransitions = useTransition(
    messages,
    message => message.id,
    {
      from: { right: '-120%', opacity: 0 },
      enter: {
        right: isMobile ? '0%' : isTablet ? '-56%' : '-80%',
        opacity: 1,
      },
      leave: { right: '-120%', opacity: 0 },
    },
  );

  return (
    <Container>
      {messagesWithTransitions.map(({ key, item, props }) => (
        <Toast key={key} message={item} style={props} />
      ))}
    </Container>
  );
};

export { Toasts };
