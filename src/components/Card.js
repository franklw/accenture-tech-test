import React from 'react'
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
 const styles = {
  card: {
    minWidth: 275,
    maxWidth: 275,
    margin: 5
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    marginBottom: 16,
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
};
 const card = (props) => {
  const { classes } = props;
  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary">
          Word of the Day
    </Typography>
        <Typography variant="headline" component="h2">
          be
          nev
          lent
    </Typography>
        <Typography className={classes.pos} color="textSecondary">
          adjective
    </Typography>
        <Typography component="p">
          well meaning and kindly.
      <br />
          {'"a benevolent smile"'}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  )
}
 export default withStyles(styles)(card); 