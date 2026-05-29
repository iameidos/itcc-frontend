'use client';

import { X, Search } from 'lucide-react';
import { useState } from 'react';

interface SearchInputProps {
  placeholder?: string;
  value?: string;
  onChange?: (value: string) => void;
  className?: string;
}

export function SearchInput({ placeholder = 'Search...', value, onChange, className = '' }: SearchInputProps) {
  const [internalValue, setInternalValue] = useState('');

  const currentValue = value !== undefined ? value : internalValue;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    if (value === undefined) setInternalValue(val);
    onChange?.(val);
  };

  const clear = () => {
    if (value === undefined) setInternalValue('');
    onChange?.('');
  };

  return (
    <div className={`relative flex items-center bg-muted rounded-lg px-3 py-2 ${className}`}>
      <Search className="h-4 w-4 mr-2" />

      <input type="text" value={currentValue} onChange={handleChange} placeholder={placeholder} className="w-full bg-transparent outline-none text-sm" />

      {currentValue && (
        <button onClick={clear} className="text-muted-foreground">
          <X className="h-4 w-4" />
        </button>
      )}
    </div>
  );
}
