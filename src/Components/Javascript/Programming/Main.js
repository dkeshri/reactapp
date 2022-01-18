import React from 'react'
import PageContainer from '../../Common/PageContainer'
import style from '../../../assets/css/components/Javascript/Main.module.css'
const Main = () => {
    return (
        <PageContainer
            headerTitle="JavaScript Main"
        >
            <div className={`box ${style.box}`}>
                <h1>
                    OPen the console to test Program
                </h1>
            </div>
        </PageContainer >
    )
}

export default Main
