"use client";

import { Navbar } from "@/components";
import { DeathChart } from "@/components/DeathChart";
import { PatientsChart } from "@/components/PatientsChart";
import { TopBar } from "@/components/TopBar";
import theme from "@/theme/themeConfig";
import { StyleProvider } from "@ant-design/cssinjs";
import { Col, ConfigProvider, Row } from "antd";

const HomePage = () => {
    return (
        <ConfigProvider theme={theme}>
            <StyleProvider hashPriority="high">
                <Navbar title="COVID-19 UK data vizualisation" />
                <main className="bg-gray-200 pt-[49px] flex flex-col">
                    <div className="container py-4 px-4 flex-1">
                        <TopBar />
                        <Row gutter={[16, 16]}>
                            <Col xs={24} lg={12}>
                                <DeathChart />
                            </Col>
                            <Col xs={24} lg={12}>
                                <PatientsChart />
                            </Col>
                        </Row>
                    </div>
                </main>
            </StyleProvider>
        </ConfigProvider>
    );
};

export default HomePage;
