import { createContext } from 'react';


export interface OpenApp {
  id: string | number;
  name: string;
  icon: string; 
  link: string; 
}

interface WindowsContextType {
  openApps: OpenApp[];
  currentOpenApp: OpenApp | undefined;
  openApplication: (app: OpenApp) => void;
  closeApplication: (id: string | number) => void;
}

export const WindowsContext = createContext<WindowsContextType | undefined>(undefined);