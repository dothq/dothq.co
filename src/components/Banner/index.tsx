import React from 'react';

import { StyledBanner } from "./style";

export const Banner = ({ children }: { children: any }) => (
    <StyledBanner>
        {children}
    </StyledBanner>
)