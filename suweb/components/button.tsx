import { ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'outline';
}

export function Button({ variant = 'default', className, ...props }: ButtonProps) {
  return (
    <button
      className={`px-4 py-2 rounded-md font-semibold ${
        variant === 'outline' ? 'border border-gray-300 text-gray-700' : 'bg-purple-600 text-white'
      } ${className}`}
      {...props}
    />
  );
}
