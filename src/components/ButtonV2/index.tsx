import React from 'react';

import { StyledButtonV2 } from './style';

import { Thinker } from '../Thinker';

interface Props {
    loading?: boolean;
    loadOnClick?: boolean;
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
    bc?: string;
}

export const ButtonV2 = ({ 
    loading, 
    loadOnClick,
    children, 
    color, 
    background, 
    w, 
    h, 
    br, 
    fs,
    onClick,
    style,
    disabled,
    bc
}: Props) => {
    const [loc, setLoc] = React.useState(false);

    const newOnClick = () => {
        setLoc(true);

        onClick();
    }

    return (
        <StyledButtonV2 
            color={color} 
            background={background} 
            w={w} 
            h={h} 
            br={br}
            s={fs} 
            onClick={loadOnClick ? newOnClick : onClick} 
            style={style} 
            disabled={disabled} 
            bc={bc}
        >
            {(!loading && loc == false) && children}
            {(loading || loc == true) && <Thinker color={color || "white"} center />}
        </StyledButtonV2>
    )
}