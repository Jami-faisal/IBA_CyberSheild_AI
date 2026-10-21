import { type ReactNode, useEffect, useRef, useState } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ErrorBoundary } from '@/components/error-boundary';
import { Toaster } from '@/components/ui/toaster';
import { TooltipProvider } from '@/components/ui/tooltip';
import {
  ArrowRight, ChevronRight, KeyRound, Link2, LockKeyhole,
  MessageCircle, Plus, Send, Shield, ShieldCheck, Trash2,
} from 'lucide-react';
import { Link, Route, Switch, useLocation, Router as WouterRouter } from 'wouter';

const queryClient = new QueryClient();
const STORAGE_KEY = 'iba-cybershield-chat-v1';

type ChatMessage = { id: string; role: 'user' | 'assistant'; text: string };

const quickPrompts = [
  { text: 'A WhatsApp scholarship link might be fake', icon: Link2 },
  { text: 'How do I enable 2FA on my student email?', icon: LockKeyhole },
  { text: 'I entered my password on a strange link', icon: KeyRound },
  { text: 'What are signs of portal phishing?', icon: ShieldCheck },
];

function preparedAnswer(question: string): string {
  const q = question.toLowerCase();
  if ((q.includes('whatsapp') || q.includes('scholarship')) && (q.includes('link') || q.includes('fake') || q.includes('scam') || q.includes('message'))) {
    return 'Treat an unexpected scholarship link as unverified until you confirm it through an official channel.\n\n1. Don’t open the link, download a file, or share a code or password.\n2. Check the scholarship on the official IBA website or with the relevant office using contact details you find yourself.\n3. Be cautious of urgency, spelling mistakes, requests for payment, or forms asking for account credentials.\n4. Report the message in WhatsApp and let the sender know through another channel if their account may be compromised.\n\nIf you already opened it or entered details, use the “I entered my password on a strange link” prompt for next steps.';
  }
  if ((q.includes('2fa') || q.includes('two-factor') || q.includes('two factor') || q.includes('two step')) && (q.includes('email') || q.includes('student') || q.includes('enable') || q.includes('set'))) {
    return 'Add a second sign-in check to your student email account if the service offers it.\n\n1. Open your email provider’s official website or app directly, not from a message link.\n2. Go to Account or Security settings, then choose Two-step verification / 2FA.\n3. Follow the provider’s steps to add an authenticator app or another supported method.\n4. Save recovery codes somewhere private and offline. Never share a one-time code with anyone.\n5. Sign out and test that you can sign in again with your second factor.\n\nIBA email settings can vary. If the option is missing or setup fails, contact official IBA IT support.';
  }
  if ((q.includes('password') || q.includes('login') || q.includes('credentials')) && (q.includes('strange') || q.includes('link') || q.includes('entered') || q.includes('typed') || q.includes('scam'))) {
    return 'Act quickly, but use only the official account site or app you open yourself.\n\n1. Change the exposed password immediately. If you reused it elsewhere, change it on those accounts too.\n2. Turn on 2FA and sign out of other sessions if your account settings allow it.\n3. If you can’t sign in, contact official IBA IT support right away.\n4. Watch for unexpected sign-in alerts and report the suspicious message or link to the relevant service.\n5. If you shared payment details or sensitive personal information, contact your bank or the relevant authority.\n\nDo not reply to the message or share any verification codes.';
  }
  if ((q.includes('portal') || q.includes('phishing') || q.includes('signs')) && (q.includes('sign') || q.includes('spot') || q.includes('recogn') || q.includes('what') || q.includes('fake'))) {
    return 'Pause before entering your IBA portal password. Common phishing clues include:\n\n1. A link whose domain is misspelled, unfamiliar, or different from the official IBA address.\n2. Urgent threats, surprise prizes, scholarship claims, or requests to “verify” your account.\n3. A message asking for your password, one-time code, or payment.\n4. Unexpected attachments, unusual sender addresses, or wording that feels out of character.\n5. A page reached through a message instead of by navigating to the official portal yourself.\n\nA padlock icon alone does not prove a site is genuine. When unsure, close the page and contact IBA through a known official channel.';
  }
  return 'I can help with four common student-security topics: checking a possible WhatsApp scholarship link, enabling student email 2FA, responding after entering a password on a strange link, and spotting portal phishing.\\n\\nChoose one of the suggested prompts below for step-by-step guidance. Your question stays in this browser. This tool does not scan links.';
}

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
      const answer: ChatMessage = { id: `${Date.now()}-answer`, role: 'assistant', text: preparedAnswer(clean) };
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
            Get clear, practical cybersecurity guidance for common student situations. No account needed, and your chat stays in this browser.
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
                      Hi. If something feels off, it’s worth pausing. Pick a topic below or ask a question about one of these common situations.
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
                    <div className="message-text">{message.text}</div>
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
                  placeholder="Ask about one of the supported topics..."
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
              <h2 id="quick-heading" className="section-title">Start with a common situation</h2>
              <span className="section-caption">Four common topics</span>
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
