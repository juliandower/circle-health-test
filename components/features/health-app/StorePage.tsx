import React from 'react';
import { SearchBar } from './SearchBar';
import { BetaBanner } from './BetaBanner';
import { TabBar } from './TabBar';
import { ContentCard } from './ContentCard';

export const StorePage: React.FC = () => {
  return (
    <div className="grid grid-rows-[auto_1fr_auto] min-h-screen gap-8 font-[family-name:var(--font-be-vietnam-pro)]" style={{ margin: 0, padding: 0, width: '100%', maxWidth: '100vw', overflowX: 'hidden' }}>
      <header className="flex flex-col gap-4">
        <SearchBar />
        <BetaBanner />
        <TabBar />
      </header>
      
      <main className="flex flex-col items-center justify-center py-8">
        <ContentCard />
      </main>
      
      <footer className="flex gap-6 flex-wrap items-center justify-center">
        {/* Footer content */}
      </footer>
    </div>
  );
};
