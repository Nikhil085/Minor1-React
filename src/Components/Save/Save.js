import React from 'react';
import {TextField, makeStyles, Button, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        marginTop: '2rem'
    },
  }));


function Save(props) {
    const { home, id , name, description, change, isUpdate, save } = props
    const classes = useStyles();
    return (
       <div>
        <TextField
        className={classes.root}
        label="UserId"
        disabled={isUpdate}
        name="id"
      value={id}
      onChange={change}
      />
      <TextField
      className={classes.root}
        label="Username"
        name="name"
        value={name}
        onChange={change}

        
      />
      <TextField
      className={classes.root}
        label="User's Description"
        name="description"
        value={description}
        multiline
        row={3}
        onChange={change}
      />
    <Typography>
    <Button onClick={save} style={{marginTop:"2rem", marginRight:"1rem"}} variant="contained" color="primary">Save</Button>
    <Button onClick={home} style={{marginTop:"2rem"}} variant="contained" color="secondary">Go Back</Button>
    </Typography>
       </div>
    )
}

export default Save;
