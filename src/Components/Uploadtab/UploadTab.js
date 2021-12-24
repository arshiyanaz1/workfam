import React, { useState, useEffect } from 'react'
import Box from '@mui/material/Box';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import './UploadTab.scss'
import { addCardGallery } from '../../Redux/actions/cardAction'
import { useDispatch } from 'react-redux'
import { useDropzone } from 'react-dropzone';
import { useStyle } from '../../Assets/commonAssets';



const UploadTab = ({ handleClose }) => {
    const dispatch = useDispatch();
    const classes = useStyle();
    const [files, setFiles] = useState([])

    const { getRootProps, getInputProps } = useDropzone({
        accept: "image/*",
        onDrop: (acceptedFiles) => {
            setFiles(
                acceptedFiles.map((file) =>
                    Object.assign(file, {
                        preview: URL.createObjectURL(file),
                    })
                )
            )
        },
    })

    const images = files.map((file) => (
        <div key={file.name}>
            <div>
                <img src={file.preview} style={{ width: "200px" }} alt="preview" />
            </div>
        </div>
    ))

    function selectImage() {
        dispatch(addCardGallery(files));
        handleClose()
    }
    return (
        <>

            <CardContent className={classes.uploadCont}>
                <div >{images}</div>
                <div {...getRootProps()} className='textCont'>
                    <input {...getInputProps()} />
                    <h3 className='heading'>DROP FILES HERE OR CLICK TO UPLOAD</h3>
                    <p className='drag'>Drag files and folder here to upload or click here to browse image from your computer</p>
                    <p className="custom-file-upload" style={{color: 'white', fontSize: '14px'}}>Select a photo from your computer</p>
                </div>
            </CardContent>
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', borderTop: '1px solid #dedede', padding: 3 }}   >
                <Button variant='contained' className={classes.buttonGray} onClick={handleClose}>close</Button>
                <Button variant='contained' className={classes.buttonBlue} onClick={selectImage}>Select</Button>
            </Box>
        </>
    )
}
export default UploadTab
