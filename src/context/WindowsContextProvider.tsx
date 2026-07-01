import { useState, useContext } from 'react';
import type { ReactElement } from 'react';
import { WindowsContext, type OpenApp } from './WindowsContext';


export interface WithChildren {
    children: ReactElement | ReactElement[]
}

export function WindowsProvider({children} : WithChildren) {
  const [openApps, setOpenApps] = useState<OpenApp[]>([]);


  // opens app on taskbar
  const openApplication = (app: OpenApp) => {
    setOpenApps((prev) => {
      if (prev.some((item) => item.id === app.id)) return prev;
      return [...prev, app];
    });
  };

  // closes app from taskbar
  const closeApplication = (id: string | number) => {
    setOpenApps((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <WindowsContext.Provider value={{ openApps, openApplication, closeApplication }}>
      {children}
    </WindowsContext.Provider>
  );
}

export function useWindows() {
  const context = useContext(WindowsContext);
  if (!context) throw new Error("WindowsContext should be used inside a provider");
  return context;
}