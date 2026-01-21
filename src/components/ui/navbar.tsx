import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";

export function Navbar() {
  const location = useLocation();
  // const navigate = useNavigate(); // Unused if we only use Links

  const isActive = (path: string) => location.pathname === path;

  const linkClass = (path: string) =>
    `text-sm font-medium transition-colors ${isActive(path) ? 'text-foreground font-bold' : 'text-muted-foreground hover:text-foreground'}`;

  return (
    <nav className="fixed top-0 left-0 right-0 z-[999] border-b border-border bg-background/50 backdrop-blur-xl">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-violet-600 to-indigo-600 rounded-lg flex items-center justify-center shadow-lg shadow-violet-500/50">
              <span className="text-white font-bold text-lg">S</span>
            </div>
            <span className="font-bold text-xl text-foreground uppercase tracking-wider">Softman</span>
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">

            <Link to="/process" className={linkClass('/process')}>
              Home
            </Link>
            <Link to="/partners" className={linkClass('/partners')}>
              Partners
            </Link>
            <Link to="/timeline" className={linkClass('/timeline')}>
              Timeline
            </Link>
            <Link to="/products" className={linkClass('/products')}>
              Products
            </Link>
            <Link to="/contact" className={linkClass('/contact')}>
              Contact
            </Link>
          </div>

          {/* CTA Buttons */}
          <div className="flex items-center space-x-4">
            <Link to="/dashboard">
              <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground hover:bg-accent text-xs font-bold uppercase tracking-widest">
                Admin Panel
              </Button>
            </Link>

          </div>
        </div>
      </div>
    </nav>
  );
}
