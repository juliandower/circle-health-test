import React, { useState } from 'react';
import { SearchBar } from './SearchBar';
import { BetaBanner } from './BetaBanner';
import { TabBar } from './TabBar';
import { ContentCard } from './ContentCard';

export const StorePage: React.FC = () => {
  // State to track if search bar is focused
  const [isSearchFocused, setIsSearchFocused] = useState(false);

  // Handler for search bar focus changes
  const handleSearchFocusChange = (isFocused: boolean) => {
    setIsSearchFocused(isFocused);
  };

  return (
    <div className="grid grid-rows-[auto_1fr_auto] min-h-screen gap-8 font-[family-name:var(--font-be-vietnam-pro)]" style={{ margin: 0, padding: 0, width: '100%', maxWidth: '100vw', overflowX: 'hidden' }}>
      <header className="flex flex-col gap-4">
        <SearchBar onFocusChange={handleSearchFocusChange} />
        <BetaBanner />
        {/* Only show TabBar when search is not focused */}
        {!isSearchFocused && <TabBar />}
      </header>
      
      {/* Only show main content when search is not focused */}
      {!isSearchFocused && (
        <main className="flex flex-col items-center justify-center py-8">
          <ContentCard />
        </main>
      )}
      
      <footer className="flex gap-6 flex-wrap items-center justify-center">
        {/* Footer content */}
      </footer>
    </div>
  );
};
