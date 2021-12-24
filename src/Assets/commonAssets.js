
import { makeStyles } from '@material-ui/core/styles';

export const useStyle = makeStyles(theme => ({
    buttonGray: {
        borderRadius: 10, color: 'gray', backgroundColor: '#cecece', padding: 8, fontFamily: 'Roboto Slab', marginRight: 15
    },
    buttonBlue: {
        borderRadius: 10, color: 'white', backgroundColor: '#387BAA', padding: 8, fontFamily: 'Roboto Slab', marginRight: 15
    },
    uploadCont:{
        display: 'flex', flexDirection: 'column', margin: 15, border: '3px dashed #bebebe', minHeight: '35vh', alignItems: 'center', justifyContent: 'center'
    },
    /* card */
    buttonBase:{ alignItems: 'center', justifyContent: 'center', height: 80, width: 75, backgroundColor: '#f8f9fb' },
    card:{ display: 'flex', width: '60%', height: '60vh', marginTop: '80px', position: 'relative' },
    cardBox:{ display: 'flex', flexDirection: 'column', pl: 2, flexBasis: '70%' },
    center:{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start' },
    cardModal:{ height: 80, width: 80, marginRight: 2, alignItems: 'center', justifyContent: 'flex-start' },
    p20:{ paddingRight: '20px' },
    nextBtn:{ display: 'flex', alignItems: 'center', paddingLeft: '8px', paddingBottom: '32px' },
    blueColum:{ flexBasis: '30%', background: '#387BAA', width: '30%', height: 'inherit', alignItems: 'flex-end', justifyContent: 'flex-end', position: 'absolute', right: 0 },
    GUBox:{ display: 'flex', alignItems: 'center', borderBottom: '1px solid #888', paddingLeft: 20 },
    p30:{ paddingRight: 30, },
    selected: {
        border: '1px solid blue',
      }


}));