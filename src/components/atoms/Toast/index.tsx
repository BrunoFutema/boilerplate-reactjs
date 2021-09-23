import React, { useEffect, useMemo } from 'react';
import {
  FiCheckCircle,
  FiInfo,
  FiAlertTriangle,
  FiXCircle,
  FiX,
} from 'react-icons/fi';

import { CSSProperties } from 'styled-components';

import { colors } from '@components/bosons/colors';
import { ToastMessage } from '@contexts/ReactToastContext';
import { useToast } from '@hooks/useToast';

import { Container } from './styles';

interface IToastProps {
  message: ToastMessage;
  style?: CSSProperties;
}

const Toast: React.FC<IToastProps> = ({ message, style }) => {
  const { removeToast } = useToast();

  useEffect(() => {
    const timer = setTimeout(() => removeToast(message.id), 3000);

    return () => clearTimeout(timer);
  }, [message.id, removeToast]);

  const icons = useMemo(() => {
    return {
      success: <FiCheckCircle color={colors.white} size={24} />,
      info: <FiInfo color={colors.white} size={24} />,
      warning: <FiAlertTriangle color={colors.white} size={24} />,
      error: <FiXCircle color={colors.white} size={24} />,
    };
  }, []);

  return (
    <Container key={message.id} type={message.type} style={style}>
      {icons[message.type || 'info']}

      <div>
        <strong>{message.title}</strong>

        <p>{message.description}</p>
      </div>

      <button type="button" onClick={() => removeToast(message.id)}>
        <FiX color={colors.white} size={24} />
      </button>
    </Container>
  );
};

export { Toast };
