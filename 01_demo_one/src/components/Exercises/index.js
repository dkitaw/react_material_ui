import React, { Fragment } from 'react';
import {
  Grid,
  Paper,
  Typography,
  List,
  ListItem,
  ListItemText,
  ListItemLink
} from '@material-ui/core';

const styles = {
  Paper: {
    padding: 20,
    marginTop: 10,
    marginBottom: 10,
    height: 500,
    overflowY: 'auto'
  }
};
export default ({ exercises, category }) => {
  return (
    <Grid container>
      <Grid item sm>
        <Paper style={styles.Paper}>
          {exercises.map(([group, exercises]) => (
            !category || category === group
            ?<Fragment>
            <Typography
              variant="headline"
              style={{ textTransform: 'capitalize' }}
            >
              {group}
            </Typography>
            <List component="ul">
              {exercises.map(({ title }) => {
                return (
                  <ListItem button>
                    <ListItemText primary={title} />
                  </ListItem>
                );
              })}
            </List>
              </Fragment>
              :null
          ))}
        </Paper>
      </Grid>
      <Grid item sm>
        <Paper style={styles.Paper}>
          <Typography variant="display1">Welcome!</Typography>
          <Typography variant="Subheading" style={{ marginTop: 20 }}>
            Pleas select an exercise from the list on the left
          </Typography>
        </Paper>
      </Grid>
    </Grid>
  );
};
