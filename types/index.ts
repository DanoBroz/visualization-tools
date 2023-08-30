import { ReactNode } from "react";

export interface ChildrenProps {
    children: ReactNode;
}

export interface WeeklyDeathCount {
    date: string;
    newDailyNsoDeathsByDeathDate: number;
}

export interface CovidDataResponse<Data> {
    data: Data[];
    length: number;
    maxPageLimit: number;
    totalRecords: number;
}

export type CovidWeeklyDeathsResponse = CovidDataResponse<WeeklyDeathCount>;
