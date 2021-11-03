import React, {
  InputHTMLAttributes,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';

import { useUnform } from '@hooks/useUnform';

import { Container, LabelContainer } from './styles';

interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label?: string;
}

const Input: React.FC<IInputProps> = ({ name, label, disabled, ...rest }) => {
  const unform = useUnform(name);

  const inputRef = useRef<HTMLInputElement>(null);

  const [isFocused, setIsFocused] = useState<boolean>(false);
  const [isFilled, setIsFilled] = useState<boolean>(false);

  const handleInputFocus = useCallback(() => {
    if (disabled) return;

    setIsFocused(true);
  }, [disabled]);

  const handleInputBlur = useCallback(() => {
    setIsFocused(false);

    setIsFilled(!!inputRef.current?.value);
  }, []);

  useEffect(() => {
    if (unform) {
      unform.registerField({
        name: unform.fieldName,
        ref: inputRef.current,
        path: 'value',
        setValue: (ref: HTMLInputElement, value: any) => {
          ref.value = value;
        },
        clearValue: (ref: HTMLInputElement) => {
          ref.value = '';
        },
      });
    }
  }, [unform]);

  return (
    <Container isFocused={isFocused} isFilled={isFilled} hasLabel={!!label}>
      {label && (
        <LabelContainer isFocused={isFocused} isFilled={isFilled}>
          {label}
        </LabelContainer>
      )}

      <input
        {...rest}
        ref={inputRef}
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
      />
    </Container>
  );
};

export { Input };
