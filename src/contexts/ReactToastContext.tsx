import React, { createContext, useCallback, useMemo, useState } from 'react';

import { v4 } from 'uuid';

import { Toasts } from '@components/molecules/Toasts';

export type ToastMessage = {
  id: string;
  type?: 'info' | 'success' | 'warning' | 'error';
  title: string;
  description?: string;
};

export interface IToastContext {
  addToast: (message: Omit<ToastMessage, 'id'>) => void;
  removeToast: (id: string) => void;
}

const ToastContext = createContext<IToastContext>({} as IToastContext);

interface IToastProviderProps {
  max?: number;
}

const ToastProvider: React.FC<IToastProviderProps> = ({
  max = 4,
  children,
}) => {
  const [messages, setMessages] = useState<ToastMessage[]>([]);

  const addToast = useCallback(
    ({ title, description, type }: Omit<ToastMessage, 'id'>) => {
      setMessages(prevMessages =>
        prevMessages.length === max
          ? prevMessages
          : [...prevMessages, { id: v4(), title, description, type }],
      );
    },
    [max],
  );

  const removeToast = useCallback((id: string) => {
    setMessages(prevMessages =>
      prevMessages.filter(message => message.id !== id),
    );
  }, []);

  const value = useMemo(
    () => ({ addToast, removeToast }),
    [addToast, removeToast],
  );

  return (
    <ToastContext.Provider value={value}>
      {children}

      <Toasts messages={messages} />
    </ToastContext.Provider>
  );
};

export { ToastContext, ToastProvider };
