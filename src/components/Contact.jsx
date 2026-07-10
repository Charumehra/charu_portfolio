import React, { useState } from "react";
import { motion } from "framer-motion";
import { FiGithub, FiLinkedin, FiMail, FiSend, FiMapPin } from "react-icons/fi";
import { Card } from "./ui/Card";
import { Button } from "./ui/Button";

// Import the official Browser SDK
import emailjs from "@emailjs/browser";

const contactMethods = [
  { label: "LinkedIn", value: "charu-mehra-cm", href: "https://www.linkedin.com/in/charu-mehra-cm/", icon: FiLinkedin, activeText: "Let's Connect" },
  { label: "GitHub", value: "github.com/Charumehra", href: "https://github.com/Charumehra", icon: FiGithub, activeText: "Review Source" },
  { label: "Email", value: "charumehracm2004@gmail.com", href: "mailto:charumehracm2004@gmail.com", icon: FiMail, activeText: "Drop an Email" },
];

const Contact = () => {
  const [formState, setFormState] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Live EmailJS Serverless Integration
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Form parameter template matching the EmailJS Dashboard setup keys
    const templateParams = {
      from_name: formState.name,
      reply_to: formState.email,
      message: formState.message,
    };

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        templateParams,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      alert("Payload dispatched successfully! I will reach out shortly.");
      setFormState({ name: "", email: "", message: "" }); // Flushes standard inputs
    } catch (error) {
      console.error("System dispatch fault:", error);
      alert("Transmission failed. Please use direct links on the left.");
    } finally {
      setIsSubmitting(false); // Re-enables input tracking
    }
  };

  return (
    <section id="contact" className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 py-24 bg-slate-950/40">
      <div className="w-full max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-12 items-stretch">
        
        {/* Left Communication Channels Anchor */}
        <div className="flex flex-col justify-between space-y-8">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-3.5 py-1 text-xs font-bold uppercase tracking-widest text-cyan-400">
              Connection Terminal
            </div>
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white leading-tight">
              Let's scale something beautiful together.
            </h2>
            <p className="text-slate-400 text-sm sm:text-base leading-relaxed max-w-md">
              Whether you want to build an enterprise web app, coordinate a project, or just talk system architecture—feel free to drop a line.
            </p>
          </div>

          <div className="space-y-3.5">
            {contactMethods.map((method) => {
              const Icon = method.icon;
              const isEmail = method.label === "Email";
              return (
                <a
                  key={method.label}
                  href={method.href}
                  target={isEmail ? undefined : "_blank"}
                  rel={isEmail ? undefined : "noreferrer"}
                  className="flex items-center justify-between p-4 rounded-xl border border-white/5 bg-slate-900/20 hover:bg-slate-900/60 hover:border-cyan-500/30 transition-all group"
                >
                  <div className="flex items-center gap-3.5">
                    <div className="h-10 w-10 flex items-center justify-center rounded-lg bg-white/5 text-slate-400 group-hover:bg-cyan-500/10 group-hover:text-cyan-400 transition-colors">
                      <Icon className="text-lg" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">{method.label}</p>
                      <p className="text-sm font-medium text-slate-300 group-hover:text-white transition-colors mt-0.5">{method.value}</p>
                    </div>
                  </div>
                  <span className="text-xs font-mono text-slate-600 group-hover:text-cyan-400 transition-colors pr-2">
                    {method.activeText} →
                  </span>
                </a>
              );
            })}
          </div>

          <div className="flex items-center gap-2.5 text-xs font-mono text-slate-500 pt-4 border-t border-white/5">
            <FiMapPin className="text-cyan-400 text-sm animate-pulse" />
            <span>Based out of Delhi NCR, India — Operating Globally</span>
          </div>
        </div>

        {/* Right Form Shell */}
        <Card hoverEffect={false} className="relative flex flex-col justify-center border-white/10 bg-slate-900/40 backdrop-blur-2xl">
          <h3 className="text-lg font-bold text-white tracking-tight mb-1">Direct Message Pipeline</h3>
          <p className="text-xs text-slate-400 mb-6">Asynchronous secure transmission layer</p>
          
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="group relative border-b border-white/10 focus-within:border-cyan-400 transition-colors">
              <label className="block text-[10px] font-bold uppercase tracking-widest text-slate-500 group-focus-within:text-cyan-400 transition-colors">Identification Name</label>
              <input
                type="text"
                required
                value={formState.name}
                onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                placeholder="e.g., Jane Doe"
                className="w-full bg-transparent py-3 text-sm text-white placeholder-slate-600 focus:outline-none"
              />
            </div>

            <div className="group relative border-b border-white/10 focus-within:border-cyan-400 transition-colors">
              <label className="block text-[10px] font-bold uppercase tracking-widest text-slate-500 group-focus-within:text-cyan-400 transition-colors">Electronic Mail Address</label>
              <input
                type="email"
                required
                value={formState.email}
                onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                placeholder="e.g., name@company.com"
                className="w-full bg-transparent py-3 text-sm text-white placeholder-slate-600 focus:outline-none"
              />
            </div>

            <div className="group relative border-b border-white/10 focus-within:border-cyan-400 transition-colors">
              <label className="block text-[10px] font-bold uppercase tracking-widest text-slate-500 group-focus-within:text-cyan-400 transition-colors">Payload Message</label>
              <textarea
                required
                rows={4}
                value={formState.message}
                onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                placeholder="Describe project details or required infrastructure specs..."
                className="w-full bg-transparent py-3 text-sm text-white placeholder-slate-600 resize-none focus:outline-none"
              />
            </div>

            <Button type="submit" variant="primary" className="w-full" disabled={isSubmitting}>
              {isSubmitting ? "Transmitting..." : <><FiSend /> Dispatch Payload</>}
            </Button>
          </form>
        </Card>

      </div>
    </section>
  );
};

export default Contact;
