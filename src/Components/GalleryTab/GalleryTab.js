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
import './GalleryTab.scss';

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
    const dash = useSelector(state => state.cardReducer)


    const submit = () => {
        dispatch(addDashFromGallery(item));
        handleClose()
    }

    const _selected = (e) => {
        const target = e.currentTarget;
        target.classList.toggle('selected')
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
                        <ImageListItem onClick={() => setItem(item)} key={item.img} style={{ flexWrap: 'wrap' }}>
                            <img onClick={_selected} src={`${item.mime};${item.image}`} style={{ height: 120, width: 120, margin: 5 }} className={item.selected ? classes.selected : null} alt={'Image'} loading="lazy" />
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


