import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import App from './App';
import { HelmetProvider } from 'react-helmet-async';

export function render(url: string) {
  const helmetContext = {} as any;
  
  const html = ReactDOMServer.renderToString(
    React.createElement(StaticRouter, { location: url }, 
      React.createElement(HelmetProvider, { context: helmetContext },
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