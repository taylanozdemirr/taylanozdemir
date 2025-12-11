import { useState } from 'react';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import { projects } from '../../data/portfolio';

export function Projects() {
    const [hoveredId, setHoveredId] = useState<number | null>(null);
    const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

    return (
        <section id="projects" className="section">
            <div className="container">
                {/* Section Title */}
                <div className="section-title">
                    <h2>Projelerim</h2>
                    <p className="mt-6 text-[var(--text-muted)] text-center">Geliştirdiğim kritik sistemler ve uygulamalar</p>
                </div>

                {/* Projects Grid */}
                <div
                    ref={ref}
                    className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    {projects.map((project, index) => (
                        <div
                            key={project.id}
                            className={`
                group relative glass-card overflow-hidden
                animate-on-scroll-scale
                ${isVisible ? 'visible' : ''}
              `}
                            style={{
                                transitionDelay: `${index * 0.15}s`,
                            }}
                            onMouseEnter={() => setHoveredId(project.id)}
                            onMouseLeave={() => setHoveredId(null)}
                        >
                            {/* Gradient Top Border */}
                            <div
                                className="absolute top-0 left-0 right-0 h-1 transition-all duration-500"
                                style={{
                                    background: hoveredId === project.id
                                        ? 'var(--gradient-accent)'
                                        : `linear-gradient(90deg, ${project.color}, transparent)`,
                                    opacity: hoveredId === project.id ? 1 : 0.5
                                }}
                            />

                            {/* Card Content */}
                            <div className="p-8">
                                {/* Icon & Year */}
                                <div className="flex items-center justify-between mb-6">
                                    <span
                                        className="text-4xl transition-transform duration-500 group-hover:scale-110 group-hover:rotate-12"
                                    >
                                        {project.icon}
                                    </span>
                                    <span className="text-xs text-[var(--text-muted)] px-3 py-1 rounded-full bg-[var(--bg-tertiary)]">
                                        {project.year}
                                    </span>
                                </div>

                                {/* Title */}
                                <h3
                                    className="text-xl font-semibold mb-4 transition-colors duration-300"
                                    style={{
                                        color: hoveredId === project.id ? project.color : 'var(--text-primary)'
                                    }}
                                >
                                    {project.title}
                                </h3>

                                {/* Description */}
                                <p className="text-[var(--text-muted)] text-sm leading-relaxed mb-8">
                                    {project.description}
                                </p>

                                {/* Tags */}
                                <div className="flex flex-wrap gap-2 mb-8">
                                    {project.tags.map((tag) => (
                                        <span
                                            key={tag}
                                            className="badge"
                                            style={{
                                                borderColor: hoveredId === project.id ? project.color : 'var(--border-color)'
                                            }}
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                {/* View Details Link */}
                                <div className="flex items-center gap-2 text-sm font-medium group/link cursor-pointer pt-2"
                                    style={{ color: project.color }}
                                >
                                    <span>Detayları Gör</span>
                                    <svg
                                        className="w-4 h-4 transition-transform duration-300 group-hover/link:translate-x-2"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                    </svg>
                                </div>
                            </div>

                            {/* Hover Glow Effect */}
                            <div
                                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                                style={{
                                    background: `radial-gradient(circle at 50% 100%, ${project.color}20, transparent 70%)`
                                }}
                            />
                        </div>
                    ))}
                </div>

                {/* Featured Project - Large Card */}
                <div className="mt-20">
                    <div
                        className={`
              glass-card p-8 md:p-12 overflow-hidden relative
              animate-on-scroll ${isVisible ? 'visible' : ''}
            `}
                        style={{ transitionDelay: '0.6s' }}
                    >
                        <div className="grid md:grid-cols-2 gap-12 items-center">
                            {/* Content */}
                            <div className="space-y-8">
                                <span className="badge" style={{ borderColor: projects[0].color, color: projects[0].color }}>
                                    ⭐ Öne Çıkan Proje
                                </span>
                                <h3 className="text-2xl md:text-3xl font-bold text-[var(--text-primary)]">
                                    {projects[0].title}
                                </h3>
                                <p className="text-[var(--text-secondary)]">
                                    {projects[0].description}
                                </p>
                                <div className="flex flex-wrap gap-3">
                                    {projects[0].tags.map((tag) => (
                                        <span key={tag} className="badge">{tag}</span>
                                    ))}
                                </div>
                                <div className="pt-4">
                                    <button className="btn-primary">
                                        Projeyi İncele
                                    </button>
                                </div>
                            </div>

                            {/* Visual */}
                            <div className="relative">
                                <div
                                    className="aspect-video rounded-xl bg-[var(--bg-tertiary)] flex items-center justify-center text-6xl"
                                    style={{
                                        boxShadow: `0 25px 50px -12px ${projects[0].color}40`
                                    }}
                                >
                                    {projects[0].icon}
                                </div>
                                {/* Decorative Elements */}
                                <div
                                    className="absolute -z-10 -top-4 -right-4 w-full h-full rounded-xl animate-pulse-glow"
                                    style={{
                                        background: `linear-gradient(135deg, ${projects[0].color}40, transparent)`,
                                    }}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
