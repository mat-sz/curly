import React, { useState, useEffect, useCallback } from 'react';
import CopyToClipboard from 'react-copy-to-clipboard';
import styles from './styles.module.scss';

const Output: React.FC<{ command: string }> = ({ command }) => {
    const [ copied, setCopied ] = useState(false);

    useEffect(() => {
        // Reset the button text when command changes.
        setCopied(false);
    }, [ command, setCopied ]);

    const onCopy = useCallback(() => setCopied(true), [ setCopied ]);

    return (
        <div className={styles.output}>
            <pre>
                <span>$&nbsp;</span>{ command }
            </pre>
            <CopyToClipboard
                text={command}
                onCopy={onCopy}>
                <button>
                    { copied ? 'Copied' : 'Copy to clipboard' }
                </button>
            </CopyToClipboard>
        </div>
    );
}

export default Output;
