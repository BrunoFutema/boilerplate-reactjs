import React from 'react';

import { AuthProvider } from './ReactAuthContext';
import { ThemeProvider } from './ReactThemeContext';
import { ToastProvider } from './ReactToastContext';

const AppProvider: React.FC = ({ children }) => {
  return (
    <ThemeProvider>
      <AuthProvider>
        <ToastProvider>{children}</ToastProvider>
      </AuthProvider>
    </ThemeProvider>
  );
};

export { AppProvider };
