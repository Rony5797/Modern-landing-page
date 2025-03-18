import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out",
        isScrolled
          ? "bg-white/80 backdrop-blur-md shadow-sm py-3"
          : "bg-transparent py-5"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <a href="/" className="flex items-center">
              <span className="text-primary font-bold text-xl tracking-tight">
                EXO-<span className="text-primary/80">GUARDIANS</span>
              </span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a
              href="#features"
              className="text-sm font-medium text-gray-700 hover:text-primary transition-colors"
            >
              Features
            </a>
            <a
              href="#impact"
              className="text-sm font-medium text-gray-700 hover:text-primary transition-colors"
            >
              Impact
            </a>
            <a
              href="#why-us"
              className="text-sm font-medium text-gray-700 hover:text-primary transition-colors"
            >
              Why Us
            </a>
            <a
              href="#contact"
              className="text-sm font-medium text-gray-700 hover:text-primary transition-colors"
            >
              Contact
            </a>

            <Button
              onClick={() => navigate("/sign-in")}
              size="sm"
              className="ml-4"
            >
              Get Started
            </Button>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-700 focus:outline-none"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={cn(
          "md:hidden fixed inset-0 bg-white z-40 transform transition-transform duration-300 ease-in-out pt-20",
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <nav className="flex flex-col items-center space-y-6 p-8">
          <a
            href="#features"
            className="text-base font-medium text-gray-700 hover:text-primary"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Features
          </a>
          <a
            href="#impact"
            className="text-base font-medium text-gray-700 hover:text-primary"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Impact
          </a>
          <a
            href="#why-us"
            className="text-base font-medium text-gray-700 hover:text-primary"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Why Us
          </a>
          <a
            href="#contact"
            className="text-base font-medium text-gray-700 hover:text-primary"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Contact
          </a>
          <Button className="mt-6 w-full">Get Started</Button>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
