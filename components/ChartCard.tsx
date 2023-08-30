import { Card, Space } from "antd";
import { BsChatLeftText } from "react-icons/bs";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { RxAvatar } from "react-icons/rx";
import { twMerge } from "tailwind-merge";
import { useSwitch } from "@/hooks";
import { ImSpinner10 } from "react-icons/im";
import type { ChartCardProps } from "@/types";

export const ChartCard = (props: ChartCardProps) => {
    const {
        chartContainer,
        noteNumber,
        title,
        className,
        isLoading,
        ...elementProps
    } = props;

    const { isSelected, handleSwitch } = useSwitch();

    const heartIcon = isSelected ? (
        <AiFillHeart
            onClick={handleSwitch}
            className="hover:cursor-pointer text-red-500"
        />
    ) : (
        <AiOutlineHeart
            onClick={handleSwitch}
            className="hover:cursor-pointer text-red-500"
        />
    );

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
            extra={
                <Space size={"small"}>
                    Select favorite:
                    <span className=" text-xl">{heartIcon}</span>
                </Space>
            }
            className={twMerge("overflow-hidden", className)}
            {...elementProps}
        >
            {isLoading ? (
                <div className="h-[300px] flex justify-center items-center spin">
                    <ImSpinner10 className="text-4xl animate-spin text-darkGreen" />
                </div>
            ) : (
                <div ref={chartContainer}></div>
            )}
        </Card>
    );
};
