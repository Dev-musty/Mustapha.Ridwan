import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Calendar, ArrowRight, Loader2, CheckCircle, XCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';
import { socials } from '../socials';

const Contact = () => {
    const formRef = useRef();
    const [loading, setLoading] = useState(false);
    const [status, setStatus] = useState({ type: '', message: '' });

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);
        setStatus({ type: '', message: '' });

        emailjs.sendForm(
            import.meta.env.VITE_EMAILJS_SERVICE_ID,
            import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
            formRef.current,
            import.meta.env.VITE_EMAILJS_PUBLIC_KEY
        )
        .then((result) => {
            setLoading(false);
            setStatus({ type: 'success', message: 'Message sent successfully! I will get back to you soon.' });
            formRef.current.reset();
        }, (error) => {
            setLoading(false);
            setStatus({ type: 'error', message: 'Something went wrong. Please try again or email me directly.' });
            console.error(error);
        });
    };

    return (
        <section className="min-h-screen bg-blueprint-bg relative overflow-hidden">
            <div className="py-32 px-4 md:px-6 relative border-b border-blueprint-grid">
                <div className="max-w-6xl mx-auto text-center relative z-10">
                    <motion.h1 
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-7xl lg:text-9xl font-display font-bold text-blueprint-text leading-[0.9] tracking-tighter"
                    >
                        INTERESTED IN<br/>
                        COLLABORATION?<br/>
                        LET'S BUILD.
                    </motion.h1>
                </div>

                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blueprint-accent/5 rounded-full blur-3xl -z-10 pointer-events-none"></div>
            </div>

            <div id="form" className="max-w-7xl mx-auto py-20 px-4 md:px-6 grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">
                
                {/* LEFT COLUMN - INFO */}
                <div>
                     <div className="mb-2 text-blueprint-accent font-mono text-sm tracking-widest">// GET IN TOUCH</div>
                     <h2 className="text-4xl md:text-6xl font-display font-bold text-blueprint-text mb-8 leading-none">
                        LET'S CONNECT &<br/>COLLABORATE
                        <span className="inline-block w-3 h-3 md:w-4 md:h-4 bg-blueprint-accent rounded-full ml-4 animate-pulse"></span>
                     </h2>
                     <p className="text-blueprint-muted text-lg mb-12 max-w-md">
                        Have a project in mind? Let's make it happen! Drop me a message, and I'll connect with you soon.
                     </p>

                     {/* Social Links */}
                     <div className="mb-12">
                        <div className="flex flex-wrap gap-x-6 gap-y-2 font-mono text-sm text-blueprint-text">
                            <a href={socials[0].url} className="hover:text-blueprint-accent hover:underline">/ Twitter (X)</a>
                            <a href={socials[1].url} className="hover:text-blueprint-accent hover:underline">/ LinkedIn</a>
                            <a href={socials[2].url} className="hover:text-blueprint-accent hover:underline">/ GitHub</a>
                        </div>
                     </div>

                     {/* Contact Actions */}
                     <div className="space-y-6">
                        <a href="mailto:mustapharid19@gmail.com" className="flex items-center gap-3 text-blueprint-text hover:text-blueprint-accent transition-colors group">
                            <Mail size={20} />
                            <span className="font-mono text-sm">mustapharid19@gmail.com</span>
                            <ArrowRight size={16} className="opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" />
                        </a>
                     </div>
                </div>

                {/* RIGHT COLUMN - FORM */}
                <div className="bg-blueprint-card/50 backdrop-blur-sm p-1 rounded-xl">
                    <form ref={formRef} onSubmit={handleSubmit} className="space-y-8">
                        <div>
                            <label className="block text-blueprint-text font-bold mb-2 text-sm">Name*</label>
                            <input 
                                type="text" 
                                name="name"
                                required
                                placeholder="Your name" 
                                className="w-full bg-blueprint-bg border border-blueprint-grid rounded-lg p-4 text-blueprint-text placeholder:text-blueprint-muted/50 focus:outline-none focus:border-blueprint-accent transition-colors"
                            />
                        </div>
                        <div>
                            <label className="block text-blueprint-text font-bold mb-2 text-sm">Email*</label>
                            <input 
                                type="email" 
                                name="user_email"
                                required
                                placeholder="Email address" 
                                className="w-full bg-blueprint-bg border border-blueprint-grid rounded-lg p-4 text-blueprint-text placeholder:text-blueprint-muted/50 focus:outline-none focus:border-blueprint-accent transition-colors"
                            />
                        </div>
                        <div>
                            <label className="block text-blueprint-text font-bold mb-2 text-sm">Project Description*</label>
                            <textarea 
                                name="message"
                                required
                                rows="5"
                                placeholder="Write your project details" 
                                className="w-full bg-blueprint-bg border border-blueprint-grid rounded-lg p-4 text-blueprint-text placeholder:text-blueprint-muted/50 focus:outline-none focus:border-blueprint-accent transition-colors resize-none"
                            ></textarea>
                        </div>

                        {status.message && (
                            <div className={`p-4 rounded-lg flex items-center gap-2 ${status.type === 'success' ? 'bg-green-500/10 text-green-500' : 'bg-red-500/10 text-red-500'}`}>
                                {status.type === 'success' ? <CheckCircle size={20} /> : <XCircle size={20} />}
                                <span className="text-sm font-medium">{status.message}</span>
                            </div>
                        )}

                        <button 
                            type="submit"
                            disabled={loading}
                            className="w-full md:w-auto bg-blueprint-accent text-blueprint-bg font-bold font-mono px-8 py-4 rounded-lg hover:opacity-90 transition-opacity flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            {loading ? (
                                <>
                                    <Loader2 size={20} className="animate-spin" />
                                    Sending...
                                </>
                            ) : (
                                "Send Your Message"
                            )}
                        </button>
                    </form>
                </div>

            </div>
        </section>
    );
};

export default Contact;
