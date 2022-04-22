import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { Datepicker } from '@atlantum/react';
import { Card } from '@atlantum/react';
import { GlobalStyles } from '@atlantum/react';
import '../stories.styles.css';

const DefaultInput = () => {
    return (
        <>
            <GlobalStyles />
            <div className="atlantum-compact">
                <Card size={'standard'}>
                    <Datepicker
                        name={'date'}
                        label={'Choose your date'}
                        id={'datepicker'}
                        input
                        type={'date'}
                    />
                </Card>
            </div>
        </>
    );
};

storiesOf('Components/Datepicker', module).add('Default', () => (
    <DefaultInput />
));
