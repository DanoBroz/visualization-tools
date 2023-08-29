"use client";

import theme from "@/theme/themeConfig";
import { StyleProvider } from "@ant-design/cssinjs";
import { Button, ConfigProvider } from "antd";

const HomePage = () => (
    <ConfigProvider theme={theme}>
        <StyleProvider hashPriority="high">
            <div className="container">
                <Button type="primary" className="bg-gray-400">
                    Button
                </Button>
            </div>
        </StyleProvider>
    </ConfigProvider>
);

export default HomePage;
