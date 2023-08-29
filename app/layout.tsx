import type { ChildrenProps } from "@/types";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { QueryProvider } from "@/providers";
import StyledComponentsRegistry from "@/lib/AntdRegistry";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Visualisation App",
};

export default function RootLayout({ children }: ChildrenProps) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <QueryProvider>
                    <StyledComponentsRegistry>
                        {children}
                    </StyledComponentsRegistry>
                </QueryProvider>
            </body>
        </html>
    );
}
