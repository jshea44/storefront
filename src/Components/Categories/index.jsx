import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { useDispatch } from 'react-redux';
import { setSelectedCategory } from '../../../src/store/categories';

function Categories() {
  const dispatch = useDispatch();

  const handleTabChange = (event, newValue) => {
    dispatch(setSelectedCategory(newValue));
  };
  return (
    <>
      <Box
        sx={{
          flexGrow: 1,
          bgcolor: 'background.paper',
          display: 'flex',
          height: 50,
        }}
      >
        <Tabs
          variant="scrollable"
          onChange={handleTabChange}
          aria-label="Vertical tabs example"
          sx={{
            borderRight: 1,
            borderColor: 'divider',
            top: 'auto',
            left: 0,
          }}
        >
          <Tab label="Item One" />
          <Tab label="Item Two" />
          <Tab label="Item Three" />
          <Tab label="Item Four" />
          <Tab label="Item Five" />
          <Tab label="Item Six" />
          <Tab label="Item Seven" />
        </Tabs>
      </Box>
    </>
  );
}

export default Categories;
