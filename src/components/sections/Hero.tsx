import { useEffect, useState } from 'react';
import { useMousePosition } from '../../hooks/useMousePosition';
import { personalInfo } from '../../data/portfolio';

const roles = [
    "Frontend Developer",
    "UI/UX Enthusiast",
    "React Specialist",
    "TypeScript Expert"
];

export function Hero() {
    const { normalizedX, normalizedY } = useMousePosition();
    const [currentRole, setCurrentRole] = useState(0);
    const [displayText, setDisplayText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);

    // Typing effect
    useEffect(() => {
        const role = roles[currentRole];
        const timeout = setTimeout(() => {
            if (!isDeleting) {
                if (displayText.length < role.length) {
                    setDisplayText(role.slice(0, displayText.length + 1));
                } else {
                    setTimeout(() => setIsDeleting(true), 2000);
                }
            } else {
                if (displayText.length > 0) {
                    setDisplayText(displayText.slice(0, -1));
                } else {
                    setIsDeleting(false);
                    setCurrentRole((prev) => (prev + 1) % roles.length);
                }
            }
        }, isDeleting ? 50 : 100);

        return () => clearTimeout(timeout);
    }, [displayText, isDeleting, currentRole]);

    return (
        <section
            id="hero"
            className="relative min-h-screen flex items-center justify-center overflow-hidden scan-line"
        >
            {/* Animated Background Orbs */}
            <div
                className="gradient-orb hero-orb-1"
                style={{
                    transform: `translate(${normalizedX * 50}px, ${normalizedY * 50}px)`
                }}
            />
            <div
                className="gradient-orb hero-orb-2"
                style={{
                    transform: `translate(${-normalizedX * 30}px, ${-normalizedY * 30}px)`
                }}
            />
            <div
                className="gradient-orb hero-orb-3"
                style={{
                    transform: `translate(${normalizedX * 20 - 50}%, ${normalizedY * 20 - 50}%)`
                }}
            />

            {/* Grid Pattern Overlay */}
            <div
                className="absolute inset-0 opacity-[0.03]"
                style={{
                    backgroundImage: `
            linear-gradient(var(--text-primary) 1px, transparent 1px),
            linear-gradient(90deg, var(--text-primary) 1px, transparent 1px)
          `,
                    backgroundSize: '50px 50px'
                }}
            />

            {/* Main Content */}
            <div className="container relative z-10 text-center px-6">
                {/* Status Badge */}
                {/* <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full glass-card animate-slide-up">
                    <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                    <span className="text-sm text-[var(--text-secondary)]">
                        Müsait • {personalInfo.company}
                    </span>
                </div> */}

                {/* Main Heading */}
                <h1 className="mb-6 animate-slide-up delay-100">
                    <span className="block text-[var(--text-secondary)] text-lg md:text-xl mb-4 font-normal">
                        Merhaba, ben
                    </span>
                    <span
                        className="block bg-clip-text text-transparent animate-gradient"
                        style={{
                            backgroundImage: 'var(--gradient-accent)',
                            backgroundSize: '200% 200%'
                        }}
                    >
                        {personalInfo.name || "Taylan Özdemir"}
                    </span>
                </h1>

                {/* Typing Role */}
                <div className="h-12 md:h-16 mb-8 flex items-center justify-center animate-slide-up delay-200">
                    <span className="text-xl md:text-3xl text-[var(--text-primary)] font-light">
                        {displayText}
                        <span className="inline-block w-0.5 h-6 md:h-8 ml-1 bg-[var(--accent-primary)] animate-pulse" />
                    </span>
                </div>

                {/* Description */}
                <p className="max-w-2xl mx-auto mb-16 text-[var(--text-secondary)] text-lg text-center  leading-relaxed animate-slide-up delay-300">
                    {personalInfo.experience} deneyimle, modern web teknolojileri kullanarak
                    <span className="text-[var(--accent-primary)]"> güvenlik odaklı</span> ve
                    <span className="text-[var(--accent-secondary)]"> kullanıcı dostu</span> dijital deneyimler tasarlıyorum.
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-wrap items-center justify-center gap-6 animate-slide-up delay-400">
                    <a href="#projects" className="btn-primary">
                        <span>Projelerimi Gör</span>
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                        </svg>
                    </a>
                    <a href="#contact" className="btn-secondary">
                        <span>İletişime Geç</span>
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                    </a>
                </div>

                {/* Scroll Indicator */}
                {/* <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
                    <div className="w-6 h-10 rounded-full border-2 border-[var(--text-muted)] flex justify-center pt-2">
                        <div className="w-1.5 h-3 rounded-full bg-[var(--accent-primary)] animate-pulse" />
                    </div>
                </div> */}
            </div>

            {/* Floating Tech Icons */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                {['⚛️', '📘', '⚡', '🎨', '📱'].map((icon, i) => (
                    <span
                        key={i}
                        className="absolute text-4xl opacity-20 animate-float"
                        style={{
                            left: `${10 + i * 20}%`,
                            top: `${20 + (i % 3) * 25}%`,
                            animationDelay: `${i * 0.5}s`,
                            animationDuration: `${6 + i}s`
                        }}
                    >
                        {icon}
                    </span>
                ))}
            </div>
        </section>
    );
}
