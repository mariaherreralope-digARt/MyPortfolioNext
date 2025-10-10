'use client';

import { useState, useEffect } from 'react';

const CookieConsentBanner: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only run in browser
    if (typeof window !== 'undefined') {
      const consent = localStorage.getItem('cookie-consent');
      if (!consent) {
        setIsVisible(true);
      }
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookie-consent', 'true');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 w-full bg-gray-900 text-white px-4 py-3 text-sm flex flex-col sm:flex-row justify-between items-center gap-2 sm:gap-0 z-50 shadow-lg">
      <p className="text-center sm:text-left">
        We use cookies to improve your experience. By continuing, you agree to our{' '}
        <a
          href="/privacy-policy"
          className="underline text-yellow-400 hover:text-yellow-300 transition"
        >
          Privacy Policy
        </a>.
      </p>

      <button
        onClick={handleAccept}
        className="bg-yellow-500 text-gray-900 px-4 py-1 rounded-md hover:bg-yellow-400 transition font-medium"
      >
        Accept
      </button>
    </div>
  );
};

export default CookieConsentBanner;
