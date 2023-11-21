import React from 'react'
// components
import Title from './Title'
import Paragraph from './Paragraph'
import { Stack, Typography } from "@mui/material";
// images
import hatMauImg from '../assets/anhnganh2.jpeg'
import phuGiaNhua from '../assets/anhnganh.jpeg'
import botMau from '../assets/bot-mau.jpeg'
import { Box } from '@mui/system';


const Content = () => {
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
              'SẢN PHẨM CỦA CHÚNG TÔI'
          }
          textAlign={'center'}
          />
          <Paragraph text={
              'Hồng Thịnh Phát chuyên sản xuất và cung cấp phụ gia, hạt màu, bột màu, chất tẩy trắng phục vụ ngành nhựa'
          } 
          maxWidth = {'sm'}
          mx={'auto'}
          textAlign={'center'}
          />
        </Box>
        
        <Box sx={{ 
            maxWidth: 900,
            width: '100%',
            display: 'flex',
            justifyContent: 'space-around'

        }}>
          <Box marginLeft='10%' marginRight='10%'>
            <img
              src={hatMauImg}
              alt="hatMauImg"
              style={{ 
                width: "100%"
              }}
            />
            <Typography
                variant='h6'
                component= 'h6'
                marginLeft='10%'
                >
                    Hạt Nhựa Màu
            </Typography>
          </Box>
          <Box marginRight='10%'>
            <img
              src={botMau}
              alt="botMau"
              style={{ 
                width: "95%",
              }}
            />
            <Typography
                variant='h6'
                component= 'h6'
                marginLeft='25%'
                >
                    Bột Màu
            </Typography>
          </Box>
          <Box marginRight='10%'>
            <img
              src={phuGiaNhua}
              alt="phuGiaNhua"
              style={{ 
                width: "100%",
              }}
            />
            <Typography
                variant='h6'
                component= 'h6'
                marginLeft='10%'
                >
                    Phụ Gia Nhựa
            </Typography>
          </Box>
        </Box>
    </Stack>
    );
}

export default Content