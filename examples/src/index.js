import React from 'react';
import { render } from 'react-dom';
import { Scheduler } from '../../src';

const App = () => (
    <Scheduler />
);

render(<App />, document.getElementById("root"));