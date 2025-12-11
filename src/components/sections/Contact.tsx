import { useState } from 'react';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

export function Contact() {
    const [formState, setFormState] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        // Simulate submission
        setTimeout(() => {
            setIsSubmitting(false);
            setFormState({ name: '', email: '', message: '' });
            alert('Mesajınız gönderildi!');
        }, 1500);
    };

    const contactInfo = [
        { icon: '📧', label: 'E-posta', value: 'taylan19.97@gmail.com', href: 'mailto:taylan19.97@gmail.com' },
        { icon: '💼', label: 'LinkedIn', value: '/taylanozdemirr', href: 'https://www.linkedin.com/in/taylanozdemirr/' },
        { icon: '🐙', label: 'GitHub', value: '/taylanozdemirr', href: 'https://github.com/taylanozdemirr' },
    ];

    return (
        <section id="contact" className="section">
            <div className="container">
                {/* Section Title */}
                <div className="section-title">
                    <h2>İletişim</h2>
                    <p className="mt-6 text-[var(--text-muted)] text-center">Birlikte çalışmak için iletişime geçin</p>
                </div>

                <div
                    ref={ref}
                    className="grid lg:grid-cols-2 gap-16 max-w-5xl mx-auto"
                >
                    {/* Contact Info */}
                    <div className={`space-y-8 animate-on-scroll-left ${isVisible ? 'visible' : ''}`}>
                        <div className="space-y-4">
                            <h3 className="text-[var(--text-primary)] text-2xl font-semibold">
                                Bir proje mi düşünüyorsunuz?
                            </h3>
                            <p className="text-[var(--text-secondary)] leading-relaxed">
                                Yeni projeler, yaratıcı fikirler veya iş birliği için her zaman iletişime açığım.
                            </p>
                        </div>

                        {/* Contact Methods */}
                        <div className="space-y-5">
                            {contactInfo.map((item, index) => (
                                <a
                                    key={item.label}
                                    href={item.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-4 glass-card p-4 group"
                                    style={{ transitionDelay: `${index * 0.1}s` }}
                                >
                                    <span className="text-2xl group-hover:scale-110 transition-transform">
                                        {item.icon}
                                    </span>
                                    <div>
                                        <div className="text-xs text-[var(--text-muted)]">{item.label}</div>
                                        <div className="text-[var(--text-primary)] font-medium group-hover:text-[var(--accent-primary)] transition-colors">
                                            {item.value}
                                        </div>
                                    </div>
                                    <svg
                                        className="w-5 h-5 ml-auto text-[var(--text-muted)] group-hover:text-[var(--accent-primary)] group-hover:translate-x-1 transition-all"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                    </svg>
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Contact Form */}
                    <form
                        onSubmit={handleSubmit}
                        className={`glass-card p-10 space-y-8 animate-on-scroll-right ${isVisible ? 'visible' : ''}`}
                    >
                        {/* Name Input */}
                        <div className="space-y-2">
                            <label className="text-sm text-[var(--text-secondary)]">İsim</label>
                            <input
                                type="text"
                                value={formState.name}
                                onChange={(e) => setFormState(prev => ({ ...prev, name: e.target.value }))}
                                placeholder="Adınız Soyadınız"
                                required
                                className="w-full px-4 py-3 bg-[var(--bg-tertiary)] border border-[var(--border-color)] rounded-xl 
                  text-[var(--text-primary)] placeholder-[var(--text-muted)]
                  focus:outline-none focus:border-[var(--accent-primary)] focus:ring-2 focus:ring-[var(--accent-primary)]/20
                  transition-all duration-300"
                            />
                        </div>

                        {/* Email Input */}
                        <div className="space-y-2">
                            <label className="text-sm text-[var(--text-secondary)]">E-posta</label>
                            <input
                                type="email"
                                value={formState.email}
                                onChange={(e) => setFormState(prev => ({ ...prev, email: e.target.value }))}
                                placeholder="ornek@email.com"
                                required
                                className="w-full px-4 py-3 bg-[var(--bg-tertiary)] border border-[var(--border-color)] rounded-xl 
                  text-[var(--text-primary)] placeholder-[var(--text-muted)]
                  focus:outline-none focus:border-[var(--accent-primary)] focus:ring-2 focus:ring-[var(--accent-primary)]/20
                  transition-all duration-300"
                            />
                        </div>

                        {/* Message Input */}
                        <div className="space-y-2">
                            <label className="text-sm text-[var(--text-secondary)]">Mesaj</label>
                            <textarea
                                value={formState.message}
                                onChange={(e) => setFormState(prev => ({ ...prev, message: e.target.value }))}
                                placeholder="Mesajınızı yazın..."
                                rows={5}
                                required
                                className="w-full px-4 py-3 bg-[var(--bg-tertiary)] border border-[var(--border-color)] rounded-xl 
                  text-[var(--text-primary)] placeholder-[var(--text-muted)]
                  focus:outline-none focus:border-[var(--accent-primary)] focus:ring-2 focus:ring-[var(--accent-primary)]/20
                  transition-all duration-300 resize-none"
                            />
                        </div>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="w-full btn-primary justify-center disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            {isSubmitting ? (
                                <span className="flex items-center gap-2">
                                    <svg className="w-5 h-5 animate-spin" fill="none" viewBox="0 0 24 24">
                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                                    </svg>
                                    Gönderiliyor...
                                </span>
                            ) : (
                                <span className="flex items-center gap-2">
                                    Gönder
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                    </svg>
                                </span>
                            )}
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
}
