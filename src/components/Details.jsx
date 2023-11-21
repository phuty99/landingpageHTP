import React from 'react'
import {  
    Box,
    Button,
    Stack,
    TextField
} from '@mui/material'
import Title from './Title'
import Paragraph from './Paragraph'
import { useForm } from '@formspree/react';

const Details = () => {
    const [state, handleSubmit] = useForm('xjvlbweq');

    return (
        <Stack 
        component='section'
        direction="column"
        justifyContent= 'center'
        alignItems='center'
        sx={{
            py: 10,
            px: 2,
        }}
        >
            <Title 
            text={
                'Hãy Liên Hệ Với Chúng Tôi'
                } 
            textAlign={'center'}
            />
            <Paragraph 
            text={
                'Chúng tôi sẵn sàng tư vấn giúp khách hàng lựa chọn được sản phẩm phù hợp với mức giá cạnh tranh.'
            }
            maxWidth = {'sm'}
            mx={0}
            textAlign={'center'}
            />

            <Box 
            component="form" 
            noValidate 
            onSubmit={handleSubmit} 
            sx={{ 
                mt: 1,
                py: 2
            }}>
                <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="email"
                    label="địa chỉ email"
                    name="email"
                    autoComplete="email"
                    autoFocus
                />
                <TextField
                    margin="normal"
                    required
                    fullWidth
                    name="phone"
                    label="số điện thoại"
                    type="phone"
                    id="phone"
                    autoComplete="current-phone"
                />
                <Button 
                variant="contained" 
                fullWidth
                type="submit"
                size="medium"
                sx= {{ 
                    fontSize: '0.9rem',
                    textTransform: 'capitalize', 
                    py: 2,
                    mt: 3, 
                    mb: 2,
                    borderRadius: 0,
                    backgroundColor: '#14192d',
                    "&:hover": {
                        backgroundColor: '#1e2a5a',
                    }
                }}
                >
                    Gửi
                </Button>
            </Box>

        </Stack>
    )
}

export default Details;