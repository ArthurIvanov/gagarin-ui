import React from 'react';
import { storiesOf } from '@storybook/react';
import { GlobalStyles } from '@atlantum/react';
import { ItemsStack } from '@atlantum/react';
import { Badge } from '@atlantum/react';
import { Card } from '@atlantum/react';
import '../stories.styles.css';

const BadgesFilled = () => {
    return (
        <>
            <GlobalStyles />
            <div className="atlantum-view">
                <Card size="standard">
                    <ItemsStack direction={'row'}>
                        <Badge isInfo>Info</Badge>
                        <Badge isSuccess>Success</Badge>
                        <Badge isWarning>Warning</Badge>
                        <Badge isDanger>Danger</Badge>
                    </ItemsStack>
                </Card>
            </div>
        </>
    );
};

storiesOf('Components/Badge', module).add('Default', () => <BadgesFilled />);
