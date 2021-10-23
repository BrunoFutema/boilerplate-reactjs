import React, { createContext, useState, useMemo, useCallback } from 'react';

export interface IAuthContext {
  signed: boolean;
  signIn: () => void;
  signOut: () => void;
}

const AuthContext = createContext<IAuthContext>({} as IAuthContext);

const AuthProvider: React.FC = ({ children }) => {
  const [signed, setSigned] = useState<boolean>(false);

  const signIn = useCallback(() => {
    setSigned(true);
  }, []);

  const signOut = useCallback(() => {
    setSigned(false);
  }, []);

  const value: IAuthContext = useMemo(() => {
    return { signed, signIn, signOut };
  }, [signed, signIn, signOut]);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export { AuthContext, AuthProvider };
