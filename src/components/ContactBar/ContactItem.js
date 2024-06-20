import * as React from 'react';
import {Avatar, Link} from "@mui/material";
import {grey} from "@mui/material/colors";
import {makeStyles} from '@mui/styles';
import {ReactElement} from "react";

const useStyles = makeStyles(({
  outer: {
    transition: "0.4s",
    '&:hover': {
      background: "#FF0000", 
      transform: "translate(0, -8px)",
      "& .inner": {
        color: "#FFFFFF"
      }
    },
  },
}));

export default function ContactItem(props) {

  const classes = useStyles();

  return (
    <Link href={props.dest} target="_blank" sx={{outline: 'none'}}>
      <Avatar className={classes.outer} sx={{ bgcolor: "#ffffff" }}>
        {props.icon}
      </Avatar>
    </Link>
  );
}