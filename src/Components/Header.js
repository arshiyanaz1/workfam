import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import Badge from '@mui/material/Badge';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MailIcon from '@mui/icons-material/Mail';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import NotificationsIcon from '@mui/icons-material/Notifications';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import MoreIcon from '@mui/icons-material/MoreVert';
import Logo from '../Assets/images/logo1.png'


export default function PrimarySearchAppBar() {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

    const isMenuOpen = Boolean(anchorEl);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

    const handleProfileMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMobileMenuClose = () => {
        setMobileMoreAnchorEl(null);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
        handleMobileMenuClose();
    };

    const handleMobileMenuOpen = (event) => {
        setMobileMoreAnchorEl(event.currentTarget);
    };

    const menuId = 'primary-search-account-menu';
    const renderMenu = (
        <Menu
            anchorEl={anchorEl}
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            id={menuId}
            keepMounted
            transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            open={isMenuOpen}
            onClose={handleMenuClose}
        >
            <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
            <MenuItem onClick={handleMenuClose}>My account</MenuItem>
        </Menu>
    );



    const mobileMenuId = 'primary-search-account-menu-mobile';
    const renderMobileMenu = (
        <Menu
            anchorEl={mobileMoreAnchorEl}
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            id={mobileMenuId}
            keepMounted
            transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            open={isMobileMenuOpen}
            onClose={handleMobileMenuClose}
        >
            <MenuItem>
                <IconButton size="large" aria-label="show 4 new mails" color="inherit">
                    <Badge badgeContent={4} color="error">
                        <MailIcon />
                    </Badge>
                </IconButton>
                <p>Messages</p>
            </MenuItem>
            <MenuItem>
                <IconButton
                    size="large"
                    aria-label="show 17 new notifications"
                    color="inherit"
                >
                    <Badge badgeContent={17} color="error">
                        <NotificationsIcon />
                    </Badge>
                </IconButton>
                <p>Notifications</p>
            </MenuItem>
            <MenuItem onClick={handleProfileMenuOpen}>
                <IconButton
                    size="large"
                    aria-label="account of current user"
                    aria-controls="primary-search-account-menu"
                    aria-haspopup="true"
                    color="inherit"
                >
                    <AccountCircle />
                </IconButton>
                <p>MR</p>
            </MenuItem>
        </Menu>
    );

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar elevation='0' position="static" sx={{ bgcolor: "white",    borderBottom:"1px solid #f2f3f4"}}>
                <Toolbar >
                    <Box component="img"
                        sx={{
                            height: 40,
                        }}
                        alt="logo"
                        src={Logo} />
{/*                         <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448.87 303.85"><defs><style>.cls-1{fill:#387baa;}</style></defs><title>workfam-w</title><path class="cls-1" d="M524,220c-105.65-53.9-351.76-76.94-409.3-36C-2,267.16,222.79,459,277.56,466.94c32.1,1.33,48.15-18.07,48.15-43.65,0-27.33-16.78-67-25.62-92.14,0,0,105,119.76,135.46,122.47,43.19,3.85,81.56-39.86-71-204-29.12-36.71-43.68-13.68-45.11-3.37-2.7,19.56,146.24,156.27,109.59,158.56-11.28.71-105.9-101.64-135.16-140.64-22.11-29.48-28.93-48-50.35-41C201.69,236.75,278,346.18,281.73,397.38c2.54,35-126.4-77.53-133.7-141.78-5.59-49.24,65.34-55.5,139-49.17,58.11,5,150,25.77,180.94,46.29,7.76,5.15,84.78-18,56-32.67" transform="translate(-81.56 -163.15)"/></svg>
 */}                    <Box sx={{ flexGrow: 1 }} />
                    <Box sx={{ display: { xs: 'none', md: 'flex', lg: 'inline-flex' }, alignItems: 'center' }}>
                        <IconButton size="large" aria-label="show 4 new mails" color="inherit" style={{paddingRight:15}}>
                            <Badge badgeContent={4} color="error">
                                <ChatBubbleOutlineOutlinedIcon style={{ fill: 'black' }} />
                            </Badge>
                        </IconButton>
                        <IconButton
                            size="large"
                            aria-label="show 17 new notifications"
                            color="inherit"
                            style={{paddingRight:15}}
                        >
                            <Badge badgeContent={17} color="error">
                                <NotificationsOutlinedIcon style={{ fill: 'black' }} />
                            </Badge>
                        </IconButton>
                        <Typography
                            variant="p"
                            noWrap
                            component="div"
                            color='black'
                            sx={{ display: { xs: 'none', md: 'flex', lg: 'inline-flex' } }}
                        >
                            MR
                        </Typography>
                    </Box>
                    <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="show more"
                            aria-controls={mobileMenuId}
                            aria-haspopup="true"
                            onClick={handleMobileMenuOpen}
                            color="inherit"
                        >
                            <MoreIcon />
                        </IconButton>
                    </Box>
                </Toolbar>
            </AppBar>
            {renderMobileMenu}
            {renderMenu}
        </Box>
    );
}
