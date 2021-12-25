import React  from 'react'
import Box from "@mui/material/Box";
import ImageListItem, {
    imageListItemClasses
} from "@mui/material/ImageListItem";
import { createTheme, ThemeProvider } from "@mui/material/styles";


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
const ImageLists = ({Dash}) => {


    return (
        <ThemeProvider theme={theme}>
        <Box
            sx={{
                height: '30vh',
                backgroundColor: "white",
                display: "grid",
                overflow: 'auto',
                width: '100%',
                gridTemplateColumns: {
                    mobile: "repeat(1, 1fr)",
                    bigMobile: "repeat(1, 1fr)",
                    tablet: "repeat(3, 1fr)",
                    desktop: "repeat(6, 1fr)"
                },
                [`& .${imageListItemClasses.root}`]: {
                    display: "flex",
                    flexDirection: "column"
                }
            }}
        >
            {Dash.map((item) => (
         <ImageListItem  key={item.img} style={{ borderRadius: 10 }}>
         <img   style={{ height: 80, width: 80, margin: 5,borderRadius:10 }} srcSet={`${item.mime};${item.image}`} alt={'Image'}  loading="lazy"  />
        
    </ImageListItem>
            ))}
        </Box>
    </ThemeProvider>
    )
}

export default ImageLists





