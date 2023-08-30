import { useChart } from "@/hooks";
import { getWeeklyAdmittedPatients } from "@/services";
import { useQuery } from "@tanstack/react-query";
import { ChartCard } from ".";

export const PatientsChart = () => {
    const chartQuery = useQuery(
        ["patientsAdmitted"],
        getWeeklyAdmittedPatients
    );
    const { chartContainer } = useChart({
        chartQuery,
        type: "interval",
        chartYData: "New patients - weekly",
    });

    return (
        <ChartCard
            title="Patients admitted to hospital"
            chartContainer={chartContainer}
            noteNumber={2}
        />
    );
};
