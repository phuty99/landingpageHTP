import React from 'react'
import { 
  Box, 
  Stack, 
  styled, 
  Typography,
} from '@mui/material'
import Link from '@mui/material/Link';
import FooterTitle from './FooterTitle'
import FooterLink from './FooterLink'
import FacebookIcon from '@mui/icons-material/Facebook';
import MailOutlineIcon from '@mui/icons-material/MailOutline';

const Footer = () => {

  const StackColumn = styled(Stack) (() => ({
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    flex: 1,
    gap: 8,
    textAlign: 'center',
  }));

  const BoxRow = styled(Box) (({ theme }) => ({
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: '#ededed',
    flex: 1,
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
      gap: 30,
    }
  }));

  return (
    
    <BoxRow 
    component = 'footer'
    sx={{
      py: 4,
      px: 2,
    }}
    >
      <StackColumn>
        <FooterTitle text={'Địa Chỉ'} />
        <FooterLink 
        text={'28 Nguyễn Văn Hoài - Ấp Bàu Tre 2 - Xã Tân An Hội - H. Củ Chi - TP.HCM'} 
        />
        <FooterLink 
        text={'0979-932-036'} 
        />
        <FooterLink 
        text={'invoice.hongthinhphat@gmail.com'} 
        />
      </StackColumn>

      <StackColumn>
        <FooterTitle text={'Công Ty TNHH SX TM DV Hồng Thịnh Phát'} />
        <Stack 
        direction='row' 
        width= '70px'
        maxWidth='100%'
        justifyContent='space-between'
        >
          <Link href="#" variant="body2" 
          sx={{
            color: '#414141',
            "&:hover": {
              color: '#1c2859',
            }
          }}
          >
            <MailOutlineIcon />  
          </Link> 
          <Link href="#"variant="body2" 
          sx={{
            color: '#414141',
            "&:hover": {
              color: '#1c2859',
            }
          }}
          >
            <FacebookIcon />
          </Link> 
        </Stack>
        <Typography 
        variant='caption'
        component='p' 
        >
          &copy; 2022 Hồng Thịnh Phát Inc.
        </Typography>
      </StackColumn>
    </BoxRow>
  )
}

export default Footer