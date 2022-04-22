import React from 'react';
import { storiesOf } from '@storybook/react';
import { GlobalStyles } from '@atlantum/react';
import { ItemsStack } from '@atlantum/react';
import { Code } from '@atlantum/react';
import { Card } from '@atlantum/react';
import '../stories.styles.css';

const CodePreview = () => {
    return (
        <>
            <GlobalStyles />
            <div className="atlantum-view">
                <Card size="standard">
                    <ItemsStack direction={'row'}>
                        <Code>$ yarn add '@atlantum/core'</Code>
                    </ItemsStack>
                </Card>
            </div>
        </>
    );
};

storiesOf('Components/Code', module).add('Default', () => <CodePreview />);
