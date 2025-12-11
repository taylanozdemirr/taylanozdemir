import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import { personalInfo } from '../../data/portfolio';

const highlights = [
    { icon: '🏛️', label: 'Kurum', value: personalInfo.company },
    { icon: '📅', label: 'Deneyim', value: personalInfo.experience },
    { icon: '🎯', label: 'Yaş', value: `${personalInfo.age} Yaşında` },
    { icon: '📍', label: 'Lokasyon', value: personalInfo.location },
];

const timeline = [
    { year: '2021', title: 'Kariyer Başlangıcı', desc: 'İçişleri Bakanlığı\'nda Frontend Developer olarak göreve başladım.' },
    { year: '2022', title: 'İlk Büyük Proje', desc: 'Yüz Tanıma Sistemi projesinde lider geliştirici olarak rol aldım.' },
    { year: '2023', title: 'Güvenlik Sistemleri', desc: 'Yetki kontrol ve loglama sistemlerini tasarladım.' },
    { year: '2024', title: 'Tam Stack Geliştirme', desc: 'React Native ile mobil uygulamalar geliştirmeye başladım.' },
];

export function About() {
    const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 });

    return (
        <section id="about" className="section bg-[var(--bg-secondary)]">
            <div className="container">
                {/* Section Title */}
                <div className="section-title">
                    <h2>Hakkımda</h2>
                    <p className="mt-6 text-[var(--text-muted)] text-center">Kim olduğumu ve neler yaptığımı keşfedin</p>
                </div>

                <div
                    ref={ref}
                    className={`grid lg:grid-cols-2 gap-16 items-center ${isVisible ? 'visible' : ''}`}
                >
                    {/* Left Side - Visual */}
                    <div className={`relative animate-on-scroll-left ${isVisible ? 'visible' : ''}`}>
                        {/* Avatar Container */}
                        <div className="relative mx-auto w-64 h-64 md:w-80 md:h-80">
                            {/* Rotating Border */}
                            <div
                                className="absolute inset-0 rounded-full animate-rotate-slow"
                                style={{
                                    background: 'var(--gradient-accent)',
                                    padding: '4px',
                                }}
                            >
                                <div className="w-full h-full rounded-full bg-[var(--bg-secondary)]" />
                            </div>

                            {/* Avatar Placeholder with Initials */}
                            <div className="absolute inset-4 rounded-full bg-[var(--bg-tertiary)] flex items-center justify-center overflow-hidden">
                                <span
                                    className="text-6xl md:text-7xl font-bold bg-clip-text text-transparent"
                                    style={{ backgroundImage: 'var(--gradient-accent)' }}
                                >
                                    TÖ
                                </span>
                            </div>

                            {/* Floating Badges */}
                            <div className="absolute -top-4 -right-4 px-4 py-2 glass-card text-sm animate-float">
                                ⚛️ React
                            </div>
                            <div className="absolute -bottom-4 -left-4 px-4 py-2 glass-card text-sm animate-float delay-200">
                                📘 TypeScript
                            </div>
                        </div>
                    </div>

                    {/* Right Side - Content */}
                    <div className={`space-y-8 animate-on-scroll-right ${isVisible ? 'visible' : ''}`}>
                        {/* Bio */}
                        <div className="space-y-4">
                            <h3 className="text-[var(--accent-primary)]">Dijital Deneyimler Tasarlıyorum</h3>
                            <p className="text-[var(--text-secondary)] leading-relaxed">
                                {personalInfo.bio}
                            </p>
                        </div>

                        {/* Highlight Cards */}
                        <div className="grid grid-cols-2 gap-5">
                            {highlights.map((item, index) => (
                                <div
                                    key={item.label}
                                    className="glass-card p-5 group"
                                    style={{ transitionDelay: `${index * 0.1}s` }}
                                >
                                    <div className="flex items-center gap-3">
                                        <span className="text-2xl group-hover:scale-110 transition-transform">{item.icon}</span>
                                        <div>
                                            <div className="text-xs text-[var(--text-muted)]">{item.label}</div>
                                            <div className="text-sm font-medium text-[var(--text-primary)]">{item.value}</div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* CTA */}
                        <div className="flex gap-5 pt-6">
                            <a href="#contact" className="btn-primary">
                                İletişime Geç
                            </a>
                            <a
                                href="/cv.pdf"
                                target="_blank"
                                className="btn-secondary"
                            >
                                CV İndir
                            </a>
                        </div>
                    </div>
                </div>

                {/* Timeline */}
                <div className="mt-32">
                    <h3 className="text-center mb-16 text-[var(--text-primary)]">Kariyer Yolculuğum</h3>
                    <div className="relative">
                        {/* Timeline Line */}
                        <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-[var(--border-color)] -translate-x-1/2 hidden md:block" />

                        <div className="space-y-8 md:space-y-0">
                            {timeline.map((item, index) => (
                                <div
                                    key={item.year}
                                    className={`
                    relative md:grid md:grid-cols-2 md:gap-8
                    ${index % 2 === 0 ? '' : 'md:direction-rtl'}
                  `}
                                >
                                    {/* Content */}
                                    <div className={`
                    glass-card p-8 mb-10 md:mb-20
                    ${index % 2 === 0 ? 'md:text-right md:pr-14' : 'md:col-start-2 md:text-left md:pl-14'}
                  `}>
                                        <span className="text-[var(--accent-primary)] font-bold text-lg">{item.year}</span>
                                        <h4 className="text-[var(--text-primary)] font-semibold mt-3">{item.title}</h4>
                                        <p className="text-[var(--text-muted)] text-sm mt-3">{item.desc}</p>
                                    </div>

                                    {/* Dot */}
                                    <div className="absolute left-1/2 top-6 w-4 h-4 rounded-full bg-[var(--accent-primary)] -translate-x-1/2 hidden md:block animate-pulse-glow" />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
