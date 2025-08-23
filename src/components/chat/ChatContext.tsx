import React, { createContext, useContext, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

interface ChatContextType {
  shouldShowChat: boolean;
  pageContext: Record<string, any>;
}

const ChatContext = createContext<ChatContextType>({
  shouldShowChat: true,
  pageContext: {}
});

export const useChatContext = () => useContext(ChatContext);

interface ChatProviderProps {
  children: React.ReactNode;
}

export const ChatProvider: React.FC<ChatProviderProps> = ({ children }) => {
  const location = useLocation();
  const [pageContext, setPageContext] = useState<Record<string, any>>({});

  const shouldShowChat = !location.pathname.startsWith('/admin');

  useEffect(() => {
    // Set page-specific context for better AI responses
    const context: Record<string, any> = {
      currentPage: location.pathname,
      timestamp: new Date().toISOString()
    };

    // Add page-specific context
    if (location.pathname === '/mental-health-tests') {
      context.pageType = 'assessments';
      context.availableAssessments = [
        'depression', 'anxiety', 'ptsd', 'adhd', 'bipolar', 'ocd', 
        'panic', 'social-anxiety', 'substance-use', 'eating-disorders'
      ];
    } else if (location.pathname.startsWith('/blog/')) {
      context.pageType = 'blog';
      context.articleTopic = location.pathname.replace('/blog/', '');
    } else if (location.pathname.startsWith('/mental-health-library/')) {
      context.pageType = 'condition-info';
      context.condition = location.pathname.replace('/mental-health-library/', '');
    } else if (location.pathname.includes('therapy')) {
      context.pageType = 'therapy-services';
      context.serviceType = location.pathname.replace('/', '').replace('-', ' ');
    } else if (location.pathname === '/emergency-resources') {
      context.pageType = 'crisis-resources';
      context.priority = 'high';
    }

    setPageContext(context);
  }, [location.pathname]);

  return (
    <ChatContext.Provider value={{ shouldShowChat, pageContext }}>
      {children}
    </ChatContext.Provider>
  );
};