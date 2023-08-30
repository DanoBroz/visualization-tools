import { useQuery } from "@tanstack/react-query";
import { ChartCard } from "./ChartCard";
import { useChart } from "@/hooks";
import { getWeeklyDeaths } from "@/services";

export const DeathChart = () => {
    const chartQuery = useQuery(["dailyDeath"], getWeeklyDeaths);
    const { chartContainer } = useChart({
        chartQuery,
        type: "line",
        chartYData: "New deaths - weekly",
    });

    return (
        <ChartCard
            title="Latest weekly deaths with COVID-19"
            chartContainer={chartContainer}
            noteNumber={2}
        />
    );
};
