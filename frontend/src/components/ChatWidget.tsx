import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { sendAssistantMessage } from "../services/api";

import xaiLogo from "../assets/xai-logo.png";

type Message = {
  sender: "user" | "assistant";
  text: string;
};

function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const [leadSubject, setLeadSubject] = useState("");
  const [showLeadButton, setShowLeadButton] = useState(false);

  const [messages, setMessages] = useState<Message[]>([
    {
      sender: "assistant",
      text: "👋 Hello! I'm XAi, your XYZENTRIX Business Assistant. How can I help you today?",
    },
  ]);

  async function handleSend() {
    if (!input.trim()) return;

    const userMessage = input;
    const text = userMessage.toLowerCase();

    if (text.includes("erp")) {
      setLeadSubject("ERP Development Enquiry");
      setShowLeadButton(true);
    } else if (text.includes("website")) {
      setLeadSubject("AI Website Development Enquiry");
      setShowLeadButton(true);
    } else if (text.includes("chatbot") || text.includes("bot")) {
      setLeadSubject("AI Chatbot Development Enquiry");
      setShowLeadButton(true);
    }

    setMessages((prev) => [...prev, { sender: "user", text: userMessage }]);

    setInput("");
    setLoading(true);

    try {
      const response = await sendAssistantMessage(userMessage, messages);

      setMessages((prev) => [
        ...prev,
        { sender: "assistant", text: response.reply },
      ]);
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          sender: "assistant",
          text: "Sorry, I'm temporarily unavailable.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-6 right-6 z-50 flex h-16 w-16 items-center justify-center rounded-full border border-[#39FF14]/50 bg-black shadow-[0_0_25px_rgba(57,255,20,0.35)] transition hover:scale-110 hover:shadow-[0_0_35px_rgba(57,255,20,0.55)]"
      >
        <img src={xaiLogo} alt="XAi" className="h-10 w-10 object-contain" />
      </button>

      {open && (
        <div className="fixed bottom-24 right-6 z-50 flex h-[560px] w-[370px] flex-col overflow-hidden rounded-3xl border border-[#39FF14]/20 bg-[#050505] text-white shadow-2xl">
          {/* Header */}
          <div className="flex items-center justify-between border-b border-gray-800 bg-black px-5 py-4">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[#39FF14]/40 bg-black shadow-[0_0_15px_rgba(57,255,20,0.25)]">
                <img
                  src={xaiLogo}
                  alt="XAi"
                  className="h-8 w-8 object-contain"
                />
              </div>

              <div>
                <h3 className="text-xl font-bold">
                  <span className="text-[#39FF14]">X</span>Ai
                </h3>
                <p className="text-xs text-gray-400">
                  Your AI Business Assistant
                </p>
              </div>
            </div>

            <button
              onClick={() => setOpen(false)}
              className="text-xl text-gray-400 transition hover:text-white"
            >
              ✕
            </button>
          </div>

          {/* Online Status */}
          <div className="border-b border-gray-800 px-5 py-3">
            <div className="flex items-center gap-2 text-sm">
              <span className="h-3 w-3 rounded-full bg-[#39FF14]" />
              <span className="text-gray-300">Online</span>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 space-y-4 overflow-y-auto p-4">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex gap-3 ${
                  message.sender === "user" ? "justify-end" : "justify-start"
                }`}
              >
                {message.sender === "assistant" && (
                  <div className="flex h-10 w-10 items-center justify-center rounded-full border border-[#39FF14]/40 bg-black">
                    <img
                      src={xaiLogo}
                      alt="XAi"
                      className="h-6 w-6 object-contain"
                    />
                  </div>
                )}

                <div
                  className={`max-w-[78%] rounded-2xl px-4 py-3 text-sm leading-6 ${
                    message.sender === "user"
                      ? "bg-[#39FF14] text-black"
                      : "bg-gray-800 text-white"
                  }`}
                >
                  {message.text}
                </div>
              </div>
            ))}

            {loading && (
              <div className="flex gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full border border-[#39FF14]/40 bg-black">
                  <img
                    src={xaiLogo}
                    alt="XAi"
                    className="h-6 w-6 object-contain animate-pulse"
                  />
                </div>

                <div className="rounded-2xl bg-gray-800 px-4 py-3 text-sm text-gray-300">
                  Typing...
                </div>
              </div>
            )}
          </div>

          {/* Lead Button */}
          {showLeadButton && (
            <div className="border-t border-gray-800 p-3">
              <button
                onClick={() =>
                  navigate(
                    `/contact?subject=${encodeURIComponent(leadSubject)}`
                  )
                }
                className="w-full rounded-xl bg-[#39FF14] px-4 py-3 font-semibold text-black transition hover:opacity-90"
              >
                📩 Contact Our Team
              </button>
            </div>
          )}

          {/* Input */}
          <div className="border-t border-gray-800 p-3">
            <div className="flex gap-2">
              <input
                type="text"
                placeholder="Type your message..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSend()}
                className="flex-1 rounded-xl border border-gray-700 bg-white/5 px-4 py-3 text-sm outline-none transition focus:border-[#39FF14]"
              />

              <button
                onClick={handleSend}
                disabled={loading}
                className="rounded-xl bg-[#39FF14] px-4 py-3 font-semibold text-black transition hover:opacity-90 disabled:opacity-50"
              >
                ➤
              </button>
            </div>

            <p className="mt-3 text-center text-xs text-gray-500">
              Powered by <span className="text-[#39FF14]">XYZENTRIX AI</span>
            </p>
          </div>
        </div>
      )}
    </>
  );
}

export default ChatWidget;