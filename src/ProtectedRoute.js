import React from 'react'
import { Redirect, Route, Navigate } from 'react-router-dom'
import { NavBar } from './Components/Common/NavBar'
import { motion } from 'framer-motion'
import Footer from './Components/Common/Footer'
import Login from './Components/OpenPage/Login'
import { AppConfig } from './data/AppConfig.js'
const mainContentSectionVariants = {
    init: {
        opacity: 0
    },
    in: {
        opacity: 1,
        transition: { duration: .5, }
    },
    exit: {
        x: '-100vw',
        transition: { duration: .5, ease: 'easeInOut' }
    }
}
// export const ProtectedRoute = ({ component: Component, openPage: isOpenPage,url, ...rest }) => {
//     const isAuthenticated = AppConfig.isAuth;
//     return (<Route
//         {...rest}
//         render={(prpos) => {
//             if (isOpenPage) {
//                 return <motion.div className="mainContentSection"
//                     variants={mainContentSectionVariants}
//                     initial="init"
//                     animate="in"
//                     exit="exit">
//                     <Component url={url}/>
//                 </motion.div>
//             } else if (isAuthenticated) {
//                 return <div id="main">
//                     <NavBar />
//                     <motion.div className="mainContentSection"
//                         variants={mainContentSectionVariants}
//                         initial="init"
//                         animate="in"
//                         exit="exit">
//                         <Component url={url} />
//                     </motion.div>
//                     <div style={{ color: "white" }} className="footer">
//                         <Footer />
//                     </div>
//                 </div>
//             } else {
//                 return <motion.div className="mainContentSection"
//                     variants={mainContentSectionVariants}
//                     initial="init"
//                     animate="in"
//                     exit="exit">
//                     <Login url={url} />
//                 </motion.div>
//             }

//         }}
//     />
//     );
// }

export const ProtectedRoute = (props) => {
    const auth = true;

    if (props.openPage) {
        return props.children;
    } else if (auth) {
        return <div id="main">
            <NavBar />
            <motion.div className="mainContentSection"
                variants={mainContentSectionVariants}
                initial="init"
                animate="in"
                exit="exit">
                {props.children}
            </motion.div>
            <div style={{ color: "white" }} className="footer">
                <Footer />
            </div>
        </div>;
    } else {
        return (<motion.div className="mainContentSection"
            variants={mainContentSectionVariants}
            initial="init"
            animate="in"
            exit="exit">
            <Login />
        </motion.div>);
    }

}