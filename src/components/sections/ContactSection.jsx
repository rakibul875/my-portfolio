"use client";

import { Send } from "lucide-react";
import Container from "../ui/Container";
import Button from "../ui/Button";

export default function ContactSection() {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic
  };

  return (
    <Container id="contact">
      <div className="flex items-center justify-between mb-10 md:mb-12">
        <h2 className="font-h3 text-2xl md:text-3xl text-white uppercase tracking-tighter">
          Initiate Collaboration
        </h2>
        <span className="font-code-label text-primary/50 text-xs md:text-sm">[04]</span>
      </div>
      <div className="glass-card p-8 md:p-12 rounded-[24px] md:rounded-[32px] light-stroke max-w-3xl mx-auto shadow-[0_20px_60px_rgba(0,0,0,0.5)]">
        <form onSubmit={handleSubmit} className="space-y-6 md:space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            <div>
              <label className="block font-code-label text-[10px] md:text-xs text-primary mb-3 uppercase tracking-widest">
                REQUESTER_NAME
              </label>
              <input
                type="text"
                placeholder="IDENTITY_REQUIRED"
                required
                className="w-full bg-[#050505]/50 border border-white/10 rounded-xl text-white focus:ring-1 focus:ring-primary focus:border-primary focus:bg-[#050505] px-5 py-4 font-body-md outline-none transition-all placeholder:text-white/20"
              />
            </div>
            <div>
              <label className="block font-code-label text-[10px] md:text-xs text-primary mb-3 uppercase tracking-widest">
                COMMUNICATION_CHANNEL
              </label>
              <input
                type="email"
                placeholder="EMAIL_ENCRYPTED"
                required
                className="w-full bg-[#050505]/50 border border-white/10 rounded-xl text-white focus:ring-1 focus:ring-primary focus:border-primary focus:bg-[#050505] px-5 py-4 font-body-md outline-none transition-all placeholder:text-white/20"
              />
            </div>
          </div>
          <div>
            <label className="block font-code-label text-[10px] md:text-xs text-primary mb-3 uppercase tracking-widest">
              PROTOCOL_DETAILS
            </label>
            <textarea
              placeholder="MESSAGE_PAYLOAD"
              rows={5}
              required
              className="w-full bg-[#050505]/50 border border-white/10 rounded-xl text-white focus:ring-1 focus:ring-primary focus:border-primary focus:bg-[#050505] px-5 py-4 font-body-md outline-none transition-all resize-y placeholder:text-white/20"
            ></textarea>
          </div>
          <div className="pt-4">
            <Button type="submit" variant="primary" icon={<Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />}>
              SEND_REQUEST
            </Button>
          </div>
        </form>
      </div>
    </Container>
  );
}
