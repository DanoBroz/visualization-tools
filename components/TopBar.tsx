import { DownloadOutlined, FilterOutlined } from "@ant-design/icons";
import { Space, Button, Typography } from "antd";

export const TopBar = () => {
    const { Title } = Typography;

    return (
        <div className="flex justify-between items-center pb-4">
            <Title level={2} className="text-xl">
                Favorite Visualisation Chooser
            </Title>
            <Space>
                <Button type="default">
                    Export to PDF
                    <DownloadOutlined color="primary" />
                </Button>
                <Button>
                    Notes <span className="text-gray-500">(3)</span>
                </Button>
                <Button className="flex items-center">
                    Filter
                    <span className="bg-darkGreen rounded-full text-white h-6 w-6 text-xs flex justify-center items-center ml-2">
                        9+
                    </span>
                    <FilterOutlined />
                </Button>
            </Space>
        </div>
    );
};
