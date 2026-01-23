import { Link, useLocation } from "react-router-dom";
import { Lock } from "lucide-react";
import { cn } from "@/lib/utils";

export function Navbar() {
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

        {/* Navigation Center */}
        <div className="hidden md:flex flex-1 items-center justify-center gap-8">
          <Link to="/" className={navItemClass('/')}>
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
            <span className={cn("flex items-center gap-1", navItemClass('#'))}>
              MORE <span className="text-[10px] transform group-hover:rotate-180 transition-transform">▼</span>
            </span>

            <div className="absolute top-12 left-1/2 -translate-x-1/2 w-40 bg-white shadow-lg rounded-lg overflow-hidden opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 border border-slate-100 transform translate-y-2 group-hover:translate-y-0 py-1">
              <Link to="/timeline" className="block px-4 py-2 text-sm font-medium text-slate-600 hover:bg-slate-50 hover:text-foreground">
                Timeline
              </Link>
              <Link to="/partners" className="block px-4 py-2 text-sm font-medium text-slate-600 hover:bg-slate-50 hover:text-foreground">
                Partners
              </Link>
              <Link to="/process" className="block px-4 py-2 text-sm font-medium text-slate-600 hover:bg-slate-50 hover:text-foreground">
                Process
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
        <div className="flex items-center gap-4 shrink-0">
          {/* Lock Icon Link -> Dashboard */}
          <Link to="/dashboard" className="text-muted-foreground hover:text-foreground transition-colors p-2">
            <Lock className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </nav>
  );
}
