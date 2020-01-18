import React from 'react';
import './App.scss';

const App: React.FC = () => {
    return (
        <div className="app">
            <div className="logo">curly</div>
            <div className="tagline">cURL builder</div>
            <div className="output">
                <pre>
                    $ curl
                </pre>
                <button>Copy to clipboard</button>
            </div>
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
