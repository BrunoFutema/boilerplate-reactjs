import React from 'react';

import { ToastProvider } from './ReactToastContext';

const AppProvider: React.FC = ({ children }) => {
  return <ToastProvider>{children}</ToastProvider>;
};

export { AppProvider };
