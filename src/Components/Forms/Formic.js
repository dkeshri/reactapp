import React from 'react'
import style from '../../assets/css/components/forms/Formic.module.css'
import CodePan from '../Common/CodePan'
import PageContainer from '../Common/PageContainer'
function Formic(props) {
    return (
        <PageContainer
            headerTitle="Formic Demos"
            title="Registration Form"
        // backgroundColor="#546874"
        >
            <div className={`box ${style.box}`}>
                <div className={style.test}>
                    Registration Form
                </div>
                <CodePan url={props.url+'.js'}/>
            </div>
            {/* <div className={`box ${style.box}`}>
                <div>
                    Registration Form
                </div>
            </div> */}
        </PageContainer>
    )
}

export default Formic
