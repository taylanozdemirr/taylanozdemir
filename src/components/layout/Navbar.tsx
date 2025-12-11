import { useState, useEffect } from 'react';
import { ThemeToggle } from '../ui/ThemeToggle';

const navLinks = [
    { href: '#hero', label: 'Ana Sayfa' },
    { href: '#about', label: 'Hakkımda' },
    { href: '#projects', label: 'Projeler' },
    { href: '#skills', label: 'Yetenekler' },
    { href: '#contact', label: 'İletişim' },
];

export function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav
            className={`
        fixed top-0 left-0 right-0 z-50
        transition-all duration-500 ease-out
        ${isScrolled
                    ? 'py-3 glass-card !rounded-none border-t-0 border-x-0'
                    : 'py-6 bg-transparent'
                }
      `}
        >
            <div className="container mx-auto px-6 flex items-center justify-between">
                {/* Logo */}
                <a
                    href="#hero"
                    className="relative group"
                >
                    <span className="text-2xl font-bold bg-clip-text text-transparent animate-gradient"
                        style={{ backgroundImage: 'var(--gradient-accent)', backgroundSize: '200% 200%' }}>
                        Taylan Özdemir
                    </span>
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[var(--accent-primary)] transition-all duration-300 group-hover:w-full" />
                </a>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link, index) => (
                        <a
                            key={link.href}
                            href={link.href}
                            className="relative text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors duration-300 group"
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            <span>{link.label}</span>
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[var(--accent-primary)] transition-all duration-300 group-hover:w-full" />
                        </a>
                    ))}
                </div>

                {/* Right Side: Theme Toggle + Mobile Menu */}
                <div className="flex items-center gap-4">
                    <ThemeToggle />

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="md:hidden relative w-10 h-10 flex flex-col items-center justify-center gap-1.5"
                    >
                        <span className={`w-6 h-0.5 bg-[var(--text-primary)] transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
                        <span className={`w-6 h-0.5 bg-[var(--text-primary)] transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''}`} />
                        <span className={`w-6 h-0.5 bg-[var(--text-primary)] transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <div className={`
        md:hidden absolute top-full left-0 right-0
        glass-card !rounded-t-none border-t-0
        transition-all duration-500 ease-out
        ${isMobileMenuOpen
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 -translate-y-4 pointer-events-none'
                }
      `}>
                <div className="container mx-auto px-6 py-6 flex flex-col gap-4">
                    {navLinks.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors duration-300 py-2"
                        >
                            {link.label}
                        </a>
                    ))}
                </div>
            </div>
        </nav>
    );
}
