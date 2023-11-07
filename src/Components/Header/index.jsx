import { Box, AppBar, Typography, Toolbar } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

function Header() {
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar>
          <Toolbar>
            <Typography
              variant="h3"
              noWrap
              sx={{ display: { xs: 'none', sm: 'block' } }}
            >
              Storefront
            </Typography>
            <ShoppingCartIcon />
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
}

export default Header;
