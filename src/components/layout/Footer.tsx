export function Footer() {
    const currentYear = new Date().getFullYear();

    const socialLinks = [
        { icon: '🐙', href: 'https://github.com/taylanozdemirr', label: 'GitHub' },
        { icon: '💼', href: 'https://www.linkedin.com/in/taylanozdemirr/', label: 'LinkedIn' }
    ];

    return (
        <footer className="py-12 border-t border-[var(--border-color)]">
            <div className="container">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                    {/* Logo & Copyright */}
                    <div className="flex items-center gap-4">
                        <span
                            className="text-2xl font-bold bg-clip-text text-transparent"
                            style={{ backgroundImage: 'var(--gradient-accent)' }}
                        >
                            TÖ
                        </span>
                        <span className="text-[var(--text-muted)] text-sm">
                            © {currentYear} Taylan Özdemir. Tüm hakları saklıdır.
                        </span>
                    </div>

                    {/* Back to Top */}
                    <a
                        href="#hero"
                        className="flex items-center gap-2 text-[var(--text-muted)] hover:text-[var(--accent-primary)] transition-colors"
                    >
                        <span className="text-sm">Yukarı Çık</span>
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                        </svg>
                    </a>
                </div>
            </div>
        </footer>
    );
}
