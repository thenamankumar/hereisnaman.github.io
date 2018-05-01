import React from 'react';
import { render } from 'react-dom';

import './index.html';

const App = () => <h1>Hello World!</h1>;

render(<App />, document.getElementById('app'));
