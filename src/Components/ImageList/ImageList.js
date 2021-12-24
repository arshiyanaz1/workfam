import React,{useRef,useEffect}  from 'react'
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';


const ImageLists = ({Dash}) => {
    const inputEl = useRef();


    return (
        <ImageList sx={{ width: '90%', height: '60%' }} cols={5} rowHeight={100}>
            {Dash?Dash.map((item) => (
                <ImageListItem ref={inputEl}  key={item.img} style={{ borderRadius: 10 }}>
                     <img   srcSet={`${item.mime};${item.image}`} alt={'Image'}  loading="lazy" style={{borderRadius:10}} />
                    
                </ImageListItem>
            )): null}

        </ImageList>
    )
}

export default ImageLists




