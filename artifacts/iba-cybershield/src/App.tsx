import { type ReactNode, useEffect, useRef, useState } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ErrorBoundary } from '@/components/error-boundary';
import { Toaster } from '@/components/ui/toaster';
import { TooltipProvider } from '@/components/ui/tooltip';
import {
  ArrowRight, ChevronRight, Link2, LockKeyhole,
  MessageCircle, Plus, Send, Shield, ShieldCheck, Smartphone, Trash2,
} from 'lucide-react';
import { Link, Route, Switch, useLocation, Router as WouterRouter } from 'wouter';
import { getCybersecurityGuidance } from '@/lib/cybersecurity-guidance';

const TRUSTED_LINK = /(https:\/\/domainanalyzer\.com\/domain-reputation-checker\/|nccia\.gov\.pk)/g;

function renderAnswerText(text: string): ReactNode[] {
  return text.split(TRUSTED_LINK).map((part, index) => {
    if (index % 2 === 0) return part;
    const href = part.startsWith('http') ? part : `https://${part}`;
    return (
      <a key={index} href={href} target="_blank" rel="noopener noreferrer" className="answer-link">
        {part}
      </a>
    );
  });
}

const queryClient = new QueryClient();
const STORAGE_KEY = 'iba-cybershield-chat-v1';

type ChatMessage = { id: string; role: 'user' | 'assistant'; text: string };

const quickPrompts = [
  { text: 'How can I make my accounts safer?', icon: ShieldCheck },
  { text: 'Could this scholarship message be a scam?', icon: Link2 },
  { text: 'What if I shared a verification code?', icon: LockKeyhole },
  { text: 'What should I do if my phone has malware?', icon: Smartphone },
];

function readHistory(): ChatMessage[] {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (!saved) return [];
    const parsed: unknown = JSON.parse(saved);
    if (!Array.isArray(parsed)) return [];
    return parsed.filter((item): item is ChatMessage =>
      !!item && typeof item.id === 'string' &&
      (item.role === 'user' || item.role === 'assistant') &&
      typeof item.text === 'string'
    );
  } catch {
    return [];
  }
}

function Header() {
  const [location] = useLocation();
  return (
    <header className="topbar">
      <div className="topbar-inner">
        <Link href="/" className="brand" data-testid="link-home">
          <span className="brand-mark"><Shield size={19} strokeWidth={1.8} /></span>
          <span className="brand-copy">
            <span className="brand-title">IBA CyberShield</span>
            <span className="brand-subtitle">Think before you click.</span>
          </span>
        </Link>
        <nav className="nav-links" aria-label="Main navigation">
          <Link href="/" className={`nav-link ${location === '/' ? 'active' : ''}`} data-testid="link-chat">
            <MessageCircle size={15} /> Chat
          </Link>
        </nav>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="site-footer">
      Built for the IBA CCE project. For awareness only; not a replacement for official IT support.
    </footer>
  );
}

