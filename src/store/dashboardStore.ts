import { create } from "zustand";

export type EducationLevel =
    | "ALL"
    | "PRIMARY"
    | "SECONDARY"
    | "HIGHSCHOOL"
    | "COLLEGE"
    | "UNIVERSITY";

interface DashboardFilterState {
    selectedLevel: EducationLevel;
    setLevel: (level: EducationLevel) => void;
    // Prepared for future nested filters
    filters: {
        stateId?: string;
        districtId?: string;
    };
    setNestedFilter: (key: 'stateId' | 'districtId', value?: string) => void;
}

export const useDashboardStore = create<DashboardFilterState>((set) => ({
    selectedLevel: "ALL",
    setLevel: (level) => set({ selectedLevel: level }),
    filters: {},
    setNestedFilter: (key, value) =>
        set((state) => ({
            filters: { ...state.filters, [key]: value }
        })),
}));
