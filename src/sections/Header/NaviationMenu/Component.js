import React, { useState } from 'react';
import xor from 'lodash.xor';
import Popover from '@material-ui/core/Popover';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Collapse from '@material-ui/core/Collapse';
import ListItem from '@material-ui/core/ListItem';
import { withStyles } from '@material-ui/core/styles';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import ListItemText from '@material-ui/core/ListItemText';

const styles = theme => ({
  popover: {
    width: '100%',
    marginLeft: -60,
    marginTop: 10,
  },
  nested: {
    paddingLeft: theme.spacing.unit * 4,
  },
});

const anchorOrigin = {
  vertical: 'bottom',
  horizontal: 'left',
};

function NavigationMenu({ data, history, classes }) {
  const [isMenuOpen, setMenuOpenStatus] = useState(false);
  const [collapsedItemKeys, xorCollapsedItemKeys] = useState([]);
  const [anchorEl, setAnchorEl] = useState(null);

  const togglePopoverOpenStatus = () => {
    setMenuOpenStatus(!isMenuOpen);
  };

  const setAnchor = (event) => {
    setAnchorEl(event.currentTarget);
    togglePopoverOpenStatus();
  };

  const handleListItemClick = item => {
    if (item.routes) {
      xorCollapsedItemKeys(xor(collapsedItemKeys, [item.path]));
      return;
    }

    history.push(item.path);
    setMenuOpenStatus(false);
  };

  return data.map(menuItem => {
    if (menuItem.routes) {
      return (
        <React.Fragment key={menuItem.title}>
          <Button onClick={setAnchor}>
            {menuItem.title}
          </Button>

          <Popover
            open={isMenuOpen}
            anchorEl={anchorEl}
            className={classes.popover}
            anchorOrigin={anchorOrigin}
            onClose={togglePopoverOpenStatus}
          >
            <List component="nav">
              {
                menuItem.routes.map(item => {
                  const isNestedMenuOpen = collapsedItemKeys.includes(item.path);

                  if (item.routes) {
                    return (
                      <React.Fragment key={item.title}>
                        <ListItem
                          button
                          onClick={() => handleListItemClick(item)}
                        >
                          <ListItemText
                            inset
                            primary={item.title}
                          />

                          {isNestedMenuOpen
                            ? <ExpandLess/>
                            : <ExpandMore/>
                          }
                        </ListItem>

                        <Collapse in={isNestedMenuOpen} timeout="auto" unmountOnExit>
                          <List component="div" disablePadding>
                            {
                              item.routes.map(nestedItem => {
                                return (
                                  <ListItem
                                    button
                                    key={nestedItem.path}
                                    className={classes.nested}
                                    onClick={() => handleListItemClick(nestedItem)}
                                  >
                                    <ListItemText
                                      inset
                                      primary={nestedItem.title}
                                    />
                                  </ListItem>
                                );
                              })
                            }
                          </List>
                        </Collapse>
                      </React.Fragment>
                    )
                  }

                  return (
                    <ListItem
                      button
                      key={item.path}
                      onClick={() => handleListItemClick(item)}
                    >
                      <ListItemText inset primary={item.title}/>
                    </ListItem>
                  );
                })
              }
            </List>
          </Popover>
        </React.Fragment>
      );
    }

    return (
      <Button
        key={menuItem.title}
        onClick={() => handleListItemClick(menuItem)}
      >
        {menuItem.title}
      </Button>
    )
  });
}

NavigationMenu.defaultProps = {};

export default withStyles(styles)(NavigationMenu);
