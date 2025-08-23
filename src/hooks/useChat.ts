import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { toast } from 'sonner';

export interface ChatMessage {
  role: 'user' | 'assistant';
  content: string;
  timestamp: string;
}

export interface ChatSession {
  sessionId: string;
  messages: ChatMessage[];
  userContext: Record<string, any>;
  createdAt: string;
  lastActivity: string;
}

export const useChat = () => {
  const [session, setSession] = useState<ChatSession | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const createSession = async (context?: Record<string, any>) => {
    try {
      setLoading(true);
      setError(null);
      
      const { data, error } = await supabase.functions.invoke('chat-session', {
        body: { 
          action: 'create',
          context: {
            currentPage: window.location.pathname,
            userAgent: navigator.userAgent,
            startTime: new Date().toISOString(),
            ...context
          }
        }
      });

      if (error) throw error;

      const newSession: ChatSession = {
        sessionId: data.sessionId,
        messages: [],
        userContext: data.session.user_context || {},
        createdAt: data.session.created_at,
        lastActivity: data.session.last_activity
      };

      setSession(newSession);
      return newSession;
      
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Failed to create chat session';
      setError(errorMessage);
      toast.error(errorMessage);
      return null;
    } finally {
      setLoading(false);
    }
  };

  const sendMessage = async (message: string): Promise<ChatMessage | null> => {
    if (!session) {
      setError('No active chat session');
      return null;
    }

    try {
      setLoading(true);
      setError(null);

      const userMessage: ChatMessage = {
        role: 'user',
        content: message.trim(),
        timestamp: new Date().toISOString()
      };

      // Update local state immediately
      setSession(prev => prev ? {
        ...prev,
        messages: [...prev.messages, userMessage]
      } : null);

      const { data, error } = await supabase.functions.invoke('therapy-chat', {
        body: {
          message: message.trim(),
          sessionId: session.sessionId
        }
      });

      if (error) throw error;

      const assistantMessage: ChatMessage = {
        role: 'assistant',
        content: data.response.content,
        timestamp: new Date().toISOString()
      };

      // Update with assistant response
      setSession(prev => prev ? {
        ...prev,
        messages: [...prev.messages, assistantMessage],
        lastActivity: new Date().toISOString()
      } : null);

      return assistantMessage;
      
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Failed to send message';
      setError(errorMessage);
      toast.error(errorMessage);
      
      // Add error message to chat
      const errorChatMessage: ChatMessage = {
        role: 'assistant',
        content: 'I apologize, but I\'m having trouble processing your message right now. Please try again in a moment.',
        timestamp: new Date().toISOString()
      };

      setSession(prev => prev ? {
        ...prev,
        messages: [...prev.messages, errorChatMessage]
      } : null);
      
      return null;
    } finally {
      setLoading(false);
    }
  };

  const updateContext = async (context: Record<string, any>) => {
    if (!session) return false;

    try {
      const { error } = await supabase.functions.invoke('chat-session', {
        body: {
          action: 'update_context',
          sessionId: session.sessionId,
          context: { ...session.userContext, ...context }
        }
      });

      if (error) throw error;

      setSession(prev => prev ? {
        ...prev,
        userContext: { ...prev.userContext, ...context }
      } : null);

      return true;
      
    } catch (err) {
      console.error('Error updating context:', err);
      return false;
    }
  };

  const clearSession = () => {
    setSession(null);
    setError(null);
  };

  return {
    session,
    loading,
    error,
    createSession,
    sendMessage,
    updateContext,
    clearSession
  };
};