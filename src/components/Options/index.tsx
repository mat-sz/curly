import React, { useState, useEffect } from 'react';
import styles from './styles.module.scss';

import Select from './components/Select';
import Input from './components/Input';

const Options: React.FC<{
    setCommand: React.Dispatch<React.SetStateAction<string>>,
}> = ({ setCommand }) => {
    const [ method, setMethod ] = useState('GET');
    const [ url, setUrl ] = useState('');

    useEffect(() => {
        let command = 'curl';
        command += ' -X ' + method;

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
        </div>
    );
}

export default Options;
