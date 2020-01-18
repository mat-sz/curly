import React, { useState, useEffect } from 'react';
import styles from './styles.module.scss';

import Select from './components/Select';
import Input from './components/Input';
import KV from './components/KV';

export interface KVObject {
    id: string,
    key: string,
    value: string,
};

const Options: React.FC<{
    setCommand: React.Dispatch<React.SetStateAction<string>>,
}> = ({ setCommand }) => {
    const [ method, setMethod ] = useState('GET');
    const [ url, setUrl ] = useState('');
    const [ headers, setHeaders ] = useState<KVObject[]>([]);

    useEffect(() => {
        let command = 'curl';
        command += ' -X ' + method;

        if (headers.length > 0) {
            command += headers.reduce((previous, item) => 
                previous + ' -H "' + item.key + ': ' + item.value + '"', '');
        }

        if (url !== '') {
            command += ' "' + encodeURI(url) + '"';
        }
        setCommand(command);
    });

    return (
        <div className={styles.options}>
            <div>
                <Select
                    value={method}
                    setValue={setMethod}
                    options={['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'HEAD', 'OPTIONS']}
                />
                <Input
                    value={url}
                    setValue={setUrl}
                    placeholder="URL"
                />
            </div>
            <KV
                value={headers}
                setValue={setHeaders}
                title="Header"
                addTitle="Add a new header"
            />
        </div>
    );
}

export default Options;
