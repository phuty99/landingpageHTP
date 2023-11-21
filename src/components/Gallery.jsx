import React,{ useState } from 'react'
// mui
import {
    Box,
    Stack,
} from "@mui/material";
// carousel
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
// components
import Title from './Title'
import Paragraph from './Paragraph'


const Gallery = () => {
    
    const [currentIndex, setCurrentIndex] = useState();

    const imageData = [
        {
            alt: 'image1',
            url: 'https://hatnhuatanhung.vn/wp-content/uploads/2020/11/hat-nhua-dung-de-lam-gi-3.jpg'
        },
        {
            alt: 'image2',
            url: 'https://pgn.com.vn/wp-content/uploads/2018/10/hat-nhua-sp.jpg'
        },
        {
            alt: "image3",
            url: 'https://voimienbac.com.vn/uploads/unnamed%20(9).png'
        },
        {
            alt: "image4",
            url: 'https://khoangsanvietnam.com.vn/sites/default/files/bot-mau-pha-son-nuoc-la-gi-cach-dung-bot-mau-pha-son-nuoc.jpg'
        },
        {
            alt: "image5",
            url: 'https://teflonducvuong.com/upload/news/tin_tuc/hat-nhua-de-lam-gi.jpg'
        },
    ];
  
    const renderSlides = imageData.map((image) => (
    <div key={image.alt}>
        <img src={image.url} alt={image.alt} />
    </div>
    ));


    const handleChange = (index) => {
        setCurrentIndex(index);
    }

    return (
        <Stack
        direction='column'
        justifyContent= 'center'
        alignItems= 'center'
        sx={{
            py: 8,
            px: 2,
            display: { xs: 'flex'},
        }}
        >
            <Box
            component='section'
            sx={{
                paddingBottom: 3,
            }}
            >
                <Title 
                text={
                    'ĐA DẠNG SẢN PHẨM'
                }
                textAlign={'center'}
                />
                <Paragraph text={
                    'Cung cấp đầy đủ chủng loại phụ gia ngành nhựa, hạt nhựa màu, bột màu, hóa chất tẩy trắng quang học'
                } 
                maxWidth = {'sm'}
                mx={'auto'}
                textAlign={'center'}
                />
            </Box>
            
            <Box sx={{ 
                maxWidth: 700,
                width: '100%',
            }}>
                <Carousel
                centerSlidePercentage={40}
                thumbWidth={180}
                dynamicHeight={false}
                centerMode={false}
                showArrows={false}
                autoPlay={false}
                infiniteLoop={true}
                selectedItem={imageData[currentIndex]}
                onChange={handleChange}
                className="carousel-container"
                >
                {renderSlides}
                </Carousel>
            </Box>
        </Stack>
    )
}

export default Gallery