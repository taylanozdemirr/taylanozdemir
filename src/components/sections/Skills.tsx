import { useState } from 'react';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import { skills } from '../../data/portfolio';

export function Skills() {
    const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);
    const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

    return (
        <section id="skills" className="section bg-[var(--bg-secondary)]">
            <div className="container">
                {/* Section Title */}
                <div className="section-title">
                    <h2>Yeteneklerim</h2>
                    <p className="mt-6 text-[var(--text-muted)] text-center">Uzmanlaştığım teknolojiler ve araçlar</p>
                </div>

                {/* Skills Grid */}
                <div
                    ref={ref}
                    className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6"
                >
                    {skills.map((skill, index) => (
                        <div
                            key={skill.name}
                            className={`
                group glass-card p-6 text-center cursor-pointer
                animate-on-scroll-scale
                ${isVisible ? 'visible' : ''}
              `}
                            style={{ transitionDelay: `${index * 0.1}s` }}
                            onMouseEnter={() => setHoveredSkill(skill.name)}
                            onMouseLeave={() => setHoveredSkill(null)}
                        >
                            {/* Icon */}
                            <div className="text-4xl mb-5 transition-transform duration-500 group-hover:scale-125 group-hover:-rotate-12">
                                {skill.icon}
                            </div>

                            {/* Name */}
                            <h4 className="font-semibold text-[var(--text-primary)] mb-3">
                                {skill.name}
                            </h4>

                            {/* Category Badge */}
                            <span className="text-xs text-[var(--text-muted)] block mb-5">
                                {skill.category}
                            </span>

                            {/* Progress Bar */}
                            <div className="relative h-2 bg-[var(--bg-tertiary)] rounded-full overflow-hidden">
                                <div
                                    className="absolute inset-y-0 left-0 rounded-full transition-all duration-700 ease-out"
                                    style={{
                                        width: hoveredSkill === skill.name || isVisible ? `${skill.level}%` : '0%',
                                        background: 'var(--gradient-accent)',
                                        transitionDelay: `${index * 0.1}s`
                                    }}
                                />
                            </div>

                            {/* Level Text */}
                            <div className="mt-3 text-xs text-[var(--accent-primary)] font-medium">
                                {skill.level}%
                            </div>
                        </div>
                    ))}
                </div>

                {/* Stats Section */}
                {/* <div className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-8">
                    {[
                        { value: '3+', label: 'Yıl Deneyim' },
                        { value: '5+', label: 'Tamamlanan Proje' },
                        { value: '10+', label: 'Teknoloji' },
                        { value: '10K+', label: 'Kullanıcı' },
                    ].map((stat, index) => (
                        <div
                            key={stat.label}
                            className={`
                glass-card p-8 text-center
                animate-on-scroll
                ${isVisible ? 'visible' : ''}
              `}
                            style={{ transitionDelay: `${0.5 + index * 0.1}s` }}
                        >
                            <div
                                className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent mb-4"
                                style={{ backgroundImage: 'var(--gradient-accent)' }}
                            >
                                {stat.value}
                            </div>
                            <div className="text-sm text-[var(--text-muted)]">
                                {stat.label}
                            </div>
                        </div>
                    ))}
                </div> */}
            </div>
        </section>
    );
}
