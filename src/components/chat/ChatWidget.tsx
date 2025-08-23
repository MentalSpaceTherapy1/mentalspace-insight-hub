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
    <Card className="fixed bottom-6 right-6 z-50 w-96 h-[85vh] max-h-[700px] shadow-2xl border-0 bg-white/95 backdrop-blur-xl rounded-2xl overflow-hidden">
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
      
      <CardHeader className="pb-4 border-b border-border/10 bg-gradient-to-r from-primary/5 to-primary/10">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-gradient-to-r from-primary to-primary-glow flex items-center justify-center">
              <MessageCircle className="h-4 w-4 text-white" />
            </div>
            <div>
              <CardTitle className="text-base font-semibold text-foreground">Mental Health Support</CardTitle>
              <p className="text-xs text-muted-foreground">AI-powered guidance & resources</p>
            </div>
          </div>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setIsOpen(false)}
            className="h-8 w-8 p-0 rounded-full hover:bg-background/80"
          >
            <X className="h-4 w-4" />
          </Button>
        </div>
      </CardHeader>
      
      <CardContent className="p-0 flex flex-col h-full">
        <ScrollArea className="flex-1 px-4 py-6">
          <div className="space-y-6">
            {messages.length === 0 && (
              <div className="text-center text-muted-foreground py-12">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <MessageCircle className="h-6 w-6 text-primary" />
                </div>
                <p className="text-sm font-medium mb-2">Starting your session...</p>
                <p className="text-xs">Connecting you with mental health support</p>
              </div>
            )}
            
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div className={`flex gap-3 max-w-[85%] ${message.role === 'user' ? 'flex-row-reverse' : ''}`}>
                  {message.role === 'assistant' && (
                    <div className="w-8 h-8 rounded-full bg-gradient-to-r from-primary to-primary-glow flex items-center justify-center flex-shrink-0 mt-1">
                      <MessageCircle className="h-4 w-4 text-white" />
                    </div>
                  )}
                  <div
                    className={`p-4 rounded-2xl text-sm leading-relaxed ${
                      message.role === 'user'
                        ? 'bg-gradient-to-r from-primary to-primary-glow text-white shadow-lg'
                        : 'bg-muted/50 text-foreground border border-border/20'
                    }`}
                  >
                    <div className="whitespace-pre-wrap">{message.content}</div>
                    <div className={`text-xs mt-3 ${message.role === 'user' ? 'text-white/70' : 'text-muted-foreground'}`}>
                      {new Date(message.timestamp).toLocaleTimeString([], {
                        hour: '2-digit',
                        minute: '2-digit'
                      })}
                    </div>
                  </div>
                </div>
              </div>
            ))}
            
            {loading && (
              <div className="flex justify-start">
                <div className="flex gap-3">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-r from-primary to-primary-glow flex items-center justify-center flex-shrink-0">
                    <MessageCircle className="h-4 w-4 text-white" />
                  </div>
                  <div className="bg-muted/50 border border-border/20 p-4 rounded-2xl">
                    <div className="flex items-center gap-3">
                      <div className="flex space-x-1">
                        <div className="w-2 h-2 bg-primary rounded-full animate-bounce" />
                        <div className="w-2 h-2 bg-primary rounded-full animate-bounce delay-100" />
                        <div className="w-2 h-2 bg-primary rounded-full animate-bounce delay-200" />
                      </div>
                      <span className="text-muted-foreground text-sm">Thinking...</span>
                    </div>
                  </div>
                </div>
              </div>
            )}
            
            <div ref={messagesEndRef} />
          </div>
        </ScrollArea>
        
        {messages.length === 1 && !loading && (
          <div className="px-4 py-4 border-t border-border/10 bg-gradient-to-r from-muted/30 to-muted/10">
            <div className="text-xs font-medium text-muted-foreground mb-3">Quick actions:</div>
            <div className="flex gap-2 flex-wrap">
              {quickActions.map((action, index) => (
                <Button
                  key={index}
                  variant="outline"
                  size="sm"
                  onClick={action.action}
                  className="text-xs h-8 px-4 rounded-full border-border/30 hover:bg-primary/10 hover:border-primary/30 hover:text-primary transition-all"
                >
                  {action.label}
                </Button>
              ))}
            </div>
          </div>
        )}
        
        <div className="p-4 border-t border-border/10 bg-background/80">
          <div className="flex gap-3">
            <Input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Ask about mental health, therapy, or resources..."
              disabled={loading}
              className="flex-1 rounded-full border-border/30 bg-muted/20 px-4 py-3 text-sm placeholder:text-muted-foreground/60 focus:border-primary/50 focus:bg-background transition-all"
            />
            <Button
              onClick={handleSendMessage}
              disabled={!input.trim() || loading || !sessionId}
              size="sm"
              className="h-11 w-11 rounded-full bg-gradient-to-r from-primary to-primary-glow hover:from-primary/90 hover:to-primary-glow/90 shadow-lg transition-all"
            >
              <Send className="h-4 w-4" />
            </Button>
          </div>
          <div className="text-xs text-muted-foreground/80 mt-3 px-1">
            This is not a substitute for professional therapy. • Confidential support available 24/7
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ChatWidget;