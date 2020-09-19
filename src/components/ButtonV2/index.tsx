import React from 'react';

import { StyledButtonV2 } from './style';

import { Thinker } from '../Thinker';

interface Props {
    loading?: boolean;
    children: any;
    color?: string; 
    background?: string; 
    w?: number; 
    h?: number; 
    br?: number; 
    fs?: number;
    onClick?: any;
    style?: any;
    disabled?: boolean;
}

export const ButtonV2 = ({ 
    loading, 
    children, 
    color, 
    background, 
    w, 
    h, 
    br, 
    fs,
    onClick,
    style,
    disabled
}: Props) => {
    return (
        <StyledButtonV2 color={color} background={background} w={w} h={h} br={br} fs={fs} onClick={onClick} style={style} disabled={disabled}>
            {!loading && children}
            {loading && <Thinker color={color || "white"} center />}
        </StyledButtonV2>
    )
}