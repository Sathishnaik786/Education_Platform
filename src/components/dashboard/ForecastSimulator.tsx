import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { Sliders } from "lucide-react";
import { getChartTheme } from "@/lib/chart-theme";

const baseData = [
    { year: "2026", enrollment: 372, scholarships: 2.8, budget: 19500 },
    { year: "2027", enrollment: 395, scholarships: 3.2, budget: 21200 },
    { year: "2028", enrollment: 418, scholarships: 3.6, budget: 23100 },
    { year: "2029", enrollment: 440, scholarships: 4.0, budget: 25500 },
    { year: "2030", enrollment: 465, scholarships: 4.5, budget: 28000 },
    { year: "2031", enrollment: 490, scholarships: 5.0, budget: 30500 },
];

const ForecastSimulator = () => {
    const [growthRate, setGrowthRate] = useState(6.5);
    const [budgetIncrease, setBudgetIncrease] = useState(10);
    const theme = getChartTheme();

    const simulatedData = useMemo(() => {
        const multiplier = growthRate / 6.5;
        const budgetMult = budgetIncrease / 10;
        return baseData.map((d, i) => ({
            ...d,
            enrollment: Math.round(d.enrollment * (1 + (multiplier - 1) * (i * 0.2))),
            budget: Math.round(d.budget * (1 + (budgetMult - 1) * (i * 0.15))),
            scholarships: +(d.scholarships * (1 + (multiplier - 1) * (i * 0.15))).toFixed(1),
        }));
    }, [growthRate, budgetIncrease]);

    const projectedEnrollment = simulatedData[simulatedData.length - 1].enrollment;
    const projectedBudget = simulatedData[simulatedData.length - 1].budget;

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="glass-card p-6"
        >
            <div className="flex items-center justify-between mb-6">
                <div>
                    <h3 className="text-lg font-semibold text-text-primary">Forecast Simulator</h3>
                    <p className="text-xs text-text-secondary mt-0.5">
                        Adjust parameters to predict future metrics
                    </p>
                </div>
                <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-primary/10 border border-primary/20">
                    <Sliders className="w-3.5 h-3.5 text-primary" />
                    <span className="text-xs font-medium text-primary">Interactive</span>
                </div>
            </div>

            {/* Sliders */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="space-y-2">
                    <div className="flex items-center justify-between">
                        <label className="text-xs font-medium text-text-secondary">
                            Enrollment Growth Rate
                        </label>
                        <span className="text-sm font-bold text-gradient-primary font-tabular">
                            {growthRate.toFixed(1)}%
                        </span>
                    </div>
                    <input
                        type="range"
                        min="2"
                        max="15"
                        step="0.5"
                        value={growthRate}
                        onChange={(e) => setGrowthRate(+e.target.value)}
                        className="w-full h-1.5 rounded-full bg-elevated appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-primary [&::-webkit-slider-thumb]:shadow-lg [&::-webkit-slider-thumb]:cursor-pointer"
                    />
                    <div className="flex justify-between text-[10px] text-text-secondary">
                        <span>Conservative (2%)</span>
                        <span>Aggressive (15%)</span>
                    </div>
                </div>

                <div className="space-y-2">
                    <div className="flex items-center justify-between">
                        <label className="text-xs font-medium text-text-secondary">
                            Budget Increase Rate
                        </label>
                        <span className="text-sm font-bold text-gradient-accent font-tabular">
                            {budgetIncrease.toFixed(0)}%
                        </span>
                    </div>
                    <input
                        type="range"
                        min="0"
                        max="25"
                        step="1"
                        value={budgetIncrease}
                        onChange={(e) => setBudgetIncrease(+e.target.value)}
                        className="w-full h-1.5 rounded-full bg-elevated appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-accent [&::-webkit-slider-thumb]:shadow-lg [&::-webkit-slider-thumb]:cursor-pointer"
                    />
                    <div className="flex justify-between text-[10px] text-text-secondary">
                        <span>Flat (0%)</span>
                        <span>High (25%)</span>
                    </div>
                </div>
            </div>

            {/* Chart */}
            <ResponsiveContainer width="100%" height={220}>
                <AreaChart data={simulatedData}>
                    <defs>
                        <linearGradient id="grad-sim-enrollment" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0%" stopColor={theme.primary} stopOpacity={0.3} />
                            <stop offset="100%" stopColor={theme.primary} stopOpacity={0} />
                        </linearGradient>
                        <linearGradient id="grad-sim-scholarships" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0%" stopColor={theme.accent} stopOpacity={0.3} />
                            <stop offset="100%" stopColor={theme.accent} stopOpacity={0} />
                        </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" stroke={theme.grid} />
                    <XAxis dataKey="year" tick={{ fill: theme.axis, fontSize: 11 }} axisLine={false} tickLine={false} />
                    <YAxis tick={{ fill: theme.axis, fontSize: 11 }} axisLine={false} tickLine={false} />
                    <Tooltip
                        contentStyle={{
                            background: theme.tooltipBg,
                            border: `1px solid ${theme.tooltipBorder}`,
                            borderRadius: "12px",
                            fontSize: 12,
                            color: theme.tooltipText,
                        }}
                    />
                    <Area
                        type="monotone"
                        dataKey="enrollment"
                        stroke={theme.primary}
                        strokeWidth={2.5}
                        fill="url(#grad-sim-enrollment)"
                        name="Enrollment (M)"
                        animationDuration={800}
                    />
                    <Area
                        type="monotone"
                        dataKey="scholarships"
                        stroke={theme.accent}
                        strokeWidth={2}
                        fill="url(#grad-sim-scholarships)"
                        name="Scholarships (M)"
                        animationDuration={800}
                    />
                </AreaChart>
            </ResponsiveContainer>

            {/* Summary */}
            <div className="grid grid-cols-3 gap-4 mt-4">
                <div className="text-center p-3 rounded-xl bg-elevated/50">
                    <p className="text-lg font-bold text-gradient-primary font-tabular">{projectedEnrollment}M</p>
                    <p className="text-[10px] text-text-secondary mt-0.5">Enrollment 2029</p>
                </div>
                <div className="text-center p-3 rounded-xl bg-elevated/50">
                    <p className="text-lg font-bold text-gradient-accent font-tabular">
                        {simulatedData[simulatedData.length - 1].scholarships}M
                    </p>
                    <p className="text-[10px] text-text-secondary mt-0.5">Scholarships 2029</p>
                </div>
                <div className="text-center p-3 rounded-xl bg-elevated/50">
                    <p className="text-lg font-bold text-amber font-tabular">
                        ₹{(projectedBudget / 100).toFixed(0)}K Cr
                    </p>
                    <p className="text-[10px] text-text-secondary mt-0.5">Budget 2029</p>
                </div>
            </div>
        </motion.div>
    );
};

export default ForecastSimulator;
