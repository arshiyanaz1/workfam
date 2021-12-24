import React, { useState } from 'react'
import Button from '@mui/material/Button';
import './GalleryTab.scss'
import { useSelector, useDispatch } from 'react-redux';
import { addDashFromGallery } from '../../Redux/actions/cardAction'
import Box from "@mui/material/Box";
import ImageListItem, {
    imageListItemClasses
} from "@mui/material/ImageListItem";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useStyle } from '../../Assets/commonAssets';


const theme = createTheme({
    breakpoints: {
        values: {
            mobile: 0,
            bigMobile: 350,
            tablet: 650,
            desktop: 900
        }
    }
});

const GalleryTab = ({ handleClose }) => {
    const dispatch = useDispatch();
    const classes = useStyle();
    const [item, setItem] = useState([])
    const [selected, setSelected] = useState(false)
    const dash = useSelector(state => state.cardReducer)


    const submit = () => {
        dispatch(addDashFromGallery(item));
        handleClose()
    }
    const setClick = (item) => {
            console.log('item',item)
            setItem(item);
   /*      const task = dash.map(i => {
            console.log('i',i)
            if (i.image == item.image) {
                return {
                     selected: !selected
                }

            }
        });
        console.log('task', task)
        item.style.border = "1px solid blue"; */
    }
    return (
        <>
            <ThemeProvider theme={theme}>
                <Box
                    sx={{
                        height: '40vh',
                        backgroundColor: "white",
                        display: "grid",
                        overflow: 'auto',
                        width: '100%',
                        gridTemplateColumns: {
                            mobile: "repeat(1, 1fr)",
                            bigMobile: "repeat(2, 1fr)",
                            tablet: "repeat(5, 1fr)",
                            desktop: "repeat(6, 1fr)"
                        },
                        [`& .${imageListItemClasses.root}`]: {
                            display: "flex",
                            flexDirection: "column"
                        }
                    }}
                >
                    {dash.map((item) => (
                        <ImageListItem onClick={() => setClick(item)} key={item.img} style={{flexWrap:'wrap'}}>
                            <img src={`${item.mime};${item.image}`} style={{ height: 130, width: 130, margin: 5 }} className={item.selected ? classes.selected : null} alt={'Image'} loading="lazy" />
                        </ImageListItem>
                    ))}
                </Box>
            </ThemeProvider>

            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', borderTop: '1px solid #dedede', padding: 3, }}   >
                <Button variant='contained' className={classes.buttonGray} onClick={handleClose}>close</Button>
                <Button variant='contained' className={classes.buttonBlue} onClick={submit}>Select</Button>

            </Box>
        </>
    )
}

export default GalleryTab
