import { useEffect, useState } from 'react';

export default function useOnlineStatus() {
  const [isOnline, setIsOnline] = useState(true);

  useEffect(() => {
    window.addEventListener('online', () => {
      setIsOnline(true);
    });
    window.addEventListener('offline', () => {
      setIsOnline(false);
    });
  });

  return isOnline;
}
