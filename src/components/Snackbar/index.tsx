import React from 'react';

import { StyledSnackbar } from "./style";

export const Snackbar = ({ children, visible }) => (
    <StyledSnackbar visible={visible}>
        {children}
    </StyledSnackbar>
)