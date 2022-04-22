import React from 'react';
import { storiesOf } from '@storybook/react';
import { GlobalStyles } from '@atlantum/react';
import { Card } from '@atlantum/react';
import { ItemsStack } from '@atlantum/react';
import { Divider } from '@atlantum/react';

import '../stories.styles.css';

const DividerDefault = () => {
    return (
        <>
            <GlobalStyles />
            <div className="atlantum-view">
                <Card size={'standard'}>
                    <ItemsStack direction={'row'} distance={'24px'}>
                        <Divider orientation={'horizontal'} length={'200px'} />
                        <Divider orientation={'vertical'} length={'50px'} />
                    </ItemsStack>
                </Card>
            </div>
        </>
    );
};

storiesOf('Components/Divider', module).add('Default', () => (
    <DividerDefault />
));
