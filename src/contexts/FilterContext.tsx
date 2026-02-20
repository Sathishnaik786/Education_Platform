import React, { createContext, useContext, useState, type ReactNode } from "react";

interface FilterState {
    year: string;
    region: string;
    programType: string;
    budgetCategory: string;
}

interface FilterContextType {
    filters: FilterState;
    setFilter: (key: keyof FilterState, value: string) => void;
    resetFilters: () => void;
}

const defaultFilters: FilterState = {
    year: "2026-27",
    region: "All Regions",
    programType: "All Programs",
    budgetCategory: "All Categories",
};

const FilterContext = createContext<FilterContextType | undefined>(undefined);

export const FilterProvider = ({ children }: { children: ReactNode }) => {
    const [filters, setFilters] = useState<FilterState>(defaultFilters);

    const setFilter = (key: keyof FilterState, value: string) => {
        setFilters((prev) => ({ ...prev, [key]: value }));
    };

    const resetFilters = () => setFilters(defaultFilters);

    return (
        <FilterContext.Provider value={{ filters, setFilter, resetFilters }}>
            {children}
        </FilterContext.Provider>
    );
};

export const useFilters = () => {
    const context = useContext(FilterContext);
    if (!context) throw new Error("useFilters must be used within a FilterProvider");
    return context;
};

export { FilterContext };
