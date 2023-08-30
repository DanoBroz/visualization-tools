import { Typography } from "antd";

export const Navbar = ({ title }: { title?: string }) => (
    <nav className=" py-3 shadow-md">
        <div className="container">
            <Typography className=" font-bold">
                {title || "Navigation title"}
            </Typography>
        </div>
    </nav>
);
