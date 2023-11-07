import { AppBar, Toolbar } from '@mui/material';

function Footer() {
  return (
    <>
      <AppBar
        position="fixed"
        sx={{ flexGrow: 1, display: { top: 'auto', bottom: 0 } }}
      >
        <Toolbar>©Storefront 2023.</Toolbar>
      </AppBar>
    </>
  );
}

export default Footer;
