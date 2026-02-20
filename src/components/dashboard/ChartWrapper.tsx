import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface ChartWrapperProps {
    title: string;
    subtitle?: string;
    actions?: ReactNode;
    children: ReactNode;
    delay?: number;
    className?: string;
}

const ChartWrapper = ({
    title,
    subtitle,
    actions,
    children,
    delay = 0,
    className = "",
}: ChartWrapperProps) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay }}
            className={`glass-card p-6 ${className}`}
        >
            <div className="flex items-center justify-between mb-6">
                <div>
                    <h3 className="text-lg font-semibold text-foreground">{title}</h3>
                    {subtitle && (
                        <p className="text-xs text-muted-foreground mt-0.5">{subtitle}</p>
                    )}
                </div>
                {actions && <div className="flex items-center gap-2">{actions}</div>}
            </div>
            {children}
        </motion.div>
    );
};

export default ChartWrapper;
