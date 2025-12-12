import { useEffect, useState, useMemo } from 'react';
import { useMousePosition } from '../../hooks/useMousePosition';
import { personalInfo } from '../../data/portfolio';

const roles = [
    "Frontend Developer",
    "UI/UX Enthusiast",
    "React Specialist",
    "TypeScript Expert"
];

// Floating particles for background
const particles = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    size: Math.random() * 4 + 2,
    x: Math.random() * 100,
    y: Math.random() * 100,
    duration: Math.random() * 20 + 10,
    delay: Math.random() * 5
}));

export function Hero() {
    const { normalizedX, normalizedY } = useMousePosition();
    const [currentRole, setCurrentRole] = useState(0);
    const [displayText, setDisplayText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);
    const [isLoaded, setIsLoaded] = useState(false);

    // Code snippet for the floating card
    const codeSnippet = useMemo(() => [
        { line: 'const', keyword: true, text: ' developer = {' },
        { line: '  name:', keyword: false, text: ' "Taylan",' },
        { line: '  role:', keyword: false, text: ' "Frontend Dev",' },
        { line: '  skills:', keyword: false, text: ' ["React", "TS"],' },
        { line: '  passion:', keyword: false, text: ' "Building UIs"' },
        { line: '};', keyword: true, text: '' }
    ], []);

    useEffect(() => {
        setIsLoaded(true);
    }, []);

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
            className="hero-section relative min-h-screen flex items-center overflow-hidden"
        >
            {/* Animated Gradient Background */}
            <div className="hero-gradient-bg" />

            {/* Floating Particles */}
            <div className="particles-container">
                {particles.map((particle) => (
                    <div
                        key={particle.id}
                        className="particle"
                        style={{
                            width: particle.size,
                            height: particle.size,
                            left: `${particle.x}%`,
                            top: `${particle.y}%`,
                            animationDuration: `${particle.duration}s`,
                            animationDelay: `${particle.delay}s`
                        }}
                    />
                ))}
            </div>

            {/* Animated Orbs */}
            <div
                className="gradient-orb hero-orb-1"
                style={{
                    transform: `translate(${normalizedX * 30}px, ${normalizedY * 30}px)`
                }}
            />
            <div
                className="gradient-orb hero-orb-2"
                style={{
                    transform: `translate(${-normalizedX * 20}px, ${-normalizedY * 20}px)`
                }}
            />

            {/* Grid Pattern */}
            <div className="hero-grid-pattern" />

            {/* Main Content - Split Layout */}
            <div className="container relative z-10">
                <div className="hero-content-grid">
                    {/* Left Side - Text Content */}
                    <div className={`hero-text-content ${isLoaded ? 'loaded' : ''}`}>
                        {/* Status Badge */}
                        <div className="hero-status-badge">
                            <span className="status-dot" />
                            <span className="status-text">Müsait • {personalInfo.company}</span>
                        </div>

                        {/* Main Heading */}
                        <h1 className="hero-title">
                            <span className="title-greeting">Merhaba, ben</span>
                            <span className="title-name">{personalInfo.name || "Taylan Özdemir"}</span>
                        </h1>

                        {/* Typing Role */}
                        <div className="hero-role">
                            <span className="role-prefix">{'<'}</span>
                            <span className="role-text">{displayText}</span>
                            <span className="role-cursor" />
                            <span className="role-suffix">{'/>'}</span>
                        </div>

                        {/* Description */}
                        <p className="hero-description">
                            {personalInfo.experience} deneyimle, modern web teknolojileri kullanarak
                            <span className="highlight-primary"> güvenlik odaklı</span> ve
                            <span className="highlight-secondary"> kullanıcı dostu</span> dijital deneyimler tasarlıyorum.
                        </p>

                        {/* CTA Buttons */}
                        <div className="hero-cta-group">
                            <a href="#projects" className="btn-primary btn-glow">
                                <span>Projelerimi Keşfet</span>
                                <svg className="btn-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                </svg>
                            </a>
                            <a href="#contact" className="btn-secondary btn-outline">
                                <span>İletişime Geç</span>
                                <svg className="btn-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                                </svg>
                            </a>
                        </div>

                        {/* Social Links */}
                        <div className="hero-social-links">
                            <a href="https://github.com/taylanozdemirr" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="GitHub">
                                <svg viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                </svg>
                            </a>
                            <a href="https://www.linkedin.com/in/taylanozdemirr/" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="LinkedIn">
                                <svg viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                </svg>
                            </a>
                        </div>
                    </div>

                    {/* Right Side - Floating Code Card */}
                    <div className={`hero-visual ${isLoaded ? 'loaded' : ''}`}>
                        <div
                            className="floating-code-card"
                            style={{
                                transform: `perspective(1000px) rotateY(${normalizedX * 5}deg) rotateX(${-normalizedY * 5}deg)`
                            }}
                        >
                            {/* Card Header */}
                            <div className="code-card-header">
                                <div className="window-buttons">
                                    <span className="window-btn red" />
                                    <span className="window-btn yellow" />
                                    <span className="window-btn green" />
                                </div>
                                <span className="file-name">developer.tsx</span>
                            </div>

                            {/* Code Content */}
                            <div className="code-card-body">
                                <pre className="code-content">
                                    {codeSnippet.map((line, idx) => (
                                        <div key={idx} className="code-line" style={{ animationDelay: `${idx * 0.1 + 0.5}s` }}>
                                            <span className="line-number">{idx + 1}</span>
                                            <span className={line.keyword ? 'keyword' : 'property'}>{line.line}</span>
                                            <span className="string">{line.text}</span>
                                        </div>
                                    ))}
                                </pre>
                            </div>

                            {/* Floating decorative elements */}
                            {/* <div className="floating-badge react-badge">
                                <span>⚛️</span>
                                <span>React</span>
                            </div>
                            <div className="floating-badge ts-badge">
                                <span>📘</span>
                                <span>TypeScript</span>
                            </div> */}
                        </div>

                        {/* Background decoration circles */}
                        <div className="decoration-circle circle-1" />
                        <div className="decoration-circle circle-2" />
                        <div className="decoration-circle circle-3" />
                    </div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="scroll-indicator">
                <div className="scroll-mouse">
                    <div className="scroll-wheel" />
                </div>
                <span className="scroll-text">Aşağı Kaydır</span>
            </div>
        </section>
    );
}
