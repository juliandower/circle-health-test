import React, { useState } from 'react';
import { TABS } from '@lib/constants';

export const TabBar: React.FC = () => {
  const [activeTab, setActiveTab] = useState(TABS[0]);

  return (
    <div className="relative font-be-vietnam-pro" style={{ width: '100%', paddingTop: '24px', paddingBottom: '24px', paddingLeft: '24px', paddingRight: '24px', overflow: 'hidden' }}>
      {/* Main tab container */}
      <div 
        className="no-scrollbar"
        style={{ 
          overflowX: 'auto', 
          overflowY: 'hidden',
          scrollbarWidth: 'none', /* Firefox */
          msOverflowStyle: 'none', /* IE and Edge */
          height: '40px', 
          whiteSpace: 'nowrap',
          position: 'relative',
          width: 'calc(100% - 48px)', /* Adjust width to account for the right padding */
          marginRight: '24px', /* Add margin instead of padding for the right side */
          boxShadow: 'inset 0 -1px 0 0 #E5E7EB', /* Gray line at the bottom */
        }}
      >

        <div style={{ height: '40px', display: 'inline-flex' }}>
          {TABS.map((tab, index) => (
            <div 
              key={tab}
              style={{
                display: 'inline-block',
                position: 'relative',
                marginLeft: index === 0 ? '0' : '24px',
                height: '40px'
              }}
            >
              <button
                onClick={() => setActiveTab(tab)}
                style={{
                  background: 'transparent', 
                  border: 'none',
                  padding: '0',
                  height: '38px',
                  fontFamily: 'Be Vietnam Pro, sans-serif',
                  fontSize: '14px',
                  lineHeight: '24px',
                  letterSpacing: '-1%',
                  fontWeight: 500,
                  color: activeTab === tab ? '#000000' : '#6F7070'
                }}
              >
                {tab}
              </button>
              
              {/* Black underline for active tab */}
              {activeTab === tab && (
                <div 
                  style={{
                    position: 'absolute',
                    bottom: '0',
                    left: 0,
                    width: '100%',
                    height: '2px',
                    backgroundColor: 'black'
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
