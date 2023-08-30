import { limitArray } from "@/helpers";
import {
    CovidWeeklyDeathsResponse,
    PatientWeeklyResponse,
    WeeklyDeathCount,
} from "@/types";
import { Chart } from "@antv/g2";
import { UseQueryResult } from "@tanstack/react-query";
import { useCallback, useEffect, useRef } from "react";

interface ChartProps {
    chartQuery: UseQueryResult<
        CovidWeeklyDeathsResponse | PatientWeeklyResponse,
        unknown
    >;
    type: "line" | "interval";
    chartYData: string;
}

export const useChart = (props: ChartProps) => {
    const { chartQuery, type, chartYData } = props;
    const chartContainer = useRef<HTMLDivElement>(null);
    const chart = useRef<Chart>(null);

    const renderLineChart = useCallback(
        (container?: HTMLDivElement, data?: WeeklyDeathCount[]) => {
            const chart = new Chart({
                container,
                theme: "classic",
                height: 400,
                width: 600,
                padding: "auto",
            });

            chart
                .data(data)
                .encode("x", "date")
                .encode("y", chartYData)
                .encode("key", "date")
                .animate("update", { duration: 300 });

            if (type === "line") {
                chart.line();
            } else {
                chart.interval();
            }

            chart.render();

            return chart;
        },
        [chartYData, type]
    );

    const arrayLimitter = useCallback(
        (limit: number, arr?: any[]) => limitArray(limit, arr),
        []
    );

    useEffect(() => {
        if (!chart.current && !chartQuery.isLoading) {
            // @ts-ignore
            chart.current = renderLineChart(
                // @ts-ignore
                chartContainer.current,
                arrayLimitter(10, chartQuery.data?.data)
            );
        }
    }, [
        chartQuery.data?.data,
        chartQuery.isLoading,
        arrayLimitter,
        renderLineChart,
    ]);

    return { chartContainer };
};
