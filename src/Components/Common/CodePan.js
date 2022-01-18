import React, { useState } from 'react'
import styles from '../../assets/css/components/CodePan.module.css'
import SourceCode from './SourceCode'
const CodePan = (props) => {
    const [isSourceCodeDisplay, setourceCodeDisplay] = useState(false)
    const onClickViweSource = () => {
        setourceCodeDisplay(!isSourceCodeDisplay);
    }
    return (
        <div className={styles.container}>
            {isSourceCodeDisplay ? <>
                <div className={styles.Header}>
                    <h3>Source Code</h3>
                    <i className={`fa fa-close ${styles.close}`} title="Close"
                        onClick={onClickViweSource}
                    ></i>
                </div>
                <div className={styles.SourceCode_Container}>
                    <SourceCode url={props.url} />
                </div>
            </> : undefined}
            <div className={styles.footer}>
                <div className={styles.btn_container}>
                    <i className={`fa fa-code ${styles.View_source}`} title="View Source"
                        onClick={onClickViweSource}
                    >View Source</i>
                </div>
            </div>

        </div>
    )
}

export default CodePan
