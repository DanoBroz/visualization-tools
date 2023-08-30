import { ReactNode } from "react";

export interface ChildrenProps {
    children: ReactNode;
}

type GenericValues<K extends string, V> = {
    [key in K]: V;
};

export interface WeeklyDeathCount
    extends GenericValues<"newDailyNsoDeathsByDeathDate", number> {
    date: string;
}

export interface WeeklyAdmittedCount
    extends GenericValues<"hospitalCasesWeekly", number> {
    date: string;
}

export interface CovidDataResponse<Data> {
    data: Data[];
    length: number;
    maxPageLimit: number;
    totalRecords: number;
}

export type CovidWeeklyDeathsResponse = CovidDataResponse<WeeklyDeathCount>;
export type PatientWeeklyResponse = CovidDataResponse<WeeklyAdmittedCount>;
