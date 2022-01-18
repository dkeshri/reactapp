import React from 'react'
import PageContainer from '../../Common/PageContainer'
import style from '../../../assets/css/components/Javascript/ES6.module.css'
import CodePan from '../../Common/CodePan'
const ES6 = (props) => {
    return (
        <PageContainer
            headerTitle="ECMAScript 6"
            title="Basic Concepts"
        >
            <div className={`box ${style.box}`}>
                <div className={style.test}>
                    Registration Form
                </div>
                <CodePan url={props.url+'/ES6.js'}/>
            </div>
            <br/>
            <div className={`box ${style.box}`}>
                <div className={style.test}>
                    Registration Form
                </div>
                <CodePan url={props.url+'/ES6.js'}/>
            </div>
        </PageContainer>
    )
}

export default ES6
