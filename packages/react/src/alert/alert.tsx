import { FC, ReactNode } from 'react';
import React from 'react';
import styled from 'styled-components';

import { Icon } from '../icons';
import { Heading } from '../typography';
import { ItemsStack } from '../items-stack';

type Status = 'info' | 'success' | 'warning' | 'danger';

export interface AlertProps {
    children?: ReactNode;
    alertStatus?: Status;
    alertTitle?: string;
    isClosable?: boolean;

    /**
     * Allow to apply custom classes to component
     */
    className?: string;
}

const StyledAlert = styled.div<AlertProps>`
    position: relative;
    display: flex;
    max-width: 500px;
    font-size: ${(props) => props.theme.typography.fontSize.base};
    line-height: ${(props) => props.theme.typography.lineHeight.base};
    padding: ${(props) => props.theme.spacing[16]}
        ${(props) => props.theme.spacing[48]};
    border: 1px solid;
    border-radius: ${(props) => props.theme.borderRadius};
    color: ${(props) => props.theme.colors.neutral[400]};

    .status-content {
        position: absolute;
        left: ${(props) => props.theme.spacing[16]};
        top: ${(props) => props.theme.spacing[16]};
    }

    .close-button {
        position: absolute;
        right: ${(props) => props.theme.spacing[16]};
        top: ${(props) => props.theme.spacing[16]};
        cursor: pointer;
    }

    ${(props) =>
        props.alertStatus === 'info' &&
        ` 
        border-color: ${props.theme.colors.info[200]};
        background-color: ${props.theme.colors.info[100]}; 
        
        .status-content {
            color: ${props.theme.colors.info[200]};
        }
             
    }
    `}

    ${(props) =>
        props.alertStatus === 'success' &&
        ` 
        border-color: ${props.theme.colors.success[200]};
        background-color: ${props.theme.colors.success[100]}; 
        
        .status-content {
            color: ${props.theme.colors.success[200]};
        }
             
    }
    `}
    
    ${(props) =>
        props.alertStatus === 'warning' &&
        ` 
        border-color: ${props.theme.colors.warning[200]};
        background-color: ${props.theme.colors.warning[100]}; 
        
        .status-content {
            color: ${props.theme.colors.warning[200]};
        }
             
    }
    `}

    ${(props) =>
        props.alertStatus === 'danger' &&
        ` 
        border-color: ${props.theme.colors.danger[200]};
        background-color: ${props.theme.colors.danger[100]}; 
        
        .status-content {
            color: ${props.theme.colors.danger[200]};

        }
             
    }
    `}
`;

export const Alert: FC<AlertProps> = ({
    children,
    alertStatus,
    className,
    alertTitle,
    isClosable,
}) => (
    <StyledAlert alertStatus={alertStatus} className={className}>
        <AlertIcon alertStatus={alertStatus} />
        <CloseIcon className={className} isClosable={isClosable} />
        <ItemsStack direction={'column'} distance={'8px'}>
            {alertTitle && (
                <AlertTitle
                    className="atlantum-alert-headline"
                    alertTitle={alertTitle}
                >
                    {alertTitle}
                </AlertTitle>
            )}

            <span>{children}</span>
        </ItemsStack>
    </StyledAlert>
);

export const AlertIcon: FC<AlertProps> = ({ alertStatus }) => {
    return (
        <>
            {alertStatus === 'danger' && (
                <Icon
                    className="status-content"
                    name="alert-triangle"
                />
            )}
            {alertStatus === 'info' && (
                <Icon className="status-content" name="info" />
            )}
            {alertStatus === 'success' && (
                <Icon className="status-content" name="check-circle" />
            )}
            {alertStatus === 'warning' && (
                <Icon className="status-content" name="alert-circle" />
            )}
        </>
    );
};

export const CloseIcon: FC<AlertProps> = ({ isClosable }) => {
    return (
        <>
            {isClosable && (
                <Icon className="close-button" name="close" />
            )}
        </>
    );
};

export const AlertTitle: FC<AlertProps> = ({ alertTitle }) => (
    <Heading as="h6">{alertTitle}</Heading>
);
