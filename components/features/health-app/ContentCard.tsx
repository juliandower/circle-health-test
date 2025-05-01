import React from 'react';
import { Button } from '@ui/Button';

export const ContentCard: React.FC = () => {
  return (
    <div className="w-full max-w-2xl bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">

      <div className="p-6">
        <h2 className="text-xl sm:text-2xl font-bold mb-2">Test your gut health from home</h2>
        <div className="flex flex-col sm:flex-row gap-3">
          <Button variant="primary" className="sm:flex-1">
            Shop tests
          </Button>
          <Button variant="secondary" className="sm:flex-1">
            Start with a gut quiz
          </Button>
        </div>
      </div>
    </div>
  );
};
