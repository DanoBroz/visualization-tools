import theme from "@/theme/themeConfig";
import { Button, ConfigProvider } from "antd";

const HomePage = () => (
    <ConfigProvider theme={theme}>
        <div className="App">
            <Button type="primary">Button</Button>
        </div>
    </ConfigProvider>
);

export default HomePage;
