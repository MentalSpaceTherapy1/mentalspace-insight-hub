import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { MemoryRouter } from 'react-router-dom';
import App from './App';
import { HelmetProvider } from 'react-helmet-async';

export function render(url: string) {
  const helmetContext = {} as any;
  
  const html = ReactDOMServer.renderToString(
    React.createElement(HelmetProvider, { context: helmetContext },
      React.createElement(MemoryRouter, { initialEntries: [url] }, 
        React.createElement(App)
      )
    )
  );
  
  const { helmet } = helmetContext;
  
  return {
    html,
    helmet: helmet || {}
  };
}