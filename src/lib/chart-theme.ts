/**
 * Chart Theme Utility
 * Reads computed CSS variables at render-time so Recharts colors
 * auto-adapt to Dark / Light / High Contrast themes.
 */

const readVar = (name: string): string => {
    if (typeof window === "undefined") return "hsl(0 0% 50%)";
    const raw = getComputedStyle(document.documentElement).getPropertyValue(name).trim();
    return raw ? `hsl(${raw})` : "hsl(0 0% 50%)";
};

/** Single variable read */
export const getChartColor = readVar;

/**
 * Returns the full chart theme object.
 * Call inside component render so it picks up the current theme.
 */
export const getChartTheme = () => ({
    // Layout colors
    grid: readVar("--chart-grid"),
    axis: readVar("--chart-axis"),
    tooltipBg: readVar("--chart-tooltip-bg"),
    tooltipBorder: readVar("--chart-tooltip-border"),
    tooltipText: readVar("--chart-tooltip-text"),

    // Semantic accent colors
    primary: readVar("--primary"),
    accent: readVar("--accent"),
    destructive: readVar("--destructive"),

    // Named palette (for backward compat)
    indigo: readVar("--indigo"),
    emerald: readVar("--emerald"),
    amber: readVar("--amber"),

    // Text
    foreground: readVar("--foreground"),
    muted: readVar("--muted-foreground"),
    textPrimary: readVar("--text-primary"),
    textSecondary: readVar("--text-secondary"),

    // Surfaces
    background: readVar("--background"),
    surface: readVar("--surface"),
    elevated: readVar("--elevated"),
});

/** Standard tooltip style object for Recharts */
export const getTooltipStyle = () => {
    const t = getChartTheme();
    return {
        background: t.tooltipBg,
        border: `1px solid ${t.tooltipBorder}`,
        borderRadius: "12px",
        fontSize: 12,
        color: t.tooltipText,
    } as const;
};
