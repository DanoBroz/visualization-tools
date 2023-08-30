"use client";

import { ChartCard, Navbar } from "@/components";
import { TopBar } from "@/components/TopBar";
import { useChart } from "@/hooks";
import { getWeeklyDeaths } from "@/services";
import theme from "@/theme/themeConfig";
import { StyleProvider } from "@ant-design/cssinjs";
import { useQuery } from "@tanstack/react-query";
import { Col, ConfigProvider, Row } from "antd";

const HomePage = () => {
    const chartQuery = useQuery(["dailyDeath"], getWeeklyDeaths);
    const { chartContainer: firstChart } = useChart({ chartQuery });

    return (
        <ConfigProvider theme={theme}>
            <StyleProvider hashPriority="high">
                <Navbar title="COVID-19 UK data vizualisation" />
                <main className=" bg-gray-200 h-[calc(100vh-49px)]">
                    <div className="container py-4">
                        <TopBar />
                        <Row>
                            <Col span={12}>
                                <ChartCard
                                    title="Latest weekly deaths with COVID-19"
                                    chartContainer={firstChart}
                                    noteNumber={2}
                                />
                            </Col>
                            <Col span={12}></Col>
                        </Row>
                    </div>
                </main>
            </StyleProvider>
        </ConfigProvider>
    );
};

export default HomePage;
