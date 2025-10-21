import { useEffect, useState } from 'react';

const KONAMI_CODE = [
  'ArrowUp',
  'ArrowUp',
  'ArrowDown',
  'ArrowDown',
  'ArrowLeft',
  'ArrowRight',
  'ArrowLeft',
  'ArrowRight',
  'b',
  'a',
];

export function useKonamiCode(callback: () => void) {
  const [keys, setKeys] = useState<string[]>([]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      setKeys((prevKeys) => {
        const newKeys = [...prevKeys, e.key];
        
        // Keep only the last 10 keys
        if (newKeys.length > KONAMI_CODE.length) {
          newKeys.shift();
        }
        
        // Check if the sequence matches
        if (newKeys.length === KONAMI_CODE.length) {
          const matches = newKeys.every((key, index) => key === KONAMI_CODE[index]);
          if (matches) {
            callback();
            return []; // Reset
          }
        }
        
        return newKeys;
      });
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [callback]);
}

