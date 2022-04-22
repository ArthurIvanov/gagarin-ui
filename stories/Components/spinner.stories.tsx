import React from 'react';
import { storiesOf } from '@storybook/react';
import { GlobalStyles } from '@atlantum/react';
import { ItemsStack } from '@atlantum/react';
import { Spinner } from '@atlantum/react';
import { Card } from '@atlantum/react';
import '../stories.styles.css';

const Spinners = () => {
    return (
        <>
            <GlobalStyles />
            <div className="atlantum-view">
                <Card size="standard">
                    <ItemsStack direction={'row'}>
                        <Spinner size={'16px'} />
                        <Spinner size={'24px'} />
                        <Spinner size={'32px'} />
                        <Spinner size={'64px'} />
                    </ItemsStack>
                </Card>
            </div>
        </>
    );
};

storiesOf('Components/Spinner', module).add('Spinner variations', () => (
    <Spinners />
));
