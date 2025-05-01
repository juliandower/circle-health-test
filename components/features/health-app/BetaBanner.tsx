import React from 'react';

export const BetaBanner: React.FC = () => {
  return (
    <div className="bg-gray-100 text-gray-700 px-4 py-2 rounded-md text-xs flex items-center justify-center">
      <span>BETA · Circle AI can make mistakes. Check important info.</span>
    </div>
  );
};
