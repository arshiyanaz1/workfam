import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { useDispatch, useSelector } from 'react-redux';
import { getCardGallery } from '../../Redux/actions/cardAction'
import ButtonComponent from '../Button'
import ButtonBase from '@material-ui/core/ButtonBase';
import AddIcon from '@mui/icons-material/Add';
import Modal from '@mui/material/Modal';
import ImageLists from '../ImageList/ImageList';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import './Card.scss'

import UploadTab from '../Uploadtab/UploadTab.js';
import GalleryTab from '../GalleryTab/GalleryTab';

import { useStyles } from '../../Assets/modalAsset'
import { useStyle } from '../../Assets/commonAssets'

function getModalStyle() {
    const top = 50;
    const left = 50;
    return {
        top: `${top}%`,
        left: `${left}%`,
        transform: `translate(-${top}%, -${left}%)`,
    };
}

export default function MediaControlCard() {
    const classes = useStyles();
    const clas = useStyle();
    const [open, setOpen] = useState(false);
    const [galleryTab, setGalleryTab] = useState(true);
    const [uploadTab, setUploadTab] = useState(false);
    const dispatch = useDispatch()
    const galleryData = useSelector(state => state.cardDash)

    const [modalStyle] = useState(getModalStyle);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const gallery = () => {
        setGalleryTab(true);
        setUploadTab(false);
    }
    const uploadImage = () => {
        setGalleryTab(false);
        setUploadTab(true);
    }

    useEffect(() => {
        dispatch(getCardGallery());
    }, [dispatch])
    return (
        <Card className={clas.card}>
            <Box className={clas.cardBox} >
                <CardContent sx={{ flex: '1 0 auto' }}>
                    <h3 className='title'>
                        Set up your workperk
                    </h3>
                    <div className='sub-title'>
                        work perks set up will only take a minutes
                    </div>
                    <p className='imageTitle'>Image</p>
                    <Box className={clas.center}>

                        <Card className={clas.cardModal}>

                            <ButtonBase
                                onClick={handleOpen}
                                className={clas.buttonBase}
                            >
                                <AddIcon sx={{ fontSize: 30, }} />
                            </ButtonBase>

                            <Modal
                                open={open}
                                onClose={handleClose}
                                aria-labelledby="modal-modal-title"
                                aria-describedby="modal-modal-description"
                            >
                                <Card style={modalStyle} className={classes.paper} >
                                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                                        <h2 className='cardHeading'>Select Image</h2>
                                        <CloseOutlinedIcon onClick={handleClose} className={clas.p20} />
                                    </div>

                                    <Box className={clas.GUBox}>
                                        <div className={clas.p30} >
                                            <h5 className={galleryTab ? classes.borderText : ''} onClick={gallery}>
                                                Gallery
                                            </h5>
                                        </div>

                                        <h5 className={uploadTab ? classes.borderText : ''} onClick={uploadImage}>
                                            Upload
                                        </h5>
                                    </Box>

                                    {galleryTab && <GalleryTab handleClose={handleClose} />}

                                    {uploadTab && <UploadTab galleryTab={galleryTab} handleClose={handleClose} />}
                                </Card>
                            </Modal>

                        </Card>
                        <ImageLists Dash={galleryData} />


                    </Box>
                </CardContent>
                <Box className={clas.nextBtn}>
                    <ButtonComponent text='Next' color='white' backgroundColor={'#387BAA'}></ButtonComponent>
                </Box>
            </Box>
            <Box className={clas.blueColum}>
            </Box>
        </Card>
    );
}
