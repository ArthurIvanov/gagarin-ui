import React from 'react';
import { storiesOf } from '@storybook/react';
import { GlobalStyles } from '@atlantum/react';
import { Card } from '@atlantum/react';
import { ItemsStack } from '@atlantum/react';
import { Avatar } from '@atlantum/react';

import '../stories.styles.css';

const AvatarDefault = () => {
    return (
        <>
            <GlobalStyles />
            <div className="atlantum-view">
                <Card size={'standard'}>
                    <ItemsStack direction={'row'} distance={'24px'}>
                        <Avatar size={'default'} />
                        <Avatar
                            size={'default'}
                            src={'https://i.ibb.co/PWt4sKP/me.jpg'}
                        />
                        <Avatar size={'default'}>ai</Avatar>
                    </ItemsStack>
                </Card>
            </div>
        </>
    );
};
const AvatarLarge = () => {
    return (
        <>
            <GlobalStyles />
            <div className="atlantum-view">
                <Card size={'standard'}>
                    <ItemsStack direction={'row'} distance={'24px'}>
                        <Avatar size={'large'} />
                        <Avatar
                            size={'large'}
                            src={'https://i.ibb.co/PWt4sKP/me.jpg'}
                        />
                        <Avatar size={'large'}>ai</Avatar>
                    </ItemsStack>
                </Card>
            </div>
        </>
    );
};

storiesOf('Components/Avatar', module).add('Default', () => <AvatarDefault />);
storiesOf('Components/Avatar', module).add('Large', () => <AvatarLarge />);
