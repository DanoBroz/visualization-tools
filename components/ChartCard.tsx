import { Card, CardProps } from "antd";
import { BsChatLeftText } from "react-icons/bs";
import { RxAvatar } from "react-icons/rx";

interface ChartCardProps extends CardProps {
    chartContainer: React.MutableRefObject<HTMLDivElement | null>;
    noteNumber: number;
}

export const ChartCard = (props: ChartCardProps) => {
    const { chartContainer, noteNumber, title, ...elementProps } = props;

    return (
        <Card
            title={title || "Latest weekly deaths with COVID-19"}
            bordered={false}
            actions={[
                <RxAvatar className="ml-5 mr-auto text-2xl" key="avatar" />,
                <span
                    key="notes"
                    className="flex justify-end items-center gap-1 mr-5"
                >
                    {noteNumber}
                    <BsChatLeftText key="notes" />
                </span>,
            ]}
            {...elementProps}
        >
            <div ref={chartContainer}></div>
        </Card>
    );
};
