import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Lock, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => {
    if (path === '/' && location.pathname === '/') return true;
    if (path !== '/' && location.pathname.startsWith(path)) return true;
    return false;
  };

  const navItemClass = (path: string) => cn(
    "text-sm font-medium transition-colors hover:text-foreground/80",
    isActive(path)
      ? "text-foreground font-semibold"
      : "text-muted-foreground"
  );

  return (
    <nav className="fixed top-0 left-0 right-0 z-[999] bg-background/80 backdrop-blur-md border-b border-border h-16">
      <div className="container mx-auto px-6 h-full flex items-center justify-between">

        {/* Logo Left */}
        <Link to="/" className="flex items-center shrink-0">
          <img
            src="/images/logo/logo.png"
            alt="SIPL"
            className="h-8 md:h-10 w-auto object-contain"
          />
        </Link>

        {/* Navigation Center (Desktop) */}
        <div className="hidden lg:flex flex-1 items-center justify-center gap-8">
          <Link to="/process" className={navItemClass('/process')}>
            HOME
          </Link>
          <Link to="/about-us" className={navItemClass('/about-us')}>
            ABOUT US
          </Link>
          <Link to="/products" className={navItemClass('/products')}>
            PRODUCTS
          </Link>
          <Link to="/projects" className={navItemClass('/projects')}>
            PROJECTS
          </Link>

          {/* MORE Dropdown */}
          <div className="relative group cursor-pointer h-full flex items-center">
            <span className={cn("flex items-center gap-1 uppercase", navItemClass('#'))}>
              MORE <span className="text-[10px] transform group-hover:rotate-180 transition-transform">▼</span>
            </span>

            <div className="absolute top-12 left-1/2 -translate-x-1/2 w-40 bg-white shadow-lg rounded-lg overflow-hidden opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 border border-slate-100 transform translate-y-2 group-hover:translate-y-0 py-1">
              <Link to="/timeline" className="block px-4 py-2 text-sm font-medium text-slate-600 hover:bg-slate-50 hover:text-foreground">
                Timeline
              </Link>
              <Link to="/partners" className="block px-4 py-2 text-sm font-medium text-slate-600 hover:bg-slate-50 hover:text-foreground">
                Partners
              </Link>
            </div>
          </div>

          <Link to="/contact" className={navItemClass('/contact')}>
            CONTACT
          </Link>

          <Link to="/events" className={navItemClass('/events')}>
            EVENTS
          </Link>
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-2 shrink-0">
          {/* Lock Icon Link -> Dashboard */}
          <Link to="/dashboard" className="text-muted-foreground hover:text-foreground transition-colors p-2">
            <Lock className="w-4 h-4" />
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-muted-foreground hover:text-foreground transition-colors"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="lg:hidden bg-background/95 backdrop-blur-lg border-b border-border overflow-hidden"
          >
            <div className="flex flex-col p-6 gap-4">
              <Link
                to="/process"
                className={cn("text-lg font-bold uppercase", isActive('/process') ? "text-foreground" : "text-muted-foreground")}
                onClick={() => setIsOpen(false)}
              >
                HOME
              </Link>
              <Link
                to="/about-us"
                className={cn("text-lg font-bold uppercase", isActive('/about-us') ? "text-foreground" : "text-muted-foreground")}
                onClick={() => setIsOpen(false)}
              >
                ABOUT US
              </Link>
              <Link
                to="/products"
                className={cn("text-lg font-bold uppercase", isActive('/products') ? "text-foreground" : "text-muted-foreground")}
                onClick={() => setIsOpen(false)}
              >
                PRODUCTS
              </Link>
              <Link
                to="/projects"
                className={cn("text-lg font-bold uppercase", isActive('/projects') ? "text-foreground" : "text-muted-foreground")}
                onClick={() => setIsOpen(false)}
              >
                PROJECTS
              </Link>

              {/* Mobile MORE links */}
              <div className="flex flex-col gap-3 py-2 border-t border-border">
                <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">More Resources</span>
                <Link
                  to="/timeline"
                  className="text-base font-semibold text-muted-foreground hover:text-foreground"
                  onClick={() => setIsOpen(false)}
                >
                  Timeline
                </Link>
                <Link
                  to="/partners"
                  className="text-base font-semibold text-muted-foreground hover:text-foreground"
                  onClick={() => setIsOpen(false)}
                >
                  Partners
                </Link>
              </div>

              <Link
                to="/contact"
                className={cn("text-lg font-bold uppercase", isActive('/contact') ? "text-foreground" : "text-muted-foreground")}
                onClick={() => setIsOpen(false)}
              >
                CONTACT
              </Link>
              <Link
                to="/events"
                className={cn("text-lg font-bold uppercase", isActive('/events') ? "text-foreground" : "text-muted-foreground")}
                onClick={() => setIsOpen(false)}
              >
                EVENTS
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
