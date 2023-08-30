export const getConfigHeaders = () => ({
    "Content-Type": "application/json",
});

export const getRestApiConfig = () => {
    return {
        baseUrl: "https://api.coronavirus.data.gov.uk/v1/data",
        headerConfig: {
            headers: getConfigHeaders(),
            data: {},
        },
    };
};
