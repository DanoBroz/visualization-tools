import { CovidDataResponse, WeeklyDeathCount } from "@/types";
import { Chart } from "@antv/g2";
import { UseQueryResult } from "@tanstack/react-query";
import { useCallback, useEffect, useRef } from "react";

interface ChartProps {
    // TODO: add chartQuery Props after second chart done
    chartQuery: UseQueryResult<CovidDataResponse<WeeklyDeathCount>, unknown>;
}

export const useChart = ({ chartQuery }: ChartProps) => {
    const chartContainer = useRef<HTMLDivElement>(null);
    const chart = useRef<Chart>(null);

    function renderBarChart(
        container?: HTMLDivElement,
        data?: WeeklyDeathCount[]
    ) {
        const chart = new Chart({
            container,
            theme: "classic",
            height: 400,
            width: 600,
            padding: "auto",
        });

        chart
            .line()
            .data(data)
            .encode("x", "date")
            .encode("y", "New deaths - weekly")
            .encode("key", "date")
            .animate("update", { duration: 300 });

        chart.render();

        return chart;
    }

    const limitArray = useCallback((limit: number, arr?: any[]) => {
        return arr?.slice(arr.length - limit, arr.length);
    }, []);

    useEffect(() => {
        if (!chart.current && !chartQuery.isLoading) {
            // @ts-ignore
            chart.current = renderBarChart(
                // @ts-ignore
                chartContainer.current,
                limitArray(10, chartQuery.data?.data)
            );
        }
    }, [chartQuery.data?.data, chartQuery.isLoading, limitArray]);

    return { chartContainer };
};
