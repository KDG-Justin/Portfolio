import { createContext } from 'react';


export interface OpenApp {
  id: string | number;
  name: string;
  icon: string; 
}

interface WindowsContextType {
  openApps: OpenApp[];
  openApplication: (app: OpenApp) => void;
  closeApplication: (id: string | number) => void;
}

export const WindowsContext = createContext<WindowsContextType | undefined>(undefined);