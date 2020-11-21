import React from 'react';
import styled, { css } from 'styled-components';

import { AuthField, AuthInput, AuthPlaceholder } from '../style';

export const Input = ({ 
    compact, 
    placeholder, 
    type, 
    value,
    width,
    height,
    inputmode,
    pattern
}: { 
    compact?: boolean, 
    placeholder?: string, 
    type?: string, 
    value?: string,
    width?: string,
    height?: string,
    inputmode?: any,
    pattern?: string
}) => {
    const [val, setVal] = React.useState(value ?? "");

    const getPlaceholder = () => {
        if(placeholder) return placeholder

        if(compact) {
            if(type == "email") return "Email Address"
            if(type == "password") return "Password"
            if(type == "phone") return "Phone number"
            else return " "
        } else return " "
    }

    const change = (e) => {
        if(pattern) {
            const regex = new RegExp(pattern);

            if(regex.test(e.target.value) || e.target.value.length == 0) setVal(e.target.value);
        } else setVal(e.target.value);
    }

    return (
        <AuthField compact={compact ?? false} style={{ width, height }}>
            <AuthInput 
                placeholder={getPlaceholder()} 
                type={type ?? "text"} 
                value={val}
                onChange={(e) => change(e)}
                compact={compact ?? false}
                inputMode={inputmode ?? ""}
            />
            {!compact && <AuthPlaceholder>{placeholder}</AuthPlaceholder>}
        </AuthField>
    )
}

export const Space = styled.div`
    ${({ s }: { s?: number }) => css`
        margin: 0 ${s ? s : "18"}px;
    `};
`;