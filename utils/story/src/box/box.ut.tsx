import styled from 'styled-components';
import React, { FC, ReactNode } from 'react';

export interface BoxProps {
    children: ReactNode;
    className?: string;
    width?: string;
    height?: string;
}

export const StyledBox = styled.div<BoxProps>`
    display: flex;
    background-color: ${(props) => props.theme.colors.neutral[400]};
    color: ${(props) => props.theme.colors.neutral[200]};
    width: ${(props) => props.width};
    height: ${(props) => props.height};
    font-size: 20px;
    border-radius: 8px;
    align-items: center;
    justify-content: center;
`;

// eslint-disable-next-line react/prop-types
export const Box: FC<BoxProps> = ({ children, className, width, height }) => (
    <StyledBox className={className} width={width} height={height}>
        {children}
    </StyledBox>
);
