import React, { useState, useEffect, useCallback, useRef } from 'react';
import AssistantLauncher from './AssistantLauncher';
import ChatPanel from './ChatPanel';
import { queryPortfolioKnowledge } from '../../data/portfolioKnowledge';

export default function AskRaunakAI({ onNavigateCaseStudy }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState([]);
  const [inputText, setInputText] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const timerRef = useRef(null);

  // Keyboard shortcut: Escape to close
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  // Clean up any pending timer on unmount
  useEffect(() => {
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, []);

  const handleSendMessage = useCallback((textToSend) => {
    if (!textToSend || isGenerating) return;

    const userMsg = {
      id: 'msg-' + Date.now(),
      sender: 'user',
      text: textToSend,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputText('');
    setIsGenerating(true);

    // Controlled deterministic response generation from verified knowledge engine
    timerRef.current = setTimeout(() => {
      const knowledgeResult = queryPortfolioKnowledge(textToSend);

      const assistantMsg = {
        id: 'msg-' + (Date.now() + 1),
        sender: 'assistant',
        text: knowledgeResult.text,
        actions: knowledgeResult.actions,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };

      setMessages((prev) => [...prev, assistantMsg]);
      setIsGenerating(false);
    }, 450); // Fast, responsive 450ms turnaround
  }, [isGenerating]);

  const handleSelectSuggested = useCallback((questionText) => {
    handleSendMessage(questionText);
  }, [handleSendMessage]);

  const handleToggleOpen = () => {
    if (isOpen) {
      setIsOpen(false);
      setIsMinimized(false);
    } else {
      setIsOpen(true);
      setIsMinimized(false);
    }
  };

  const handleMinimize = () => {
    setIsMinimized(!isMinimized);
  };

  const handleClose = () => {
    setIsOpen(false);
    setIsMinimized(false);
  };

  const handleClearChat = () => {
    setMessages([]);
  };

  const handleNavigateAction = (action) => {
    if (action.url) {
      const url = action.url.startsWith('http')
        ? action.url
        : (import.meta.env.BASE_URL + action.url);
      window.open(url, '_blank');
      return;
    }

    if (action.hash) {
      if (action.hash.startsWith('#/case-study/')) {
        const studyId = action.hash.replace('#/case-study/', '');
        if (onNavigateCaseStudy) {
          onNavigateCaseStudy(studyId);
        } else {
          window.location.hash = action.hash;
        }
        setIsOpen(false); // Close assistant so case study is unobstructed
      } else {
        const element = document.querySelector(action.hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
          setIsOpen(false);
        } else {
          window.location.hash = action.hash;
        }
      }
    }
  };

  return (
    <div className="ai-assistant-wrapper">
      <AssistantLauncher
        isOpen={isOpen}
        onClick={handleToggleOpen}
      />
      <ChatPanel
        isOpen={isOpen}
        isMinimized={isMinimized}
        messages={messages}
        inputText={inputText}
        setInputText={setInputText}
        isGenerating={isGenerating}
        onSendMessage={handleSendMessage}
        onSelectSuggested={handleSelectSuggested}
        onClose={handleClose}
        onMinimize={handleMinimize}
        onClearChat={handleClearChat}
        onNavigateAction={handleNavigateAction}
      />
    </div>
  );
}
