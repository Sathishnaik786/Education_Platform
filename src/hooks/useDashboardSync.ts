import { useEffect, useRef } from "react";
import { useSearchParams } from "react-router-dom";
import { useDashboardStore, EducationLevel } from "../store/dashboardStore";

export const useDashboardSync = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const { selectedLevel, setLevel } = useDashboardStore();
    const isHydrated = useRef(false);

    // Hydrate state from URL on mount
    useEffect(() => {
        if (!isHydrated.current) {
            const levelParam = searchParams.get("level")?.toUpperCase() as EducationLevel;
            const validLevels: EducationLevel[] = ["ALL", "PRIMARY", "SECONDARY", "HIGHSCHOOL", "COLLEGE", "UNIVERSITY"];

            if (levelParam && validLevels.includes(levelParam)) {
                setLevel(levelParam);
            }
            isHydrated.current = true;
        }
    }, [searchParams, setLevel]);

    // Sync URL with state changes
    useEffect(() => {
        if (isHydrated.current) {
            const currentParam = searchParams.get("level")?.toUpperCase();
            if (selectedLevel === "ALL") {
                if (currentParam) {
                    searchParams.delete("level");
                    setSearchParams(searchParams, { replace: true });
                }
            } else if (selectedLevel !== currentParam) {
                searchParams.set("level", selectedLevel.toLowerCase());
                setSearchParams(searchParams, { replace: true });
            }
        }
    }, [selectedLevel, searchParams, setSearchParams]);

    return { selectedLevel, setLevel };
};
