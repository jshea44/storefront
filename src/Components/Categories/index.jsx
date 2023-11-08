import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { useDispatch } from 'react-redux';
import { selectCategory } from '../../../src/store/categories';

function Categories() {
  const dispatch = useDispatch();

  const handleTabChange = (event, newValue) => {
    dispatch(selectCategory(newValue));
  };

  const categories = [
    {
      name: 'ALL',
      displayName: 'All',
    },
    {
      name: 'SHIRTS',
      displayName: 'Shirts',
      description: 'Cool Shirts!',
    },
    {
      name: 'PANTS',
      displayName: 'Pants',
      description: 'Cool Pants!',
    },
    {
      name: 'SHOES',
      displayName: 'Shoes',
      description: 'Cool Shoes!',
    },
  ];
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
          {categories.map((category, idx) => (
            <Tab key={idx} label={category.displayName} />
          ))}
        </Tabs>
      </Box>
    </>
  );
}

export default Categories;
