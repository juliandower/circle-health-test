import React, { useState } from 'react';
import { TABS } from '@lib/constants';


export const TabBar: React.FC = () => {
  const [activeTab, setActiveTab] = useState(TABS[4]); // Start with 'Energy'

  return (
    // Outermost container - simplified, padding here is for component layout
    <div
      className="relative font-be-vietnam-pro"
      style={{
        width: '100%', // Takes full available width
        paddingTop: '24px', // Overall component top padding
        paddingBottom: '24px', // Overall component bottom padding
      }}
    >
      {/* Scrollable container: Handles scrolling and edge padding */}
      <div
        className="no-scrollbar"
        style={{
          overflowX: 'auto', // Enable horizontal scrolling
          overflowY: 'hidden',
          scrollbarWidth: 'none' /* Firefox */,
          msOverflowStyle: 'none' /* IE and Edge */,
          whiteSpace: 'nowrap', // Keep tabs on one line
          // Add padding INSIDE the scroll area
          paddingLeft: '24px', // Space on the left edge
          paddingRight: '24px', // Space on the right edge
        }}
      >
        {/* Inner Tab wrapper: Sizes to content, gets the border */}
        <div
          style={{
            display: 'inline-flex', // Shrinks to fit content width
            position: 'relative', // For positioning active indicator
            // Apply the faint gray line to this wrapper
            borderBottom: '1px solid #E5E7EB', // Gray line
            alignItems: 'flex-start', // Align items to the top if heights differ
          }}
        >
          {TABS.map((tab, index) => (
            // Container for each tab + its underline
            <div
              key={tab}
              style={{
                display: 'inline-block', // Keep inline
                position: 'relative', // For the underline
                // Use margin for spacing between tabs
                marginLeft: index === 0 ? '0' : '24px',
                // Let button padding determine clickable height/area
              }}
            >
              <button
                onClick={() => setActiveTab(tab)}
                style={{
                  // Use padding for button size and text spacing
                  paddingTop: '10px',
                  paddingBottom: '10px', // This controls space below text before border
                  paddingLeft: '0', // No extra horizontal padding needed here
                  paddingRight: '0',
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  fontFamily: 'var(--font-be-vietnam-pro)',
                  fontWeight: activeTab === tab ? 600 : 400,
                  fontSize: '14px',
                  lineHeight: '20px', // Matches font size + vertical padding
                  color: activeTab === tab ? 'black' : '#6B7280',
                  whiteSpace: 'nowrap', // Prevent text wrapping within a tab
                }}
              >
                {tab}
              </button>

              {/* Black underline for active tab */}
              {activeTab === tab && (
                <div
                  style={{
                    position: 'absolute',
                    // Position it to overlap the wrapper's border-bottom
                    bottom: '-1px',
                    left: 0,
                    width: '100%',
                    height: '2px', // Make it slightly thicker than the gray border
                    backgroundColor: 'black',
                  }}
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
