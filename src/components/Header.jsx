import React from 'react'
import { Box, Button, styled, Typography } from "@mui/material";
import { Link } from 'react-router-dom'
//img
import headerImg from '../assets/two_hands_holding_shredded_plastic_pieces.png'

const Header = () => {

    const CustomBox = styled(Box) (({ theme }) => ({
        minHeight: '80vh',
        display: 'flex',
        justifyContent: 'center',
        // tamanhos
        gap: theme.spacing(2),
        paddingTop: theme.spacing(10),
        // cor de fundo
        backgroundColor: '#0098ff',
        [theme.breakpoints.down('md')]: {
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
        }
    }));

    const BoxText = styled(Box) (({ theme }) => ({
        flex: '1',
        paddingLeft: theme.spacing(8),
        [theme.breakpoints.down('md')]: {
            flex: '2',
            textAlign: 'center',
            paddingLeft: theme.spacing(2),
            paddingRight: theme.spacing(2),
        },
    }));


  return  (
        <CustomBox component='header'>
            {/*  Box text  */}
            <BoxText 
            component='section'
            >
                <Typography
                variant='h2'
                component= 'h1'
                sx={{
                    fontWeight: 600,
                    color: '#fff',
                }}
                >
                    Công Ty TNHH SX TM DV Hồng Thịnh Phát
                </Typography>

                <Typography
                variant='p'
                component='p'
                sx={{
                    py: 3,
                    lineHeight: 1.6,
                    color: '#fff',
                }}
                >
                    Công Ty TNHH SX TM DV Hồng Thịnh Phát là đơn vị uy tín với nhiều năm kinh nghiệm trong lĩnh vực sản xuất, nhập khẩu và cung cấp các sản phẩm phục vụ ngành nhựa.
                    Sản phẩm chính bao gồm: <br />
                    ❋ Phụ gia ngành nhựa<br />
                    ❋ Hạt nhựa màu<br />
                    ❋ Bột màu
                </Typography>

                <Box>
                    <Button 
                    variant='contained'
                    component={Link} 
                    to={'/contact'}
                    sx={{
                        mr: 2,
                        px: 4, 
                        py: 1,
                        fontSize: '0.9rem',
                        textTransform: 'capitalize',
                        borderRadius: 0,
                        borderColor: '#14192d',
                        color: '#fff',
                        backgroundColor: '#14192d',
                        "&&:hover": {
                            backgroundColor: "#343a55"
                        },
                        "&&:focus": {
                            backgroundColor: "#343a55"
                        }
                    }}
                    >
                        Liên Hệ
                    </Button>
                    <Button 
                    component={Link} 
                    to={'/about'}
                    variant='outlined'
                    sx={{
                        px: 4, 
                        py: 1,
                        fontSize:'0.9rem',
                        textTransform: 'capitalize',
                        borderRadius: 0,
                        color: '#fff',
                        backgroundColor: 'transparent',
                        borderColor: '#fff',
                        "&&:hover": {
                            color: '#343a55',
                            borderColor: '#343a55',
                        },
                        "&&:focus": {
                            color: '#343a55',
                            borderColor: '#343a55',
                        }
                    }}
                    >
                        Tìm hiểu
                    </Button>
                </Box>
            </BoxText>

            <Box sx={theme => ({
                [theme.breakpoints.down('md')]:{
                    flex: '1',
                    paddingTop: '30px',
                    alignSelf: 'center',
                },
                [theme.breakpoints.up('md')]:{
                    flex: '2',
                    alignSelf: 'flex-end',
                },
            })}
            >
                <img
                src={headerImg}
                alt="headerImg"
                style={{ 
                    width: "90%", 
                    marginBottom: "30%",
                }}
                />
            </Box>

        </CustomBox>
    )
}

export default Header