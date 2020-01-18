import React from 'react';
import styles from './styles.module.scss';

const Output: React.FC<{ command: string }> = ({ command }) => {
    return (
        <div className={styles.output}>
            <pre>
                <span>$&nbsp;</span>{ command }
            </pre>
            <button>Copy to clipboard</button>
        </div>
    );
}

export default Output;
