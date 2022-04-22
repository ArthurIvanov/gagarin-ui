import React, { FC, ReactNode } from 'react';
import styled from 'styled-components';

export interface SidebarProps {
    children?: ReactNode;
}

const StyledSidebar = styled.div<SidebarProps>`
    border-radius: ${(props) => props.theme.borderRadius};
    color: ${(props) => props.theme.colors.neutral[400]};
    display: flex;
    flex-direction: row;
    position: fixed;
    left: ${(props) => props.theme.spacing[24]};
    bottom: ${(props) => props.theme.spacing[24]};
    transform: translateX(0px);
    padding: ${(props) => props.theme.spacing[24]};
    top: 120px;
    width: 256px;

    background-color: ${(props) => props.theme.colors.neutral[100]};
    box-shadow: 0 0 16px 0 rgba(0, 0, 0, 0.08);
`;

const Sidebar: FC<SidebarProps> = (props) => {
    return (
        <StyledSidebar id="atlantum-sidebar">{props.children}</StyledSidebar>
    );
};

export default Sidebar;
