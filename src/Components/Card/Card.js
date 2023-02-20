import React from 'react';
import { makeStyles, Button,Accordion,AccordionSummary,AccordionDetails ,Typography } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';



const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
      marginTop:'2rem'
    },
    spaceTop: {
     marginTop:'2rem',
    },
    heading: {
      fontSize: theme.typography.pxToRem(15),
      fontWeight: theme.typography.fontWeightRegular,
    },
  }));


function Card(props) {
    const { name,  description, delet, Edit } = props;
    const classes = useStyles();

    return (
      <div className={classes.root}>
        <Accordion className={classes.spaceTop}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography className={classes.heading}>{name}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
             {description}
            </Typography>
          </AccordionDetails>
          <AccordionDetails>
            <Typography align='right' className={classes.root}>
             <Button onClick={Edit}  color='primary' >Edit</Button>
             <Button onClick={delet} color='secondary' >Deiele</Button>
            </Typography>
          </AccordionDetails>
        </Accordion>
        </div>
)
}

export default Card;
