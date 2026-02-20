import { EducationLevel } from "../store/dashboardStore";

export interface KPISet {
    enrollment: { value: number; unit: string; change: number };
    completionRate: { value: number; change: number };
    qualityIndex: { value: number; change: number };
    budgetUtilization: { value: number; change: number };
    employment?: { value: number; change: number };
    research?: { value: number; unit: string; change: number };
    dropoutRate: { value: number; change: number };
}

export type DashboardData = Record<EducationLevel, KPISet>;

export const dashboardData: DashboardData = {
    ALL: {
        enrollment: { value: 265, unit: "M", change: 2.1 },
        completionRate: { value: 84.5, change: 1.5 },
        qualityIndex: { value: 78, change: 3.2 },
        budgetUtilization: { value: 87, change: -2.1 },
        dropoutRate: { value: 12.4, change: -8.5 },
    },
    PRIMARY: {
        enrollment: { value: 124, unit: "M", change: 1.2 },
        completionRate: { value: 92, change: 0.8 },
        qualityIndex: { value: 88, change: 4.1 },
        budgetUtilization: { value: 94, change: 3.2 },
        dropoutRate: { value: 4.2, change: -12.4 },
    },
    SECONDARY: {
        enrollment: { value: 84, unit: "M", change: 0.9 },
        completionRate: { value: 88, change: 1.1 },
        qualityIndex: { value: 74, change: 2.5 },
        budgetUtilization: { value: 82, change: -1.5 },
        dropoutRate: { value: 8.5, change: -10.2 },
    },
    HIGHSCHOOL: {
        enrollment: { value: 42, unit: "M", change: 1.5 },
        completionRate: { value: 76, change: 1.8 },
        qualityIndex: { value: 82, change: 3.7 },
        budgetUtilization: { value: 88, change: 2.1 },
        dropoutRate: { value: 12.4, change: -8.5 },
    },
    COLLEGE: {
        enrollment: { value: 12.4, unit: "M", change: 4.2 },
        completionRate: { value: 72, change: 2.1 },
        qualityIndex: { value: 68, change: 5.4 },
        budgetUtilization: { value: 78, change: 4.3 },
        employment: { value: 68, change: 4.3 },
        dropoutRate: { value: 5.8, change: -5.1 },
    },
    UNIVERSITY: {
        enrollment: { value: 3.2, unit: "M", change: 5.1 },
        completionRate: { value: 64, change: 3.2 },
        qualityIndex: { value: 85, change: 6.2 },
        budgetUtilization: { value: 65, change: 8.4 },
        employment: { value: 82, change: 7.1 },
        research: { value: 840, unit: "Pub", change: 12.5 },
        dropoutRate: { value: 2.1, change: -14.2 },
    },
};
