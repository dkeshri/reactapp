import React from 'react'
import { Routes, useLocation, Route } from 'react-router-dom'
import { ProtectedRoute } from './ProtectedRoute'
import { config } from './data/NavMenuListConfig';
import { AnimatePresence } from 'framer-motion';
import PageNotFound from './Components/Common/PageNotFound';
import Home from './Components/Home';
const routeList = [];
const getRouteComponent = (MenuConfig) => {
    MenuConfig.forEach(item => {
        if (item.children !== undefined && item.children.length !== 0) {
            getRouteComponent(item.children);
        }
        if (item.path !== undefined)
            routeList.push(item);
    });
}
getRouteComponent(config.menuItems);
export const AppRouter = () => {
    const location = useLocation();
    return (
        <AnimatePresence exitBeforeEnter>
            <Routes location={location} key={location.key}>
                {/* <Route path="/" element={<Home/>} /> */}
                <Route path="/" element={<ProtectedRoute><Home/></ProtectedRoute>} />
                {routeList.map((item, i) => {
                        let Component = item.component;
                    if (item.openPage){
                        return <Route path={`${item.path}`} key={i} element={<ProtectedRoute openPage><Component/> </ProtectedRoute>} />
                    }else{
                        
                        return <Route path={`${item.path}`} key={i} element={<ProtectedRoute><Component/></ProtectedRoute>} />
                    }
                       
                })}
                <Route path="*" element={<PageNotFound/>} />
            </Routes>
        </AnimatePresence>
    )
}