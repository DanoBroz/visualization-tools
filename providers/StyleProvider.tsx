"use client";

import type { ChildrenProps } from "@/types";
import { StyleProvider } from "@ant-design/cssinjs";

export default function _StyleProvider({ children }: ChildrenProps) {
    return <StyleProvider hashPriority="high">{children}</StyleProvider>;
}
