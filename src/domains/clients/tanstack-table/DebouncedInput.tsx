import React from 'react';
import { Input } from '@nextui-org/input';

// A typical debounced input react component
export default function DebouncedInput({
  value: initialValue,
  onChange,
  debounce = 500,
}: {
  value: string | number;
  onChange: (value: string | number) => void;
  debounce?: number;
} & Omit<React.InputHTMLAttributes<HTMLInputElement>, 'onChange'>) {
  const [value, setValue] = React.useState(initialValue);

  React.useEffect(() => {
    setValue(initialValue);
  }, [initialValue]);

  React.useEffect(() => {
    const timeout = setTimeout(() => {
      onChange(value);
    }, debounce);

    return () => clearTimeout(timeout);
  }, [value]);

  return (
    <Input
      style={{ width: '60px' }}
      className='border rounded border-[#eee]'
      placeholder='Search...'
      size='sm'
      value={value as string}
      onChange={(e) => setValue(e.target.value)}
    />
  );
}
