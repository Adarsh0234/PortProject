import { useState, FormEvent, useEffect } from "react";
import { Send, FileText, Link2, CheckCircle, Mail, User, MessageSquare, Trash2, Key, Inbox, AlertCircle, X, ShieldAlert, Lock, Unlock } from "lucide-react";
import { motion } from "motion/react";
import { ScrollReveal, FadeUp, StaggerContainer } from "../animations/ScrollAnimations";
import { fadeUpVariants, headingVariants, staggerContainerVariants, staggerItemVariants } from "../animations/variants";

interface LocalMessage {
  name: string;
  email: string;
  message: string;
  timestamp: string;
  sentViaEmail: boolean;
}

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSent, setIsSent] = useState(false);
  const [errorText, setErrorText] = useState("");
  const [successMode, setSuccessMode] = useState<"local" | "email">("local");

  // Admin visibility guard
  const [isAdmin, setIsAdmin] = useState(false);
  const [passcode, setPasscode] = useState("");
  const [showPasscodePrompt, setShowPasscodePrompt] = useState(false);
  const [passcodeError, setPasscodeError] = useState("");

  // Web3Forms integration key
  const [web3Key, setWeb3Key] = useState("");
  const [showKeyInfo, setShowKeyInfo] = useState(false);

  // Local storage developer inbox
  const [localMessages, setLocalMessages] = useState<LocalMessage[]>([]);
  const [showAdminInbox, setShowAdminInbox] = useState(false);

  useEffect(() => {
    // 1. Initial admin check via URL Hash (#admin)
    const checkHash = () => {
      if (window.location.hash === "#admin") {
        setIsAdmin(true);
      }
    };
    checkHash();
    window.addEventListener("hashchange", checkHash);

    // 2. Load existing messages & key on mount
    const savedKey = localStorage.getItem("web3forms_access_key") || ((import.meta as any).env?.VITE_WEB3FORMS_KEY as string) || "";
    setWeb3Key(savedKey);

    const savedMsgs = localStorage.getItem("messages");
    if (savedMsgs) {
      try {
        setLocalMessages(JSON.parse(savedMsgs));
      } catch (e) {
        console.error("Error parsing local messages", e);
      }
    }

    return () => {
      window.removeEventListener("hashchange", checkHash);
    };
  }, []);

  const handleVerifyPasscode = (e: FormEvent) => {
    e.preventDefault();
    if (passcode === "6299" || passcode.toLowerCase() === "admin") {
      setIsAdmin(true);
      setShowPasscodePrompt(false);
      setPasscodeError("");
      setPasscode("");
      // Add hash for convenience
      window.location.hash = "admin";
    } else {
      setPasscodeError("Incorrect code. Ask Adarsh for developer access!");
    }
  };

  const saveKey = (key: string) => {
    const trimmed = key.trim();
    setWeb3Key(trimmed);
    localStorage.setItem("web3forms_access_key", trimmed);
  };

  const handleClearMessages = () => {
    localStorage.removeItem("messages");
    setLocalMessages([]);
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setErrorText("");
    setIsSent(false);

    if (!name.trim()) {
      setErrorText("Please fill out your full name.");
      return;
    }
    if (!email.trim() || !email.includes("@")) {
      setErrorText("Please enter a valid email address.");
      return;
    }
    if (!message.trim() || message.length < 10) {
      setErrorText("Please write a message with at least 10 characters.");
      return;
    }

    setIsSubmitting(true);

    const timestamp = new Date().toISOString();
    let sentSuccessful = false;

    // 1. If key is available, attempt real email delivery via Web3Forms API
    if (web3Key.trim()) {
      try {
        const response = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: JSON.stringify({
            access_key: web3Key.trim(),
            name: name.trim(),
            email: email.trim(),
            message: message.trim(),
            subject: `New Portfolio Message from ${name.trim()}`,
            from_name: "Adarsh's Portfolio Visitor"
          })
        });

        const data = await response.json();
        if (data.success) {
          sentSuccessful = true;
          setSuccessMode("email");
        } else {
          console.warn("Web3Forms error response:", data);
          setSuccessMode("local");
        }
      } catch (err) {
        console.error("Web3Forms connection error:", err);
        setSuccessMode("local");
      }
    } else {
      setSuccessMode("local");
    }

    // 2. Always persist message in the Developer Inbox of LocalStorage for instant visual verification
    const newMsg: LocalMessage = {
      name: name.trim(),
      email: email.trim(),
      message: message.trim(),
      timestamp,
      sentViaEmail: sentSuccessful
    };

    const updatedList = [newMsg, ...localMessages];
    setLocalMessages(updatedList);
    localStorage.setItem("messages", JSON.stringify(updatedList));

    setIsSubmitting(false);
    setIsSent(true);

    // Clear inputs
    setName("");
    setEmail("");
    setMessage("");

    // Auto close feedback after 6 seconds
    setTimeout(() => {
      setIsSent(false);
    }, 6000);
  };

  const handleDownloadFile = () => {
    const text = "Results-driven B.Tech graduate in Electronics & Communication Engineering with hands-on experience in software development and modern web technologies. Passionate about building responsive, user-focused applications using Java, JavaScript, SQL, and frontend technologies. Skilled in software development lifecycle (SDLC), object-oriented programming, debugging, and collaborative development using Git & GitHub. Experienced in developing scalable and maintainable projects with clean coding practices and strong attention to detail. A fast learner and dedicated team player eager to contribute to innovative software solutions while continuously growing as a developer.";
    const blob = new Blob([text], { type: "text/plain" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "Adarsh_Kumar_Tiwary_Info.txt";
    link.click();
  };

  // Trigger standard pre-filled mailto redirect if user prefers native email client
  const triggerMailto = () => {
    const subject = encodeURIComponent("Portfolio Consultation Project Proposal");
    const body = encodeURIComponent("Hello Adarsh,\n\nI visited your portfolio and would love to get in touch with you regarding software engineering opportunities.\n\nBest regards,");
    window.location.href = `mailto:adarshkumartiwary8@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="py-28 px-6 relative overflow-hidden">
      
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#00f5ff]/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-4xl mx-auto glass-panel p-8 sm:p-16 lg:p-20 rounded-[3rem] text-center relative z-10 border border-white/5">
        
        {/* Subtle Creator Admin Button */}
        <div className="absolute top-6 right-8 flex items-center gap-2">
          {isAdmin ? (
            <div className="flex items-center gap-1.5 px-3 py-1 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[10px] rounded-full font-mono">
              <Unlock className="w-3 h-3" />
              <span>Creator Mode Active</span>
              <button 
                onClick={() => {
                  setIsAdmin(false);
                  window.location.hash = "";
                }} 
                className="hover:text-white ml-1 font-bold underline"
                title="Lock admin controls"
              >
                Lock
              </button>
            </div>
          ) : (
            <button
              onClick={() => setShowPasscodePrompt(!showPasscodePrompt)}
              className="text-[#b9caca]/30 hover:text-[#00f5ff]/80 transition-colors"
              title="Developer Unlock Panel"
            >
              <Lock className="w-4 h-4" />
            </button>
          )}
        </div>

        {/* Passcode Unlock Popup */}
        {showPasscodePrompt && !isAdmin && (
          <div className="absolute inset-x-4 top-20 mx-auto max-w-sm p-6 bg-black/95 border border-white/10 rounded-2xl shadow-2xl z-50 text-left animate-in fade-in slide-in-from-top-4 duration-200">
            <div className="flex items-center justify-between mb-3 pb-2 border-b border-white/5">
              <h4 className="text-xs font-mono font-bold text-[#00f5ff] flex items-center gap-1.5">
                <ShieldAlert className="w-4 h-4" /> Unlock Admin Controls
              </h4>
              <button onClick={() => setShowPasscodePrompt(false)} className="text-[#b9caca] hover:text-white">
                <X className="w-4 h-4" />
              </button>
            </div>
            <p className="text-[11px] text-[#b9caca] mb-4">
              Enter the portfolio developer code to reveal admin configuration controls & the local inbox reader dashboard.
            </p>
            <form onSubmit={handleVerifyPasscode} className="flex gap-2">
              <input
                type="password"
                placeholder="Enter Passcode"
                value={passcode}
                onChange={(e) => setPasscode(e.target.value)}
                className="flex-grow bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-xs text-white outline-none focus:border-[#00f5ff]/50 font-mono"
                autoFocus
              />
              <button type="submit" className="px-4 py-2 bg-[#00f5ff] text-black hover:bg-[#00e1eb] rounded-lg font-mono text-xs font-bold transition-all">
                Verify
              </button>
            </form>
            {passcodeError && (
              <p className="text-[10px] text-red-400 font-mono mt-2">{passcodeError}</p>
            )}
          </div>
        )}

        <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl text-white font-extrabold mb-8">
          Happy to Connect <br />
          <ScrollReveal variants={fadeUpVariants}>
            <span className="text-[#00f5ff] text-glow">With You</span>
          </ScrollReveal>
        </h2>
        
        <ScrollReveal variants={fadeUpVariants} delay={0.1} className="mb-12">
          <p className="font-sans text-base sm:text-lg lg:text-xl text-[#b9caca] max-w-xl mx-auto leading-relaxed">
            Currently open to internship opportunities, full-time engineering roles, and innovative collaborations. Let's discuss how we can build something extraordinary.
          </p>
        </ScrollReveal>

        {/* Access Key Settings Toggle (Only shown to Admin) */}
        {isAdmin && (
          <div className="max-w-lg mx-auto mb-8 bg-white/5 rounded-2xl border border-white/10 p-4 transition-all duration-300">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-xs font-mono text-[#b9caca]">
                <Key className="w-4 h-4 text-[#00f5ff]" />
                <span>Configure Email Forwarding</span>
              </div>
              <button
                type="button"
                onClick={() => setShowKeyInfo(!showKeyInfo)}
                className="text-[10px] uppercase font-mono tracking-widest text-[#00f5ff] hover:underline"
              >
                {showKeyInfo ? "Hide Settings" : "Setup Forwarder"}
              </button>
            </div>

            {showKeyInfo && (
              <div className="mt-4 text-left space-y-3 p-3 bg-black/40 border border-white/5 rounded-xl">
                <p className="text-xs text-[#b9caca] leading-relaxed">
                  By default, sent messages are stored in your <strong>Local Developer Inbox</strong> (perfect for previewing). To receive actual emails instantly to your email inbox:
                </p>
                <ol className="text-[11px] text-[#b9caca] list-decimal pl-4 space-y-1 font-sans">
                  <li>Go to <a href="https://web3forms.com" target="_blank" rel="noreferrer" className="text-[#00f5ff] underline">web3forms.com</a> (completely free, no login required).</li>
                  <li>Enter your personal email (e.g. adarshkumartiwary8@gmail.com) to instantly receive an Access Key via email.</li>
                  <li>Paste your Access Key below to make email forwarding fully operational.</li>
                </ol>
                <div className="flex gap-2 pt-1">
                  <input
                    type="password"
                    placeholder="Paste Web3Forms Access Key here..."
                    value={web3Key}
                    onChange={(e) => saveKey(e.target.value)}
                    className="flex-grow bg-black/50 border border-white/10 rounded-lg px-3 py-1.5 text-xs text-white outline-none focus:border-[#00f5ff]/50 font-mono"
                  />
                  {web3Key && (
                    <button
                      type="button"
                      onClick={() => saveKey("")}
                      className="px-2 py-1.5 bg-red-500/10 hover:bg-red-500/20 text-red-400 rounded-lg text-[10px] font-mono border border-current"
                    >
                      Remove
                    </button>
                  )}
                </div>
                {web3Key ? (
                  <p className="text-[10px] text-emerald-400 font-mono flex items-center gap-1">
                    ✓ Form is live! Visitors' messages will be forwarded straight to your inbox.
                  </p>
                ) : (
                  <p className="text-[10px] text-[#b9caca]/70 font-mono italic">
                    Currently running in Local Simulation Mode. Messages will be saved to your dashboard console below.
                  </p>
                )}
              </div>
            )}
          </div>
        )}

        {/* Dynamic Form Panel */}
        <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
          <StaggerContainer variants={staggerContainerVariants} className="text-left space-y-6 mb-12">
          
          {/* Name Field */}
          <motion.div variants={staggerItemVariants} className="space-y-2">
            <label className="text-xs font-mono text-[#00f5ff] uppercase tracking-wider font-semibold flex items-center gap-1.5 justify-start">
              <User className="w-3.5 h-3.5" /> Full Name
            </label>
            <input
              type="text"
              placeholder="Adarsh Kumar Tiwary"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white text-sm outline-none focus:border-[#00f5ff]/50 focus:bg-black/60 transition-all font-sans"
              required
            />
          </motion.div>

          {/* Email Field */}
          <motion.div variants={staggerItemVariants} className="space-y-2">
            <label className="text-xs font-mono text-[#00f5ff] uppercase tracking-wider font-semibold flex items-center gap-1.5 justify-start">
              <Mail className="w-3.5 h-3.5" /> Email Address
            </label>
            <input
              type="email"
              placeholder="alex@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white text-sm outline-none focus:border-[#00f5ff]/50 focus:bg-black/60 transition-all font-sans"
              required
            />
          </motion.div>

          {/* Message Content */}
          <motion.div variants={staggerItemVariants} className="space-y-2">
            <label className="text-xs font-mono text-[#00f5ff] uppercase tracking-wider font-semibold flex items-center gap-1.5 justify-start">
              <MessageSquare className="w-3.5 h-3.5" /> Message Details
            </label>
            <textarea
              rows={4}
              placeholder="Let's build a new modern Web Application..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full bg-black/40 border border-white/10 rounded-xl p-4 text-white text-sm outline-none focus:border-[#00f5ff]/50 focus:bg-black/60 transition-all font-sans resize-none"
              required
            />
          </motion.div>

          {/* Feedback states notifications */}
          {errorText && (
            <motion.div variants={staggerItemVariants} className="text-xs text-red-400 font-mono font-bold py-1 select-none text-left flex items-center gap-1.5">
              <AlertCircle className="w-4 h-4 shrink-0" />
              <span>{errorText}</span>
            </motion.div>
          )}

          {isSent && (
            <motion.div variants={staggerItemVariants} className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs sm:text-sm font-semibold flex flex-col gap-2 animate-bounce">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 shrink-0 text-emerald-400" />
                <span>Message successfully submitted!</span>
              </div>
              <p className="font-normal font-sans text-xs text-[#b9caca] pl-7">
                {successMode === "email" 
                  ? "Your message was sent live via Web3Forms with high priority to Adarsh's inbox."
                  : "Saved to your Developer Inbox below! Enter an Access Key to enable direct forwarding to your email."}
              </p>
            </motion.div>
          )}

          {/* Buttons container */}
          <motion.div variants={staggerItemVariants} className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-6">
            <button
              type="submit"
              disabled={isSubmitting}
              className="gradient-button px-10 py-4 rounded-full font-bold text-black text-sm shadow-xl flex items-center justify-center gap-2 transition-transform hover:scale-105 active:scale-95 disabled:opacity-50 cursor-pointer w-full sm:w-auto"
            >
              {isSubmitting ? (
                <>Sending Message...</>
              ) : (
                <>
                  Say Hello
                  <Send className="w-4 h-4 text-black" />
                </>
              )}
            </button>

            {/* Circular Secondary resource pins */}
            <div className="flex gap-4">
              <button
                type="button"
                onClick={handleDownloadFile}
                className="w-12 h-12 glass-panel rounded-full flex items-center justify-center hover:text-[#00f5ff] hover:scale-105 active:scale-95 transition-all border border-white/10 cursor-pointer"
                title="Download Biography Summary File"
              >
                <FileText className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={triggerMailto}
                className="w-12 h-12 glass-panel rounded-full flex items-center justify-center hover:text-[#00f5ff] hover:scale-105 active:scale-95 transition-all border border-white/10 cursor-pointer"
                title="Send direct email using Mailto client"
              >
                <Mail className="w-4 h-4" />
              </button>
              <a
                href="https://linkedin.com"
                target="_blank"
                referrerPolicy="no-referrer"
                className="w-12 h-12 glass-panel rounded-full flex items-center justify-center hover:text-[#00f5ff] hover:scale-105 active:scale-95 transition-all border border-white/10"
                title="Visit LinkedIn Profile"
              >
                <Link2 className="w-4 h-4" />
              </a>
            </div>
          </motion.div>
          </StaggerContainer>
        </form>

        {/* Local Developer Messages Dashboard Panel (Only shown to Admin) */}
        {isAdmin && (
          <div className="border-t border-white/10 pt-8 mt-10">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-2 font-mono text-xs text-[#b9caca]">
                <Inbox className="w-4 h-4 text-[#00f5ff]" />
                <span>Developer Inbox Dashboard ({localMessages.length} Messages)</span>
              </div>
              
              <div className="flex gap-3">
                <button
                  type="button"
                  onClick={() => setShowAdminInbox(!showAdminInbox)}
                  className="text-xs font-mono text-[#00f5ff] hover:underline cursor-pointer"
                >
                  {showAdminInbox ? "[ Close Viewer ]" : "[ View Saved Messages ]"}
                </button>
                {localMessages.length > 0 && (
                  <button
                    type="button"
                    onClick={handleClearMessages}
                    className="text-xs font-mono text-red-400 hover:underline cursor-pointer flex items-center gap-1"
                  >
                    <Trash2 className="w-3.5 h-3.5" /> Clear Logs
                  </button>
                )}
              </div>
            </div>

            {showAdminInbox && (
              <div className="mt-6 text-left space-y-4 max-h-[350px] overflow-y-auto pr-2 custom-scrollbar">
                {localMessages.length === 0 ? (
                  <div className="text-center py-8 bg-black/20 rounded-2xl border border-dashed border-white/10">
                    <p className="font-mono text-xs text-[#b9caca]/60">Your Inbox is empty. Submit a test message above to see how it records instant data.</p>
                  </div>
                ) : (
                  localMessages.map((msg, i) => (
                    <div key={i} className="p-4 bg-black/40 border border-white/10 hover:border-white/20 rounded-2xl space-y-2 transition-all">
                      <div className="flex flex-wrap justify-between items-center text-[10px] font-mono gap-2 text-[#b9caca]/70">
                        <span>Sender: <strong className="text-white text-xs font-sans">{msg.name}</strong> ({msg.email})</span>
                        <span>{new Date(msg.timestamp).toLocaleString()}</span>
                      </div>
                      <p className="text-xs text-[#dfe2f1] font-sans whitespace-pre-line leading-relaxed pb-1 border-b border-white/5">
                        {msg.message}
                      </p>
                      <div className="flex justify-between items-center text-[9px] font-mono">
                        <span>Live Delivery Status:</span>
                        {msg.sentViaEmail ? (
                          <span className="text-emerald-400 font-semibold uppercase">✓ Forwarded to Inbox</span>
                        ) : (
                          <span className="text-[#00f5ff]/70 italic">Local Log Only (Setup Key for live Forwarding)</span>
                        )}
                      </div>
                    </div>
                  ))
                )}
              </div>
            )}
          </div>
        )}

      </div>
    </section>
  );
}