function HomePage() {
  const [messages, setMessages] = useState<ChatMessage[]>(readHistory);
  const [draft, setDraft] = useState('');
  const [typing, setTyping] = useState(false);
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const timerRef = useRef<number | undefined>(undefined);

  useEffect(() => {
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify(messages)); } catch { /* Browser storage may be unavailable. */ }
  }, [messages]);

  useEffect(() => () => window.clearTimeout(timerRef.current), []);

  const submitQuestion = (value: string) => {
    const clean = value.trim();
    if (!clean || typing) return;
    const userMessage: ChatMessage = { id: `${Date.now()}-user`, role: 'user', text: clean };
    setDraft('');
    setMessages((current) => [...current, userMessage]);
    setTyping(true);
    timerRef.current = window.setTimeout(() => {
      const answer: ChatMessage = { id: `${Date.now()}-answer`, role: 'assistant', text: getCybersecurityGuidance(clean) };
      setMessages((current) => [...current, answer]);
      setTyping(false);
    }, 620);
  };

  const startNewChat = () => {
    window.clearTimeout(timerRef.current);
    setTyping(false);
    setMessages([]);
    setDraft('');
    textareaRef.current?.focus();
  };

  const clearHistory = () => {
    window.clearTimeout(timerRef.current);
    setTyping(false);
    setMessages([]);
    setDraft('');
    try { localStorage.removeItem(STORAGE_KEY); } catch { /* Browser storage may be unavailable. */ }
  };

  return (
    <main className="page-main">
      <div className="home-layout">
        <section className="chat-column" aria-label="Cybersecurity guidance chat">
          <div className="eyebrow"><span className="eyebrow-dot" /> A calm first stop for safer choices</div>
          <h1 className="hero-title">Not sure about a message?<br /><span>Let’s think it through.</span></h1>
          <p className="hero-description">
            Ask about account security, suspicious messages, privacy, devices, Wi-Fi, or another everyday cybersecurity concern. No account needed, and your chat stays in this browser.
          </p>
          <div className="safety-notice" data-testid="text-safety-notice">
            <LockKeyhole size={13} />
            <span>Free to use. No sign-up. Never paste real passwords or OTPs here.</span>
          </div>

          <section className="conversation" aria-label="Chat conversation">
            <div className="conversation-head">
              <div className="conversation-label">
                <span className="assistant-avatar"><ShieldCheck size={16} /></span>
                <span>Cyber GPT</span>
              </div>
              <div className="conversation-actions">
                <button type="button" className="quiet-button" onClick={startNewChat} data-testid="button-new-chat" aria-label="Start a new chat">
                  <Plus size={14} /> New chat
                </button>
                <button type="button" className="quiet-button" onClick={clearHistory} data-testid="button-clear-history" aria-label="Clear chat history">
                  <Trash2 size={13} /> Clear history
                </button>
              </div>
            </div>

            <div className="message-list" aria-live="polite" data-testid="conversation-messages">
              {messages.length === 0 ? (
                <div className="assistant-row welcome-block" data-testid="message-welcome">
                  <span className="assistant-avatar"><ShieldCheck size={16} /></span>
                  <div className="message-content">
                    <div className="message-author">CyberShield guide</div>
                    <div className="message-text">
                      Hi. If something feels off, it’s worth pausing. Ask about any cybersecurity-awareness concern, or choose one of the examples below.
                    </div>
                  </div>
                </div>
              ) : messages.map((message) => message.role === 'user' ? (
                <div className="user-row" key={message.id} data-testid={`message-user-${message.id}`}>
                  <div className="user-bubble">{message.text}</div>
                </div>
              ) : (
                <div className="assistant-row" key={message.id} data-testid={`message-answer-${message.id}`}>
                  <span className="assistant-avatar"><ShieldCheck size={16} /></span>
                  <div className="message-content">
                    <div className="message-author">CyberShield guide</div>
                    <div className="message-text">{renderAnswerText(message.text)}</div>
                  </div>
                </div>
              ))}
              {typing && (
                <div className="assistant-row" data-testid="status-typing">
                  <span className="assistant-avatar"><ShieldCheck size={16} /></span>
                  <div className="message-content">
                    <div className="message-author">Finding the matching guide</div>
                    <div className="typing-indicator" aria-label="Preparing a response"><span /><span /><span /></div>
                  </div>
                </div>
              )}
            </div>

            <div className="composer-wrap">
              <form className="composer" onSubmit={(event) => { event.preventDefault(); submitQuestion(draft); }}>
                <textarea
                  ref={textareaRef}
                  value={draft}
                  onChange={(event) => setDraft(event.target.value)}
                  onKeyDown={(event) => {
                    if (event.key === 'Enter' && !event.shiftKey) {
                      event.preventDefault();
                      submitQuestion(draft);
                    }
                  }}
                  placeholder="Ask any cybersecurity-awareness question..."
                  aria-label="Type a cybersecurity question"
                  data-testid="input-chat-question"
                  rows={1}
                />
                <button type="submit" className="send-button" disabled={!draft.trim() || typing} aria-label="Send question" data-testid="button-send-question">
                  <Send size={15} />
                </button>
              </form>
            </div>
          </section>

          <section className="quick-section" aria-labelledby="quick-heading">
            <div className="section-heading">
              <h2 id="quick-heading" className="section-title">Questions you can ask</h2>
              <span className="section-caption">Examples</span>
            </div>
            <div className="prompt-grid">
              {quickPrompts.map(({ text, icon: Icon }, index) => (
                <button
                  type="button"
                  key={text}
                  className="prompt-card"
                  onClick={() => submitQuestion(text)}
                  disabled={typing}
                  data-testid={`button-prompt-${index + 1}`}
                >
                  <span className="prompt-icon"><Icon size={15} /></span>
                  <span className="prompt-text">{text}</span>
                  <ChevronRight size={14} style={{ marginLeft: 'auto', color: '#667b94' }} />
                </button>
              ))}
            </div>
          </section>
        </section>

      </div>
    </main>
  );
}

function NotFoundPage() {
  return <main className="page-main not-found"><div><h1>Page not found</h1><p>IBA CyberShield has one page: Cyber GPT.</p><Link href="/" className="side-link" data-testid="link-return-chat">Return to Cyber GPT <ArrowRight size={13} /></Link></div></main>;
}

function Router() {
  return (
    <RoutedErrorBoundary>
      <div className="app-shell">
        <Header />
        <Switch>
          <Route path="/" component={HomePage} />
          <Route component={NotFoundPage} />
        </Switch>
        <Footer />
      </div>
    </RoutedErrorBoundary>
  );
}

function RoutedErrorBoundary({ children }: { children: ReactNode }) {
  const [location] = useLocation();
  return <ErrorBoundary resetKey={location}>{children}</ErrorBoundary>;
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, '')}>
          <Router />
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
