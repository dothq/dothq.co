import React from 'react';

import { StyledSnackbar } from "./style";

export const Snackbar = ({ children, visible, icon }: { children: any; visible: boolean; icon?: any }) => (
    <StyledSnackbar visible={visible}>
        {icon && <img style={{ margin: "0 12px", opacity: 0.8 }} src={icon} width={24} height={24} />}
        {children}
    </StyledSnackbar>
)