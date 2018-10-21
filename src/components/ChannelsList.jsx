import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import { connect } from 'react-redux';


const mapStateToProps = (state) => {
  const { channels } = state;
  const props = {
    channels,
  };
  return props;
};

const styles = theme => ({
  root: {
    width: '100%',
    maxWidth: 260,
    height: window.innerHeight,
    backgroundColor: '#e8ebf7',
  },
  nested: {
    paddingLeft: theme.spacing.unit * 4,
  },
});


class ChannelsList extends React.Component {
  state = {
    open: true,
  };

  handleClick = () => {
    this.setState(state => ({ open: !state.open }));
  };

  render() {
    const { classes, channels } = this.props;
    const { open } = this.state;
    return (
      <div className={classes.root}>
        <List component="nav">
          <ListItem button onClick={this.handleClick}>
            <ListItemText primary="Channels" />
            {open ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              {channels.map(({ name, id }) => (
                <ListItem button className={classes.nested} key={id}>
                  <ListItemText primary={name} />
                </ListItem>
              ))}
            </List>
          </Collapse>
        </List>
      </div>
    );
  }
}

export default connect(mapStateToProps)(withStyles(styles)(ChannelsList));
