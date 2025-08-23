import React, { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import { MessageCircle, X, Send, AlertTriangle } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import { toast } from 'sonner';
import { useChatContext } from './ChatContext';

interface Message {
  role: 'user' | 'assistant';
  content: string;
  timestamp: string;
}

interface ChatWidgetProps {
  className?: string;
}

const ChatWidget: React.FC<ChatWidgetProps> = ({ className }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [sessionId, setSessionId] = useState<string | null>(null);
  const [showCrisisAlert, setShowCrisisAlert] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const { shouldShowChat, pageContext } = useChatContext();

  // Don't render if chat shouldn't be shown
  if (!shouldShowChat) return null;

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const initializeSession = async () => {
    try {
      const { data, error } = await supabase.functions.invoke('chat-session', {
        body: { 
          action: 'create',
          context: {
            ...pageContext,
            currentPage: window.location.pathname,
            userAgent: navigator.userAgent,
            startTime: new Date().toISOString()
          }
        }
      });

      if (error) throw error;

      setSessionId(data.sessionId);
      
      // Add welcome message
      const welcomeMessage: Message = {
        role: 'assistant',
        content: `Hi! I'm here to help with mental health information and support. I can:

• Help you choose the right mental health assessment
• Provide information about our therapy services  
• Suggest relevant articles and resources
• Guide you to professional help when needed

What would you like to know about today?`,
        timestamp: new Date().toISOString()
      };
      
      setMessages([welcomeMessage]);
      
    } catch (error) {
      console.error('Error initializing chat session:', error);
      toast.error('Failed to start chat session');
    }
  };

  const handleSendMessage = async () => {
    if (!input.trim() || loading || !sessionId) return;

    const userMessage: Message = {
      role: 'user',
      content: input.trim(),
      timestamp: new Date().toISOString()
    };

    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setLoading(true);

    try {
      const { data, error } = await supabase.functions.invoke('therapy-chat', {
        body: {
          message: userMessage.content,
          sessionId: sessionId
        }
      });

      if (error) throw error;

      if (data.isCrisis) {
        setShowCrisisAlert(true);
      }

      const assistantMessage: Message = {
        role: 'assistant',
        content: data.response.content,
        timestamp: new Date().toISOString()
      };

      setMessages(prev => [...prev, assistantMessage]);

    } catch (error) {
      console.error('Error sending message:', error);
      toast.error('Failed to send message');
      
      // Add error message
      const errorMessage: Message = {
        role: 'assistant',
        content: 'I apologize, but I\'m having trouble processing your message right now. Please try again in a moment.',
        timestamp: new Date().toISOString()
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const openWidget = () => {
    setIsOpen(true);
    if (!sessionId) {
      initializeSession();
    }
  };

  const quickActions = [
    { label: 'Take Assessment', action: () => window.location.href = '/mental-health-tests' },
    { label: 'Crisis Resources', action: () => window.location.href = '/emergency-resources' },
    { label: 'Find Therapy', action: () => window.location.href = '/therapist-matching' }
  ];

  if (!isOpen) {
    return (
      <Button
        onClick={openWidget}
        className={`fixed bottom-6 right-6 z-50 h-14 w-14 rounded-full shadow-lg bg-primary hover:bg-primary/90 ${className}`}
        size="icon"
      >
        <MessageCircle className="h-6 w-6 text-white" />
      </Button>
    );
  }

  return (
    <Card className="fixed bottom-6 right-6 z-50 w-80 h-96 shadow-xl border-border">
      {showCrisisAlert && (
        <div className="absolute top-0 left-0 right-0 bg-destructive text-destructive-foreground p-2 text-sm flex items-center gap-2 z-10">
          <AlertTriangle className="h-4 w-4" />
          <span>Crisis support resources provided below</span>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setShowCrisisAlert(false)}
            className="ml-auto h-6 w-6 p-0 text-destructive-foreground hover:bg-destructive/20"
          >
            <X className="h-3 w-3" />
          </Button>
        </div>
      )}
      
      <CardHeader className="pb-2 border-b">
        <div className="flex items-center justify-between">
          <CardTitle className="text-sm font-medium">Mental Health Support</CardTitle>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setIsOpen(false)}
            className="h-6 w-6 p-0"
          >
            <X className="h-4 w-4" />
          </Button>
        </div>
      </CardHeader>
      
      <CardContent className="p-0 flex flex-col h-80">
        <ScrollArea className="flex-1 p-4">
          <div className="space-y-4">
            {messages.length === 0 && (
              <div className="text-center text-muted-foreground text-sm py-8">
                Starting chat session...
              </div>
            )}
            
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[85%] p-3 rounded-lg text-sm ${
                    message.role === 'user'
                      ? 'bg-primary text-primary-foreground'
                      : 'bg-muted text-foreground'
                  }`}
                >
                  <div className="whitespace-pre-wrap">{message.content}</div>
                  <div className="text-xs opacity-70 mt-1">
                    {new Date(message.timestamp).toLocaleTimeString([], {
                      hour: '2-digit',
                      minute: '2-digit'
                    })}
                  </div>
                </div>
              </div>
            ))}
            
            {loading && (
              <div className="flex justify-start">
                <div className="bg-muted p-3 rounded-lg text-sm">
                  <div className="flex items-center gap-2">
                    <div className="flex space-x-1">
                      <div className="w-1 h-1 bg-foreground rounded-full animate-bounce" />
                      <div className="w-1 h-1 bg-foreground rounded-full animate-bounce delay-100" />
                      <div className="w-1 h-1 bg-foreground rounded-full animate-bounce delay-200" />
                    </div>
                    <span className="text-muted-foreground">Thinking...</span>
                  </div>
                </div>
              </div>
            )}
            
            <div ref={messagesEndRef} />
          </div>
        </ScrollArea>
        
        {messages.length === 1 && !loading && (
          <div className="p-3 border-t border-b bg-muted/30">
            <div className="text-xs text-muted-foreground mb-2">Quick actions:</div>
            <div className="flex gap-1 flex-wrap">
              {quickActions.map((action, index) => (
                <Button
                  key={index}
                  variant="outline"
                  size="sm"
                  onClick={action.action}
                  className="text-xs h-7"
                >
                  {action.label}
                </Button>
              ))}
            </div>
          </div>
        )}
        
        <div className="p-3 border-t">
          <div className="flex gap-2">
            <Input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Ask about mental health, therapy, or resources..."
              disabled={loading}
              className="text-sm"
            />
            <Button
              onClick={handleSendMessage}
              disabled={!input.trim() || loading || !sessionId}
              size="sm"
              className="px-3"
            >
              <Send className="h-4 w-4" />
            </Button>
          </div>
          <div className="text-xs text-muted-foreground mt-2">
            This is not a substitute for professional therapy.
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ChatWidget;