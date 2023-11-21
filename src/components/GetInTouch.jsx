import React from 'react'
import {  
    Button,
    Stack,
    Typography
} from '@mui/material'
import Title from './Title'
import { Link } from 'react-router-dom'

const GetInTouch = () => {

    return (
        <Stack 
        component='section'
        direction="column"
        justifyContent= 'center'
        alignItems='center'
        sx={{
            py: 10,
            mx: 6,
        }}
        >
            <Title 
            text={
                'THÔNG TIN LIÊN HỆ'
                } 
            textAlign={'center'}
            />
            <Typography 
            maxWidth = {'sm'}
            mx={0}
            textAlign={'center'}
            >
                Luôn nỗ lực không ngừng để mang lại các sản phẩm với mức giá tốt nhất cho các khách hàng sỉ, lẻ trên toàn quốc. <br/>
                Chúng tôi sẵn sàng tư vấn giúp khách hàng lựa chọn được sản phẩm phù hợp với mức giá cạnh tranh.
            </Typography>
            <Button component={Link} 
            to={'/contact'}
            variant="contained" 
            type="submit"
            size="medium"
            sx= {{ 
                fontSize: '0.9rem',
                textTransform: 'capitalize', 
                py: 2,
                px: 4,
                mt: 3, 
                mb: 2,
                borderRadius: 0,
                backgroundColor: '#14192d',
                "&:hover": {
                    backgroundColor: '#1e2a5a',
                }
            }}
            >
                liên hệ ngay!
            </Button>
 
        </Stack>
    )
}

export default GetInTouch;