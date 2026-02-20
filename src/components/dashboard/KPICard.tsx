import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import { TrendingUp, TrendingDown } from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface KPICardProps {
  title: string;
  value: number;
  suffix?: string;
  prefix?: string;
  change: number;
  icon: LucideIcon;
  gradient: "indigo" | "emerald" | "amber";
  progress: number;
  delay?: number;
  sparkData?: number[];
}

const useAnimatedCounter = (end: number, duration: number = 2000, delay: number = 0) => {
  const [count, setCount] = useState(0);
  const ref = useRef<number | null>(null);

  useEffect(() => {
    const timeout = setTimeout(() => {
      const startTime = Date.now();
      const animate = () => {
        const elapsed = Date.now() - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        setCount(Math.floor(eased * end));
        if (progress < 1) {
          ref.current = requestAnimationFrame(animate);
        }
      };
      ref.current = requestAnimationFrame(animate);
    }, delay);
    return () => {
      clearTimeout(timeout);
      if (ref.current) cancelAnimationFrame(ref.current);
    };
  }, [end, duration, delay]);

  return count;
};

const MiniSparkline = ({ data, color }: { data: number[]; color: string }) => {
  const max = Math.max(...data);
  const min = Math.min(...data);
  const range = max - min || 1;
  const w = 80;
  const h = 28;
  const points = data
    .map((v, i) => `${(i / (data.length - 1)) * w},${h - ((v - min) / range) * h}`)
    .join(" ");

  return (
    <svg width={w} height={h} className="opacity-60">
      <polyline
        points={points}
        fill="none"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

const gradientMap = {
  indigo: { bar: "gradient-primary", text: "text-gradient-primary", color: "hsl(var(--primary))" },
  emerald: { bar: "gradient-accent", text: "text-gradient-accent", color: "hsl(var(--accent))" },
  amber: { bar: "gradient-amber", text: "text-amber", color: "hsl(var(--amber))" },
};

const KPICard = ({
  title,
  value,
  suffix = "",
  prefix = "",
  change,
  icon: Icon,
  gradient,
  progress,
  delay = 0,
  sparkData = [30, 45, 35, 50, 40, 60, 55, 70, 65, 80],
}: KPICardProps) => {
  const animatedValue = useAnimatedCounter(value, 2000, delay);
  const g = gradientMap[gradient];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: delay / 1000 }}
      className="glass-card-hover p-6 flex flex-col gap-3 min-w-0"
    >
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-2">
          <div className={`p-2 rounded-xl ${g.bar}`}>
            <Icon className="w-4 h-4 text-primary-foreground" />
          </div>
          <span className="text-xs font-medium text-text-secondary uppercase tracking-wider">
            {title}
          </span>
        </div>
        <MiniSparkline data={sparkData} color={g.color} />
      </div>

      <div className="flex items-end justify-between">
        <div>
          <span className={`text-3xl font-bold ${g.text} font-tabular`}>
            {prefix}
            {animatedValue.toLocaleString()}
            {suffix}
          </span>
          <div className="flex items-center gap-1 mt-1">
            {change >= 0 ? (
              <TrendingUp className="w-3 h-3 text-accent" />
            ) : (
              <TrendingDown className="w-3 h-3 text-destructive" />
            )}
            <span
              className={`text-xs font-medium font-tabular ${change >= 0 ? "text-accent" : "text-destructive"
                }`}
            >
              {change >= 0 ? "+" : ""}
              {change}% YoY
            </span>
          </div>
        </div>
      </div>

      {/* Progress bar */}
      <div className="h-1.5 rounded-full bg-elevated overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 1.5, delay: delay / 1000 + 0.3, ease: "easeOut" }}
          className={`h-full rounded-full ${g.bar}`}
        />
      </div>
    </motion.div>
  );
};

export default KPICard;
