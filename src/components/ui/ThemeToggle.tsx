import { useTheme, Theme } from '../../context/ThemeContext';

const themeIcons: Record<Theme, string> = {
    light: '☀️',
    dark: '🌙',
    dim: '🎬'
};

const themeLabels: Record<Theme, string> = {
    light: 'Light',
    dark: 'Cyberpunk',
    dim: 'Cinematic'
};

export function ThemeToggle() {
    const { theme, setTheme } = useTheme();

    const themes: Theme[] = ['light', 'dark', 'dim'];

    return (
        <div className="flex items-center gap-1 p-1 rounded-full ">
            {themes.map((t) => (
                <button
                    key={t}
                    onClick={() => setTheme(t)}
                    className={`
            relative px-3 py-2 rounded-full text-sm font-medium
            transition-all duration-300 ease-out
            ${theme === t
                            ? 'text-[var(--bg-primary)] shadow-lg'
                            : 'text-[var(--text-muted)] hover:text-[var(--text-primary)]'
                        }
          `}
                    style={{
                        background: theme === t ? 'var(--accent-primary)' : 'transparent'
                    }}
                    title={themeLabels[t]}
                >
                    <span className="relative z-10 flex items-center gap-1.5">
                        <span>{themeIcons[t]}</span>
                        <span className="hidden sm:inline">{themeLabels[t]}</span>
                    </span>
                </button>
            ))}
        </div>
    );
}
