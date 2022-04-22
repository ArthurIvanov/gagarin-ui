import React from 'react';
import { storiesOf } from '@storybook/react';
import { GlobalStyles } from '@atlantum/react';
import { ItemsStack } from '@atlantum/react';
import { Tag } from '@atlantum/react';
import { Card } from '@atlantum/react';
import '../stories.styles.css';

const Tags = () => {
    return (
        <>
            <GlobalStyles />
            <div className="atlantum-view">
                <Card size="standard">
                    <ItemsStack direction={'row'}>
                        <Tag tagColor={'neutral'}>Neutral tag</Tag>
                        <Tag tagColor={'red'}>Red tag</Tag>
                        <Tag tagColor={'green'}>Green tag</Tag>
                        <Tag tagColor={'orange'}>Orange tag</Tag>
                        <Tag tagColor={'blue'}>Blue tag</Tag>
                    </ItemsStack>
                </Card>
            </div>
        </>
    );
};

storiesOf('Components/Tag', module).add('Tag variations', () => <Tags />);
