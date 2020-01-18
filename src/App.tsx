import React, { useState } from 'react';
import './App.scss';

import Output from './components/Output';
import Options from './components/Options';

const App: React.FC = () => {
    const [ command, setCommand ] = useState('curl');

    return (
        <div className="app">
            <div className="logo">curly</div>
            <div className="tagline">cURL builder</div>
            <Output command={command} />
            <Options
                setCommand={setCommand}
            />
        </div>
    );
}

export default App;
