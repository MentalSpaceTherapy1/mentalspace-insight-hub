import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { MemoryRouter, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import ScrollToTop from './components/ScrollToTop';
import FormIntegration from './components/FormIntegration';

// Import pages for SSR
import Index from './pages/Index';
import Services from './pages/Services';  
import Insights from './pages/Insights';
import Adults from './pages/services/Adults';
import AnxietyBasics from './pages/insights/AnxietyBasics';
import OnlineTherapy from './pages/OnlineTherapy';
import CouplesTherapy from './pages/CouplesTherapy';
import TeenTherapy from './pages/TeenTherapy';

export function render(url: string) {
  const helmetContext = {} as any;
  
  // For SSR, we need to override the router to use MemoryRouter with the specific URL
  process.env.SSR_URL = url;
  
  const html = ReactDOMServer.renderToString(
    React.createElement(HelmetProvider, { context: helmetContext },
      React.createElement(MemoryRouter, { initialEntries: [url] }, 
        React.createElement('div', null,
          React.createElement(ScrollToTop),
          React.createElement(FormIntegration, null,
            React.createElement(Routes, null,
              React.createElement(Route, { path: "/", element: React.createElement(Index) }),
              React.createElement(Route, { path: "/services", element: React.createElement(Services) }),
              React.createElement(Route, { path: "/insights", element: React.createElement(Insights) }),
              React.createElement(Route, { path: "/services/adults", element: React.createElement(Adults) }),
              React.createElement(Route, { path: "/insights/anxiety-basics", element: React.createElement(AnxietyBasics) }),
              React.createElement(Route, { path: "/online-therapy", element: React.createElement(OnlineTherapy) }),
              React.createElement(Route, { path: "/couples-therapy", element: React.createElement(CouplesTherapy) }),
              React.createElement(Route, { path: "/teen-therapy", element: React.createElement(TeenTherapy) })
            )
          )
        )
      )
    )
  );
  
  const { helmet } = helmetContext;
  
  return {
    html,
    helmet: helmet || {}
  };
}