import React from "react";

import { StyledThinker, ThinkerCircle } from "./style";

export const Thinker = ({ multiplier, color, center }: { multiplier?: number; color?: string; center?: boolean }) => {
    return (
        <StyledThinker style={{ margin: center ? "0 auto" : "" }}>
            {Array.apply(null, { length: 3 }).map((e: any, i: number) => (
                <ThinkerCircle key={i} color={color || "gray"} delay={i*(multiplier || 0.3333)} />
            ))}
        </StyledThinker>
    )
}