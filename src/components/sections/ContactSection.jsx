"use client";

import { useState } from "react";
import { Send, Terminal, ShieldAlert, CheckCircle2, Loader2 } from "lucide-react";
import Container from "../ui/Container";
import Button from "../ui/Button";
import { ScrollReveal } from "../ui/ScrollReveal";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("idle");
  const [messageText, setMessageText] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setStatus("loading");
    setMessageText("");

    try {
      const response = await fetch("/api/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
        setMessageText(result.error || "NET_INTERRUPT: Signal packet dropped. Please check connection.");
      }
    } catch (error) {
      setStatus("error");
      setMessageText("HARDWARE_FAULT: SecureSMTP edge transmission failed. Please retry.");
    }
  };

  return (
    <Container id="contact">
      <ScrollReveal className="flex items-center justify-between mb-10 md:mb-12">
        <h2 className="font-h3 text-2xl md:text-3xl text-white uppercase tracking-tighter">
          Initiate Collaboration
        </h2>
        <span className="font-code-label text-primary/50 text-xs md:text-sm">[05]</span>
      </ScrollReveal>
      
      <ScrollReveal delay={0.2} className="glass-card p-8 md:p-12 rounded-[24px] md:rounded-[32px] light-stroke max-w-3xl mx-auto shadow-[0_20px_60px_rgba(0,0,0,0.5)]">
        {/* Cyberpunk Status Log Console */}
        {status !== "idle" && (
          <div className={`p-5 rounded-xl border font-code-label text-xs mb-8 transition-all duration-500 flex items-start gap-4 ${
            status === "loading" 
              ? "bg-primary/5 border-primary/20 text-primary shadow-[0_0_15px_rgba(138,43,226,0.1)]" 
              : status === "success"
              ? "bg-emerald-500/5 border-emerald-500/20 text-emerald-400 shadow-[0_0_15px_rgba(16,185,129,0.1)]"
              : "bg-rose-500/5 border-rose-500/20 text-rose-400 shadow-[0_0_15px_rgba(244,63,94,0.1)]"
          }`}>
            {status === "loading" && <Terminal className="w-5 h-5 animate-pulse shrink-0 mt-0.5" />}
            {status === "success" && <CheckCircle2 className="w-5 h-5 shrink-0 mt-0.5" />}
            {status === "error" && <ShieldAlert className="w-5 h-5 shrink-0 mt-0.5" />}
            
            <div className="space-y-1.5 flex-1">
              <span className="font-bold uppercase tracking-widest block text-[10px] md:text-xs">
                {status === "loading" && ">> TRANSMITTING_DATA_PACKETS..."}
                {status === "success" && ">> TRANSMISSION_COMPLETED_SUCCESSFULLY!"}
                {status === "error" && ">> TRANSMISSION_FAILED // FAULT_DETECTED"}
              </span>
              <p className="opacity-80 leading-relaxed text-[11px] md:text-xs">
                {status === "loading" && "Connecting to secure SMTP edge relay... Packaging encrypted email payload..."}
                {status === "success" && "The encrypted message has bypassed firewall nodes and safely reached Ashik's inbox. Cleared local buffers."}
                {status === "error" && messageText}
              </p>
            </div>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6 md:space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            <div className="group">
              <label className="block font-code-label text-[10px] md:text-xs text-primary mb-3 uppercase tracking-widest transition-colors duration-300 group-focus-within:text-white">
                REQUESTER_NAME
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="IDENTITY_REQUIRED"
                required
                disabled={status === "loading"}
                className="w-full bg-[#050505]/50 border border-white/10 rounded-xl text-white focus:ring-1 focus:ring-primary focus:border-primary focus:bg-[#050505] px-5 py-4 font-body-md outline-none transition-all duration-300 placeholder:text-white/20 focus:shadow-[0_0_20px_rgba(138,43,226,0.15)] disabled:opacity-50 disabled:cursor-not-allowed"
              />
            </div>
            <div className="group">
              <label className="block font-code-label text-[10px] md:text-xs text-primary mb-3 uppercase tracking-widest transition-colors duration-300 group-focus-within:text-white">
                COMMUNICATION_CHANNEL
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="EMAIL_ENCRYPTED"
                required
                disabled={status === "loading"}
                className="w-full bg-[#050505]/50 border border-white/10 rounded-xl text-white focus:ring-1 focus:ring-primary focus:border-primary focus:bg-[#050505] px-5 py-4 font-body-md outline-none transition-all duration-300 placeholder:text-white/20 focus:shadow-[0_0_20px_rgba(138,43,226,0.15)] disabled:opacity-50 disabled:cursor-not-allowed"
              />
            </div>
          </div>
          <div className="group">
            <label className="block font-code-label text-[10px] md:text-xs text-primary mb-3 uppercase tracking-widest transition-colors duration-300 group-focus-within:text-white">
              PROTOCOL_DETAILS
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="MESSAGE_PAYLOAD"
              rows={5}
              required
              disabled={status === "loading"}
              className="w-full bg-[#050505]/50 border border-white/10 rounded-xl text-white focus:ring-1 focus:ring-primary focus:border-primary focus:bg-[#050505] px-5 py-4 font-body-md outline-none transition-all duration-300 resize-y placeholder:text-white/20 focus:shadow-[0_0_20px_rgba(138,43,226,0.15)] disabled:opacity-50 disabled:cursor-not-allowed"
            ></textarea>
          </div>
          <div className="pt-4">
            <Button 
              type="submit" 
              variant="primary" 
              disabled={status === "loading"}
              className="disabled:opacity-75 disabled:cursor-wait"
              icon={
                status === "loading" ? (
                  <Loader2 className="w-5 h-5 animate-spin" />
                ) : (
                  <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                )
              }
            >
              {status === "loading" ? "TRANSMITTING..." : "SEND_REQUEST"}
            </Button>
          </div>
        </form>
      </ScrollReveal>
    </Container>
  );
}
