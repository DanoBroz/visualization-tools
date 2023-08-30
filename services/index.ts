import { CovidWeeklyDeathsResponse } from "@/types";
import { getRestApiConfig } from "@/utils";
import axios from "axios";

export const getWeeklyDeaths = async (): Promise<CovidWeeklyDeathsResponse> => {
    const { baseUrl, headerConfig } = getRestApiConfig();
    const filters = "filters=areaType=nation;areaName=england";
    const structure = JSON.stringify({
        date: "date",
        "New deaths - weekly": "newWeeklyNsoDeathsByRegDate",
    });

    const endpointUrl = new URL(`?${filters}&structure=${structure}`, baseUrl)
        .href;

    const { data } = await axios.get<CovidWeeklyDeathsResponse>(
        endpointUrl,
        headerConfig
    );

    return data;
};
