import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import MenuList from '../Common/MenuList'
const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
});

function Drawer(props) {
  const classes = useStyles();
  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === 'top' || anchor === 'bottom',
      })}
      role="presentation"
    >
      <MenuList menuItemProps={props.menuItemProps} />
    </div>
  );

  return (
    <SwipeableDrawer
      anchor={'left'}
      open={props.isDrawerOpened}
      onClose={props.toggleDrawer(false)}
      onOpen={props.toggleDrawer(true)}
    >
      {list('left')}
    </SwipeableDrawer>
  );
}
export default React.memo(Drawer);