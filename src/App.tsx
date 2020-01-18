import React, { useState } from 'react';
import './App.scss';

import Output from './components/Output';

const App: React.FC = () => {
    const [ command, setCommand ] = useState('curl');

    return (
        <div className="app">
            <div className="logo">curly</div>
            <div className="tagline">cURL builder</div>
            <Output command={command} />
            <div className="options">
                <div>
                    <select>
                        <option>GET</option>
                        <option>POST</option>
                        <option>PUT</option>
                        <option>PATCH</option>
                        <option>DELETE</option>
                        <option>OPTIONS</option>
                        <option>HEAD</option>
                    </select>
                    <input placeholder="URL"></input>
                </div>
            </div>
        </div>
    );
}

export default App;
