import { Typography } from "antd";

export const Navbar = ({ title }: { title?: string }) => (
    <nav className="py-3 shadow-md fixed top-0 left-0 right-0 z-10 bg-white">
        <div className="container px-4">
            <Typography className="font-bold">
                {title || "Navigation title"}
            </Typography>
        </div>
    </nav>
);
