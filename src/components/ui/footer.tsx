"use client";

import { Instagram, Linkedin, Twitter } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export function Footer() {
    return (
        <footer className="w-full py-16 px-4 md:px-8 bg-background border-t border-border/40">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
                    {/* Left Side: Subscribe & Logo */}
                    <div className="flex flex-col items-start gap-6">
                        {/* Logo */}
                        <Link to="/" className="flex items-center space-x-2 mb-2">
                            <div className="w-8 h-8 bg-gradient-to-br from-violet-600 to-indigo-600 rounded-lg flex items-center justify-center shadow-lg shadow-violet-500/50">
                                <span className="text-white font-bold text-lg">S</span>
                            </div>
                        </Link>

                        <div>
                            <h3 className="text-xl font-semibold text-foreground mb-4">Stay connected</h3>
                            <div className="flex flex-col sm:flex-row gap-3">
                                <input
                                    type="email"
                                    placeholder="name@email.com"
                                    className="px-4 py-3 bg-muted rounded-xl w-full sm:w-64 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all placeholder:text-muted-foreground"
                                />
                                <Button className="bg-foreground text-background hover:bg-foreground/90 rounded-xl px-6 font-medium">
                                    Subscribe
                                </Button>
                            </div>
                        </div>
                    </div>

                    {/* Right Side: Social Icons */}
                    <div className="flex justify-start md:justify-end items-start gap-4">
                        <a href="#" className="p-3 rounded-full bg-muted hover:bg-muted/80 transition-colors text-foreground">
                            <Instagram className="w-5 h-5" />
                        </a>
                        <a href="#" className="p-3 rounded-full bg-muted hover:bg-muted/80 transition-colors text-foreground">
                            <Linkedin className="w-5 h-5" />
                        </a>
                        <a href="#" className="p-3 rounded-full bg-muted hover:bg-muted/80 transition-colors text-foreground">
                            <Twitter className="w-5 h-5" />
                        </a>
                    </div>
                </div>

                {/* Bottom Section: Links & Copyright */}
                <div className="flex flex-col md:flex-row justify-between items-end gap-12">
                    {/* Links Columns */}
                    <div className="grid grid-cols-1 min-[400px]:grid-cols-3 gap-12 md:gap-24 w-full md:w-auto">
                        <div className="flex flex-col gap-4">
                            <h4 className="font-semibold text-foreground">Product</h4>
                            <Link to="/" className="text-muted-foreground hover:text-foreground transition-colors text-sm">Home</Link>
                            <Link to="/" className="text-muted-foreground hover:text-foreground transition-colors text-sm">Pricing</Link>
                            <Link to="/" className="text-muted-foreground hover:text-foreground transition-colors text-sm">Features</Link>
                            <Link to="/" className="text-muted-foreground hover:text-foreground transition-colors text-sm">FAQ</Link>
                        </div>

                        <div className="flex flex-col gap-4">
                            <h4 className="font-semibold text-foreground">Company</h4>
                            <Link to="/" className="text-muted-foreground hover:text-foreground transition-colors text-sm">About</Link>
                            <Link to="/" className="text-muted-foreground hover:text-foreground transition-colors text-sm">Contact</Link>
                            <Link to="/" className="text-muted-foreground hover:text-foreground transition-colors text-sm">Blog</Link>
                        </div>

                        <div className="flex flex-col gap-4">
                            <h4 className="font-semibold text-foreground">More</h4>
                            <Link to="/" className="text-muted-foreground hover:text-foreground transition-colors text-sm">Privacy Policy</Link>
                            <Link to="/" className="text-muted-foreground hover:text-foreground transition-colors text-sm">Terms</Link>
                        </div>
                    </div>

                    {/* Copyright */}
                    <div className="text-right w-full md:w-auto">
                        <p className="text-muted-foreground text-sm">
                            © 2024 Softman. All rights reserved.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}
