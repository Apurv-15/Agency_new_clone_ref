import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import {
    LayoutDashboard,
    Inbox,
    Users,
    Settings,
    Search,
    Bell,
    Plus,
    ArrowUpRight,
    CheckCircle2,
    Clock,
    AlertCircle,
    Filter,
    MoreHorizontal
} from 'lucide-react';

interface Inquiry {
    id: number;
    name: string;
    email: string;
    topic: string;
    message: string;
    status: string;
    time: string;
}

export default function Dashboard() {
    const navigate = useNavigate();
    const [inquiries, setInquiries] = useState<Inquiry[]>([]);

    useEffect(() => {
        const savedInquiries = JSON.parse(localStorage.getItem('softman_inquiries') || '[]');
        setInquiries(savedInquiries);
    }, []);

    const stats = [
        { label: "Total Inquiries", value: inquiries.length.toString(), change: inquiries.length > 0 ? "+100%" : "0%", icon: <Inbox className="w-5 h-5 text-orange-500" />, trend: "up" },
        { label: "Active Clients", value: "0", change: "0%", icon: <Users className="w-5 h-5 text-blue-500" />, trend: "up" },
        { label: "Avg. Response", value: "0h", change: "0h", icon: <Clock className="w-5 h-5 text-purple-500" />, trend: "down" },
    ];

    return (
        <div className="min-h-screen bg-[#F8F9FB] flex font-sans text-slate-900">
            {/* Sidebar */}
            <aside className="w-20 lg:w-64 bg-white border-r border-slate-100 flex flex-col p-6 hidden md:flex">
                <div className="flex items-center gap-3 mb-10 px-2 cursor-pointer" onClick={() => navigate('/')}>
                    <div className="w-10 h-10 bg-black rounded-xl flex items-center justify-center text-white font-bold">SM</div>
                    <span className="font-bold text-xl lg:block hidden">Softman</span>
                </div>

                <nav className="flex-1 space-y-2">
                    {[
                        { icon: <LayoutDashboard size={20} />, label: "Dashboard", active: true, path: "/dashboard" },
                        { icon: <Inbox size={20} />, label: "Inquiries", path: "/#connect-us" },
                        { icon: <ArrowUpRight size={20} />, label: "Live View", path: "/" },
                        { icon: <Settings size={20} />, label: "Settings", path: "/dashboard" },
                    ].map((item, i) => (
                        <div
                            key={i}
                            onClick={() => {
                                if (item.path.startsWith('/#')) {
                                    window.location.href = item.path;
                                } else {
                                    navigate(item.path);
                                }
                            }}
                            className={`flex items-center gap-3 p-3 rounded-xl cursor-pointer transition-all ${item.active ? 'bg-slate-100 text-black' : 'text-slate-400 hover:bg-slate-50 hover:text-slate-600'}`}
                        >
                            {item.icon}
                            <span className="font-semibold lg:block hidden">{item.label}</span>
                        </div>
                    ))}
                </nav>

                <div className="mt-auto p-4 bg-blue-50 rounded-2xl border border-blue-100 lg:block hidden">
                    <p className="text-xs font-bold text-blue-600 uppercase tracking-widest mb-2">Connect Us</p>
                    <p className="text-sm text-blue-800 font-medium mb-3">Looking for support or collaboration?</p>
                    <button
                        onClick={() => window.location.href = '/#connect-us'}
                        className="w-full py-2 bg-blue-600 text-white rounded-xl text-xs font-bold hover:bg-blue-700 transition-colors"
                    >
                        Go to Contact
                    </button>
                </div>
            </aside>

            {/* Main Content */}
            <main className="flex-1 p-6 md:p-10 overflow-y-auto">
                {/* Header */}
                <header className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10">
                    <div>
                        <h1 className="text-3xl font-bold mb-2">Hey, Mandar 👋</h1>
                        <p className="text-slate-500 font-medium">Here's what's happening with your inquiries today.</p>
                    </div>

                    <div className="flex items-center gap-4">
                        <div className="relative group">
                            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                            <input
                                type="text"
                                placeholder="Search everything..."
                                className="bg-white border border-slate-100 rounded-2xl pl-11 pr-6 py-3 text-sm focus:ring-4 focus:ring-black/5 transition-all w-64 outline-none"
                            />
                        </div>
                        <div className="w-12 h-12 bg-white rounded-2xl border border-slate-100 flex items-center justify-center text-slate-400 relative hover:bg-slate-50 transition-colors cursor-pointer">
                            <Bell size={20} />
                            <span className="absolute top-3 right-3 w-2 h-2 bg-red-500 rounded-full border-2 border-white" />
                        </div>
                        <div className="flex items-center gap-3 pl-4 border-l border-slate-200">
                            <img src="https://ui-avatars.com/api/?name=Mandar+Walvekar&background=000&color=fff" className="w-10 h-10 rounded-full border-2 border-white shadow-sm" alt="Profile" />
                            <div className="lg:block hidden">
                                <p className="text-sm font-bold">Mandar Walvekar</p>
                                <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest leading-none">Admin</p>
                            </div>
                        </div>
                    </div>
                </header>

                {/* Dashboard Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

                    {/* Left Column - Stats & Table */}
                    <div className="lg:col-span-8 space-y-8">
                        {/* Summary Cards */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {stats.map((stat, i) => (
                                <motion.div
                                    key={i}
                                    whileHover={{ y: -5 }}
                                    className="bg-white p-6 rounded-[2rem] shadow-[0_10px_30px_rgba(0,0,0,0.02)] border border-white flex flex-col justify-between h-40"
                                >
                                    <div className="flex justify-between items-start">
                                        <div className="p-3 bg-slate-50 rounded-xl">
                                            {stat.icon}
                                        </div>
                                        <span className={`text-xs font-bold px-2 py-1 rounded-lg ${stat.trend === 'up' ? 'bg-emerald-50 text-emerald-600' : 'bg-red-50 text-red-600'}`}>
                                            {stat.change}
                                        </span>
                                    </div>
                                    <div>
                                        <p className="text-slate-400 text-sm font-bold mb-1">{stat.label}</p>
                                        <p className="text-3xl font-black">{stat.value}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        {/* Inquiries Table Container */}
                        <div className="bg-white rounded-[2.5rem] shadow-[0_10px_30px_rgba(0,0,0,0.02)] border border-white overflow-hidden p-8 min-h-[400px]">
                            {inquiries.length > 0 ? (
                                <>
                                    <div className="flex items-center justify-between mb-8">
                                        <div className="flex items-center gap-4">
                                            <h3 className="text-xl font-bold">Recent Inquiries</h3>
                                            <div className="flex gap-2">
                                                <span className="px-3 py-1 bg-slate-100 rounded-full text-[10px] font-bold text-slate-500 uppercase">Live</span>
                                                <span className="px-3 py-1 bg-black text-white rounded-full text-[10px] font-bold uppercase transition-colors">Insights</span>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <button className="p-2 hover:bg-slate-50 rounded-xl transition-colors text-slate-400"><Filter size={18} /></button>
                                            <button className="p-2 hover:bg-slate-50 rounded-xl transition-colors text-slate-400"><MoreHorizontal size={18} /></button>
                                        </div>
                                    </div>

                                    <div className="overflow-x-auto">
                                        <table className="w-full text-left">
                                            <thead>
                                                <tr className="text-slate-400 text-xs font-bold uppercase tracking-widest border-b border-slate-50">
                                                    <th className="pb-4 font-bold">Inquirer</th>
                                                    <th className="pb-4 font-bold">Topic</th>
                                                    <th className="pb-4 font-bold">Status</th>
                                                    <th className="pb-4 font-bold">Time</th>
                                                    <th className="pb-4 font-bold">Actions</th>
                                                </tr>
                                            </thead>
                                            <tbody className="divide-y divide-slate-50">
                                                {inquiries.map((item, i) => (
                                                    <tr key={i} className="group hover:bg-slate-50/50 transition-colors">
                                                        <td className="py-5">
                                                            <div className="flex items-center gap-3">
                                                                <div className="w-9 h-9 rounded-full bg-slate-100 flex items-center justify-center font-bold text-slate-400 text-xs">
                                                                    {item.name.charAt(0)}
                                                                </div>
                                                                <div>
                                                                    <p className="text-sm font-bold">{item.name}</p>
                                                                    <p className="text-xs text-slate-400">{item.email}</p>
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td className="py-5 text-sm font-medium text-slate-600">{item.topic}</td>
                                                        <td className="py-5">
                                                            <span className={`text-[10px] font-black uppercase px-2.5 py-1 rounded-full ${item.status === 'New' ? 'bg-orange-100 text-orange-600' :
                                                                item.status === 'Pending' ? 'bg-blue-100 text-blue-600' : 'bg-emerald-100 text-emerald-600'
                                                                }`}>
                                                                {item.status}
                                                            </span>
                                                        </td>
                                                        <td className="py-5 text-xs text-slate-400 font-medium">{item.time}</td>
                                                        <td className="py-5">
                                                            <button className="p-2 bg-slate-50 rounded-lg text-slate-400 hover:text-black hover:bg-slate-100 transition-all">
                                                                <ArrowUpRight size={16} />
                                                            </button>
                                                        </td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                </>
                            ) : (
                                <div className="p-12 flex flex-col items-center justify-center text-center">
                                    <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center text-slate-300 mb-6">
                                        <Inbox size={32} />
                                    </div>
                                    <h3 className="text-2xl font-bold mb-2">No Inquiries Found</h3>
                                    <p className="text-slate-400 max-w-sm mb-8">You haven't received any inquiries yet. New submissions from your contact form will appear here.</p>
                                    <button
                                        onClick={() => window.location.href = '/#connect-us'}
                                        className="px-8 py-3 bg-black text-white rounded-xl font-bold hover:bg-slate-800 transition-all flex items-center gap-2"
                                    >
                                        View Contact Form <ArrowUpRight size={18} />
                                    </button>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Right Column - Sub-cards */}
                    <div className="lg:col-span-4 space-y-8">
                        {/* Quick View Card */}
                        <div className="bg-[#1D1D1F] text-white p-8 rounded-[2.5rem] relative overflow-hidden h-80 flex flex-col justify-between">
                            <div className="relative z-10">
                                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">Engagement Rate</p>
                                <p className="text-6xl font-black mb-1">84%</p>
                                <p className="text-sm text-slate-400 font-medium">+5% from last month</p>
                            </div>

                            <div className="relative z-10">
                                <div className="flex -space-x-3 mb-4">
                                    {[1, 2, 3, 4].map(i => (
                                        <img key={i} src={`https://i.pravatar.cc/100?u=${i}`} className="w-10 h-10 rounded-full border-4 border-[#1D1D1F]" alt="Team" />
                                    ))}
                                    <div className="w-10 h-10 rounded-full bg-slate-800 border-4 border-[#1D1D1F] flex items-center justify-center text-xs font-bold">+12</div>
                                </div>
                                <button className="w-full py-4 bg-white text-black rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-slate-100 transition-colors">
                                    View Analytics <ArrowUpRight size={18} />
                                </button>
                            </div>

                            {/* Abstract Glow Background */}
                            <div className="absolute -right-20 -top-20 w-64 h-64 bg-blue-600/20 rounded-full blur-[100px]" />
                            <div className="absolute -left-20 -bottom-20 w-64 h-64 bg-orange-600/20 rounded-full blur-[100px]" />
                        </div>

                        {/* Status Card */}
                        <div className="bg-white p-8 rounded-[2.5rem] border border-white shadow-[0_10px_30px_rgba(0,0,0,0.02)]">
                            <div className="flex items-center justify-between mb-8">
                                <h3 className="font-bold text-lg">System Status</h3>
                                <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
                            </div>

                            <div className="space-y-6">
                                {[
                                    { label: "Contact Form API", status: "Healthy", icon: <CheckCircle2 className="text-emerald-500" /> },
                                    { label: "Notification Engine", status: "Healthy", icon: <CheckCircle2 className="text-emerald-500" /> },
                                    { label: "Database Sync", status: "Healthy", icon: <CheckCircle2 className="text-emerald-500" /> },
                                    { label: "Auto-Responder", status: "Warning", icon: <AlertCircle className="text-orange-500" /> },
                                ].map((item, i) => (
                                    <div key={i} className="flex items-center justify-between">
                                        <div className="flex items-center gap-3">
                                            <div className="p-2 bg-slate-50 rounded-lg">{React.cloneElement(item.icon as React.ReactElement, { size: 16 } as any)}</div>
                                            <p className="text-sm font-bold text-slate-700">{item.label}</p>
                                        </div>
                                        <p className="text-[10px] font-black uppercase text-slate-400">{item.status}</p>
                                    </div>
                                ))}
                            </div>

                            <button className="w-full mt-8 py-3 bg-slate-50 text-slate-600 rounded-xl text-sm font-bold hover:bg-slate-100 transition-colors">
                                Refresh Status
                            </button>
                        </div>

                        {/* Promotion/Action Card */}
                        <div className="bg-orange-500 p-8 rounded-[2.5rem] text-white flex flex-col justify-between items-start h-56 relative overflow-hidden group hover:bg-orange-600 transition-all">
                            <Plus size={32} className="group-hover:rotate-90 transition-transform duration-500 mb-4" />
                            <div>
                                <h3 className="text-2xl font-bold mb-2">Create Global Partner</h3>
                                <p className="text-orange-100 text-sm font-medium">Add new enterprise partners to the mesh network.</p>
                            </div>
                            <div className="absolute -right-4 -bottom-4 w-32 h-32 bg-white/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700" />
                        </div>

                    </div>

                </div>
            </main>
        </div>
    );
}
