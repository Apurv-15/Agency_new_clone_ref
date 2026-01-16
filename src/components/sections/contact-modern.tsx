"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, Mail, MapPin, ChevronDown, ShieldAlert, Headphones, CheckCircle2 } from 'lucide-react';
import Image from '@/components/ui/image-shim';

export function ContactModern() {
    const [submitted, setSubmitted] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        topic: 'General Inquiry',
        message: ''
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        // Form Inquiry Object
        const newInquiry = {
            ...formData,
            id: Date.now(),
            status: 'New',
            time: 'Just now',
            date: new Date().toISOString()
        };

        // Save to LocalStorage for Dashboard to read
        const existingInquiries = JSON.parse(localStorage.getItem('softman_inquiries') || '[]');
        localStorage.setItem('softman_inquiries', JSON.stringify([newInquiry, ...existingInquiries]));

        // Show Success View
        setSubmitted(true);

        // Reset form after delay
        setTimeout(() => {
            setSubmitted(false);
            setFormData({ name: '', email: '', topic: 'General Inquiry', message: '' });
        }, 3000);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
    };

    return (
        <section id="connect-us" className="py-24 bg-[#FAFBFF]">
            <div className="max-w-6xl mx-auto px-6">
                {/* Header */}
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-5xl font-bold text-slate-900 mb-6 tracking-tight">
                            Get in <span className="relative inline-block">
                                touch
                                <motion.span
                                    initial={{ width: 0 }}
                                    whileInView={{ width: '100%' }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.5, duration: 0.8 }}
                                    className="absolute -bottom-1 left-0 h-1.5 bg-blue-500/20 rounded-full"
                                />
                            </span>
                        </h2>
                        <p className="text-slate-500 max-w-xl mx-auto text-lg leading-relaxed">
                            Reach out to our team at any time for support or questions and we'll get back to you within 2 business days.
                        </p>
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                    {/* Left Column: Info Cards & Character */}
                    <div className="lg:col-span-5 flex flex-col gap-6">

                        {/* Address Card */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="bg-white p-6 rounded-3xl shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-slate-100 flex items-start gap-4 h-auto group hover:bg-slate-50 transition-colors"
                        >
                            <div className="w-12 h-12 rounded-2xl bg-slate-100 flex-shrink-0 flex items-center justify-center text-slate-600 group-hover:bg-white group-hover:text-blue-600 transition-colors shadow-sm">
                                <MapPin className="w-5 h-5" />
                            </div>
                            <div>
                                <h3 className="text-lg font-bold text-slate-800 mb-1">Our Address</h3>
                                <p className="text-slate-500 font-medium leading-relaxed text-sm">
                                    Plot No. 49, 'Anandyatri', Devanagari, Shahnoorwadi,<br />
                                    Aurangabad - 431 005, Maharashtra, INDIA.
                                </p>
                            </div>
                        </motion.div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {/* Desk & Escalation Card (Yellowish) */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 }}
                                className="bg-[#FFFFF0] p-6 rounded-3xl border border-yellow-100/50 shadow-sm"
                            >
                                <div className="flex items-center gap-2 mb-4">
                                    <div className="w-8 h-8 rounded-xl bg-white flex items-center justify-center text-yellow-600 shadow-sm">
                                        <Phone className="w-4 h-4" />
                                    </div>
                                    <h3 className="font-bold text-slate-800">Desk</h3>
                                </div>
                                <div className="space-y-3 mb-6">
                                    <p className="text-sm font-bold text-slate-700">+91-240-2343230</p>
                                    <div className="flex items-center gap-2 text-emerald-600">
                                        <Mail className="w-3.5 h-3.5" />
                                        <p className="text-[12px] font-black underline transition-opacity hover:opacity-70">info@softmanindia.com</p>
                                    </div>
                                </div>

                                <div className="mt-4 pt-4 border-t border-yellow-200/50">
                                    <div className="flex items-center gap-2 mb-2 text-red-700">
                                        <ShieldAlert className="w-4 h-4" />
                                        <h3 className="font-bold text-sm">Escalation</h3>
                                    </div>
                                    <div className="flex items-center gap-2 text-emerald-600">
                                        <Mail className="w-3.5 h-3.5" />
                                        <p className="text-[12px] font-black underline transition-opacity hover:opacity-70">softman.mandar@gmail.com</p>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Support Card (Blueish) */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.3 }}
                                className="bg-[#E0F2FE] p-6 rounded-3xl border border-blue-100 shadow-sm"
                            >
                                <div className="flex items-center gap-2 mb-4">
                                    <div className="w-8 h-8 rounded-xl bg-white flex items-center justify-center text-blue-600 shadow-sm">
                                        <Headphones className="w-4 h-4" />
                                    </div>
                                    <h3 className="font-bold text-slate-800">Support</h3>
                                </div>
                                <div className="space-y-2 mb-4">
                                    <p className="text-xs font-bold text-slate-700 tracking-tight flex items-center gap-2">
                                        <Phone className="w-3 h-3 opacity-50" /> +91-240-2343230
                                    </p>
                                    <p className="text-xs font-bold text-slate-700 tracking-tight flex items-center gap-2">
                                        <Phone className="w-3 h-3 opacity-50" /> +91-9422211938
                                    </p>
                                    <p className="text-xs font-bold text-slate-700 tracking-tight flex items-center gap-2">
                                        <Phone className="w-3 h-3 opacity-50" /> +91-9422808145
                                    </p>
                                </div>
                                <div className="flex items-center gap-2 text-emerald-600 pt-2 border-t border-blue-200/50">
                                    <Mail className="w-3.5 h-3.5" />
                                    <p className="text-[12px] font-black underline transition-opacity hover:opacity-70">support@softmanindia.com</p>
                                </div>
                            </motion.div>
                        </div>

                        {/* Character Illustration */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4 }}
                            className="mt-4 flex justify-center"
                        >
                            <div className="relative w-40 h-56 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-700 select-none pointer-events-none">
                                <Image
                                    src="/Users/atharvadeshmukh/.gemini/antigravity/brain/40c8f2f4-0d5d-4dfc-bd2a-c8f9cd6255c2/contact_character_illustration_1768500416040.png"
                                    alt="Contact Illustration"
                                    fill
                                    className="object-contain"
                                />
                            </div>
                        </motion.div>
                    </div>

                    {/* Right Column: Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="lg:col-span-7"
                    >
                        <div className="bg-white p-10 rounded-[3rem] shadow-[0_20px_50px_rgba(0,0,0,0.04)] border border-slate-100 relative overflow-hidden h-full">
                            {/* Dot Pattern Background */}
                            <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
                                style={{
                                    backgroundImage: 'radial-gradient(#000 1.5px, transparent 0)',
                                    backgroundSize: '32px 32px'
                                }}
                            />

                            <AnimatePresence mode="wait">
                                {!submitted ? (
                                    <motion.div
                                        key="form"
                                        initial={{ opacity: 0, scale: 0.95 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0, scale: 0.95 }}
                                    >
                                        <h3 className="text-3xl font-bold text-slate-900 mb-8 relative z-10 tracking-tight">How can we help today?</h3>

                                        <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                                            <div className="space-y-2">
                                                <label className="text-[10px] font-black text-slate-400 ml-1 uppercase tracking-[0.2em]">Name</label>
                                                <input
                                                    required
                                                    name="name"
                                                    value={formData.name}
                                                    onChange={handleChange}
                                                    type="text"
                                                    placeholder="Jane Smith"
                                                    className="w-full bg-slate-50 border-none rounded-2xl px-6 py-4 focus:ring-4 focus:ring-blue-500/10 transition-all placeholder:text-slate-300 font-medium text-slate-700 shadow-inner"
                                                />
                                            </div>

                                            <div className="space-y-2">
                                                <label className="text-[10px] font-black text-slate-400 ml-1 uppercase tracking-[0.2em]">Email</label>
                                                <input
                                                    required
                                                    name="email"
                                                    value={formData.email}
                                                    onChange={handleChange}
                                                    type="email"
                                                    placeholder="jane@softman.com"
                                                    className="w-full bg-slate-50 border-none rounded-2xl px-6 py-4 focus:ring-4 focus:ring-blue-500/10 transition-all placeholder:text-slate-300 font-medium text-slate-700 shadow-inner"
                                                />
                                            </div>

                                            <div className="space-y-2">
                                                <label className="text-[10px] font-black text-slate-400 ml-1 uppercase tracking-[0.2em]">Topic</label>
                                                <div className="relative">
                                                    <select
                                                        name="topic"
                                                        value={formData.topic}
                                                        onChange={handleChange}
                                                        className="w-full bg-slate-50 border-none rounded-2xl px-6 py-4 appearance-none focus:ring-4 focus:ring-blue-500/10 transition-all text-slate-600 font-medium shadow-inner cursor-pointer"
                                                    >
                                                        <option>General Inquiry</option>
                                                        <option>Technical Support</option>
                                                        <option>Project Consultation</option>
                                                        <option>Billing</option>
                                                    </select>
                                                    <ChevronDown className="absolute right-6 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
                                                </div>
                                            </div>

                                            <div className="space-y-2">
                                                <label className="text-[10px] font-black text-slate-400 ml-1 uppercase tracking-[0.2em]">Message</label>
                                                <textarea
                                                    required
                                                    name="message"
                                                    value={formData.message}
                                                    onChange={handleChange}
                                                    placeholder="Enter your message"
                                                    rows={4}
                                                    className="w-full bg-slate-50 border-none rounded-2xl px-6 py-4 focus:ring-4 focus:ring-blue-500/10 transition-all placeholder:text-slate-300 font-medium text-slate-700 shadow-inner resize-none"
                                                />
                                            </div>

                                            <motion.button
                                                type="submit"
                                                whileHover={{ scale: 1.02 }}
                                                whileTap={{ scale: 0.98 }}
                                                className="w-full bg-[#1D1D1F] text-white font-bold py-5 rounded-2xl hover:bg-black transition-all shadow-xl shadow-black/10 text-lg tracking-tight"
                                            >
                                                Submit Message
                                            </motion.button>
                                        </form>
                                    </motion.div>
                                ) : (
                                    <motion.div
                                        key="success"
                                        initial={{ opacity: 0, scale: 0.95 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        className="h-full flex flex-col items-center justify-center text-center space-y-6"
                                    >
                                        <div className="w-20 h-20 bg-emerald-50 rounded-full flex items-center justify-center text-emerald-500 mb-2">
                                            <CheckCircle2 size={40} />
                                        </div>
                                        <h3 className="text-3xl font-bold text-slate-900">Message Sent!</h3>
                                        <p className="text-slate-500 text-lg max-w-sm">
                                            Thank you for reaching out. We've received your inquiry and will get back to you shortly.
                                        </p>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
