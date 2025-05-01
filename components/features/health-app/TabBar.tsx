import React, { useState } from 'react';
import { TABS } from '@lib/constants';

export const TabBar: React.FC = () => {
  const [activeTab, setActiveTab] = useState(TABS[0]);

  return (
    <div className="flex space-x-8 overflow-x-auto py-1">
      {TABS.map((tab) => (
        <button
          key={tab}
          className={`text-sm ${activeTab === tab ? 'font-medium text-black border-b-2 border-black' : 'text-gray-500'}`}
          onClick={() => setActiveTab(tab)}
          style={{ background: 'transparent', border: 'none', padding: '4px 0', borderBottom: activeTab === tab ? '2px solid black' : 'none' }}
        >
          {tab}
        </button>
      ))}
    </div>
  );
};

