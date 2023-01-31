// Copyright (c) ZeroC, Inc. All rights reserved.

import React, { useEffect } from 'react';
import { Platform, Platforms } from 'types';
import { usePlatformContext } from 'context/state';

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

export const LanguageContext = React.createContext([]);

// eslint-disable-next-line no-unused-vars
export const LanguageSelector = () => {
  const { platform, setPlatform } = usePlatformContext();
  const [currentTab, setCurrentTab] = React.useState(platform);
  useEffect(() => {
    switch (platform) {
      case Platform.csharp:
        setCurrentTab(platform);
        break;
      case Platform.rust:
        setCurrentTab(platform);
        break;
      default:
        setCurrentTab(Platform.csharp);
        break;
    }
  }, [platform]);

  return (
    <LanguageContext.Provider value={currentTab as any}>
      <ul role="tablist" className="flex flex-row items-center">
        {Platforms.map((label) => (
          <li key={label}>
            <button
              className={classNames(
                'nav-link my-0 block rounded-xl border-[1.5px] bg-white px-2 py-1 text-xs font-medium uppercase',
                'text-sm leading-tight focus:outline-none focus:ring-0 md:mr-2',
                currentTab === label
                  ? 'border-1 border-primary bg-white text-primary'
                  : 'bg-slate-50 text-slate-500 hover:bg-opacity-80 hover:text-primary'
              )}
              role="tab"
              aria-selected={label === currentTab}
              onClick={() => {
                setPlatform(label);
              }}
            >
              {label}
            </button>
          </li>
        ))}
      </ul>
    </LanguageContext.Provider>
  );
};
