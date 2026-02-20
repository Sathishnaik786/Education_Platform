const SkeletonCard = () => (
    <div className="glass-card p-5 space-y-3">
        <div className="flex items-center gap-2">
            <div className="w-10 h-10 skeleton" />
            <div className="skeleton h-3 w-24" />
        </div>
        <div className="skeleton h-8 w-32" />
        <div className="skeleton h-1.5 w-full" />
    </div>
);

const SkeletonChart = ({ height = "h-[300px]" }: { height?: string }) => (
    <div className="glass-card p-6 space-y-4">
        <div className="flex items-center justify-between">
            <div className="space-y-2">
                <div className="skeleton h-4 w-48" />
                <div className="skeleton h-3 w-32" />
            </div>
            <div className="skeleton h-8 w-24" />
        </div>
        <div className={`skeleton ${height} w-full`} />
    </div>
);

const SkeletonDashboard = () => (
    <div className="px-6 pb-8 space-y-6">
        {/* Header skeleton */}
        <div className="flex items-center justify-between py-4">
            <div className="space-y-2">
                <div className="skeleton h-7 w-64" />
                <div className="skeleton h-3 w-40" />
            </div>
            <div className="flex gap-2">
                <div className="skeleton h-9 w-24" />
                <div className="skeleton h-9 w-9" />
            </div>
        </div>

        {/* KPI Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6">
            {Array.from({ length: 6 }).map((_, i) => (
                <SkeletonCard key={i} />
            ))}
        </div>

        {/* Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2">
                <SkeletonChart height="h-[280px]" />
            </div>
            <SkeletonChart height="h-[280px]" />
        </div>

        {/* Bottom row */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <SkeletonChart height="h-[200px]" />
            <SkeletonChart height="h-[200px]" />
        </div>
    </div>
);

export default SkeletonDashboard;
