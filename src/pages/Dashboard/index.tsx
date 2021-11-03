import React from 'react';

import { Input } from '@components/atoms';
import { useAuth } from '@hooks/useAuth';
import { useTheme } from '@hooks/useTheme';
import { useToast } from '@hooks/useToast';

import { Container } from './styles';

const Dashboard: React.FC = () => {
  const { signOut } = useAuth();
  const { toggleTheme } = useTheme();
  const { addToast } = useToast();

  return (
    <Container>
      <h1>Dashboard</h1>

      <Input name="Dashboard" placeholder="Dashboard" />

      <button type="button" onClick={toggleTheme}>
        Mudar tema
      </button>

      <button
        type="button"
        onClick={() => addToast({ title: 'Cadastrado com sucesso!' })}
      >
        Chamar Toast
      </button>

      <button type="button" onClick={signOut}>
        Sair
      </button>
    </Container>
  );
};

export { Dashboard };
