

import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    paper: {
        position: 'absolute',
        width: '66%',
        /* height: '66vh', */
        backgroundColor: theme.palette.background.paper,
        boxShadow: theme.shadows[5],
        /*   padding: theme.spacing(2, 4, 3), */
    },
    borderText:{
      borderBottom: '2px solid #387BAA',
  },
    overrides: {
        MuiCardContent: {
          root: {
            padding: 0,
            "&:last-child": {
              paddingBottom: 0,
           },
          },
        },
      }, 
      
}));


function rand() {
    return Math.round(Math.random() * 20) - 10;
}