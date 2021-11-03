import React from 'react';

import { Input } from '@components/atoms';
import { useAuth } from '@hooks/useAuth';
import { useTheme } from '@hooks/useTheme';
import { useToast } from '@hooks/useToast';

import { Container } from './styles';

const SignIn: React.FC = () => {
  const { signIn } = useAuth();
  const { toggleTheme } = useTheme();
  const { addToast } = useToast();

  return (
    <Container>
      <h1>SignIn</h1>

      <Input label="SignIn" name="SignIn" placeholder="SignIn" />

      <button type="button" onClick={toggleTheme}>
        Mudar tema
      </button>

      <button
        type="button"
        onClick={() => addToast({ title: 'Cadastrado com sucesso!' })}
      >
        Chamar Toast
      </button>

      <button type="button" onClick={signIn}>
        Entrar
      </button>
    </Container>
  );
};

export { SignIn };
