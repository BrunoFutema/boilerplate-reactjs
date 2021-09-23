import React from 'react';

import { useToast } from '@hooks/useToast';

const SignIn: React.FC = () => {
  const { addToast } = useToast();

  return (
    <div>
      <h1>SignIn</h1>

      <button
        type="button"
        onClick={() => addToast({ title: 'Cadastrado com sucesso!' })}
      >
        Chamar Toast
      </button>
    </div>
  );
};

export { SignIn };
