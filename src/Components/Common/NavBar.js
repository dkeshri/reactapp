import React, { useState } from 'react'
import Drawer from '../Common/Drawer'
import '../../assets/css/navbar.css'
import { useNavigate } from 'react-router-dom'
import PageSearchBox from '../Common/PageSearch'
import Logo from './Logo'
// renaming is not allowed. if you want to rename export default
var tempSelectedNodeList = [];
var selectedNode = 'Home';
var searchBoxSeletedItem;
export const NavBar = React.memo(() => {
    const history = useNavigate();
    const [isDrawerOpened, setDrawerOpenState] = useState(false);
    const toggleDrawer = (open) => (event) => {
        if (open === false) {
            setMenuItemSelectedList(tempSelectedNodeList);
        }
        setDrawerOpenState(open);
    };
    const [menuItemSelectedList, setMenuItemSelectedList] = useState(tempSelectedNodeList);
    const [menuItemSelected, setMenuItemSelectedState] = useState(selectedNode);
    const pushMenuItemNodeIds = (nodeIds) => {
        tempSelectedNodeList = nodeIds;
    }
    const onChangeSearchBox = (selectedItem) => {
        searchBoxSeletedItem = selectedItem;
        history(selectedItem.value)
    }
    const setSelectedItemNodeId = (nodeId) => {
        setMenuItemSelectedState(nodeId);
        selectedNode = nodeId;
    }
    const style = {
        img: { "height": "100%", "width": "250px" }
    }
    return (
        <>
            <nav>
                <div className="logo-container">
                    <div className="nav-logo" onClick={toggleDrawer(true)}>
                        <Logo/>
                    </div>
                    <div className="hamburger" onClick={toggleDrawer(true)}>
                        <div className="line"></div>
                        <div className="line"></div>
                        <div className="line"></div>
                    </div>
                </div>

                <div className="SearchBox">
                    <PageSearchBox seacrchBoxProps={{ searchBoxSeletedItem, onChangeSearchBox }} />
                </div>
            </nav>
            <Drawer
                isDrawerOpened={isDrawerOpened}
                toggleDrawer={toggleDrawer}
                menuItemProps={{ menuItemSelected, menuItemSelectedList, pushMenuItemNodeIds, setSelectedItemNodeId, toggleDrawer }}
            />
        </>
    )
}
);