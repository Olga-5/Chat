import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Send from '@material-ui/icons/Send';

const styles = {
  margin: {
    marginLeft: 100,
    marginTop: 30,
  },
  width: {
    width: 600,
  },
};

const InputForMessage = (props) => {
  const { classes } = props;

  return (
    <div className={classes.margin}>
      <Grid container spacing={8} alignItems="flex-end">
        <Grid item>
          <TextField id="input-with-icon-grid" label="message" className={classes.width} />
        </Grid>
        <Grid item>
          <Send />
        </Grid>
      </Grid>
    </div>
  );
};

export default withStyles(styles)(InputForMessage);
