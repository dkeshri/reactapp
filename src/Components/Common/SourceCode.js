import React, { useState } from 'react'
import { httpGitHubRequest } from '../../ApiCall'
import styles from '../../assets/css/components/SourceCode.module.css'
import { motion } from 'framer-motion'
const mainContentSectionVariants = {
    init: {
        y: '100vh',
        opacity: 0
    },
    in: {
        y: '0vh',
        opacity: 1,
        transition: { duration: .7, }
    },
    exit: {
        y: '100vh',
        opacity: 0,
        transition: { duration: .5, ease: 'easeInOut' }
    }
}
const SourceCode = (props) => {
    const [sourceCode, setSourceCode] = useState();
    httpGitHubRequest({
        url: props.url,
        method: 'Get'
    }).then((data) => {
        setSourceCode(data.fetchedData);
    }).catch((error) => {
        console.log(error);
    });
    return (
        <div className={styles.container}>
            <motion.pre className={styles.container}
                variants={mainContentSectionVariants}
                initial="init"
                animate="in"
                exit="exit"
            >
                {sourceCode!==undefined?sourceCode:'Loading...'}
            </motion.pre>
        </div>
    )
}

export default SourceCode
