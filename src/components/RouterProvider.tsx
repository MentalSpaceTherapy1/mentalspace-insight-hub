import React from 'react';
import { BrowserRouter, MemoryRouter } from 'react-router-dom';

interface RouterProviderProps {
  children: React.ReactNode;
}

const RouterProvider: React.FC<RouterProviderProps> = ({ children }) => {
  // Check if we're in a browser environment (client-side)
  const isBrowser = typeof window !== 'undefined';
  
  if (isBrowser) {
    // Client-side: use BrowserRouter
    return <BrowserRouter>{children}</BrowserRouter>;
  } else {
    // Server-side: use MemoryRouter
    return <MemoryRouter>{children}</MemoryRouter>;
  }
};

export default RouterProvider;