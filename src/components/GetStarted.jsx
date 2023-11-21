import React from 'react'
import { 
    Box,
    Grid,
    styled,
    Typography,
} from '@mui/material'
import Title from './Title'
// img
import imgDetail from '../assets/Bot_mau_vo_co_sunmaxx.jpeg';
import imgDetail2 from '../assets/PVC_Compound_3.jpeg';


const GetStarted = () => {

    const CustomGridItem = styled(Grid) ({
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
    })
    
    const CustomTypography = styled(Typography) ({
        fontSize: '1.1rem',
        textAlign: 'start',
        lineHeight: '1.5',
        color: '#515151',
        marginTop: '1.5rem',
    })

    return (
            
        <Grid container spacing={{ xs: 4, sm: 4, md: 0 }}   
        sx={{
            py: 10,
            px: 2,
             
        }}
        >
            <CustomGridItem item xs={12} sm={8} md={6} 
            component = 'section'
           
            >
                <Box component='article'
                sx={{
                    px: 4,
                }}
                >
                    <Title
                    text={
                        'Công Ty TNHH SX TM DV Hồng Thịnh Phát'
                    }
                    textAlign={'start'}
                    />
                    <CustomTypography>
                    là một trong những doanh nghiệp hàng đầu tại Việt Nam về lĩnh vực sản xuất và phân phối phụ gia nhựa, phụ gia cao su, hạt màu:<br/>
                    + Phụ gia nhựa: Tăng trơn Slip, chất chống oxi hóa, chất hấp thu UV, chất ổn định ánh sáng...<br/>
                    + Bột màu công nghiệp: Bột màu công nghiệp các loại....<br/>
                    + Hạt nhựa màu: đen, trắng, vàng, các loại màu...<br/>
                    </CustomTypography> 
                </Box>

            </CustomGridItem>
            
            <Grid item xs={12} sm={4} md={6}>
                <img src={imgDetail} alt="" 
                style={{
                    width: '100%',
                }}
                />
            </Grid>

            <Grid item xs={12} sm={4} md={6}
            sx={{
                order: {xs: 4, sm: 4, md: 3}
            }}
            >
                <img src={imgDetail2} alt="" 
                style={{ 
                    width: "100%",
                }}
                />
            </Grid>

            <CustomGridItem item xs={12} sm={8} md={6}
            sx={{
                order: {xs: 3, sm: 3, md: 4}
            }}
            >
                <Box component='article'
                sx={{
                    px: 4,
                }}
                >
                    <CustomTypography>
                    + Quy mô nhà xưởng, kho hàng 500m2 với hệ thống máy móc, trang thiết bị hiện đại, đạt chuẩn <br/>
                    + Dây chuyền sản xuất 50 - 100 tấn/ tháng đáp ứng được mọi số lượng đơn hàng theo yêu cầu <br />
                    + Cung cấp đầy đủ chủng loại phụ gia ngành nhựa, hạt nhựa màu, bột màu, hóa chất tẩy trắng quang học <br />
                    + Toàn bộ sản phẩm đều đạt chất lượng tốt nhất, an toàn để sử dụng và có thông tin rõ ràng <br />
                    </CustomTypography>
                </Box>
            </CustomGridItem>
        </Grid>
    )
}

export default GetStarted;