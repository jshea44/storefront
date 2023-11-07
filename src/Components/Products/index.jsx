import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from '@mui/material';
import { useSelector } from 'react-redux';

const productData = [
  {
    name: 'Lizard',
    description:
      'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica',
    image: 'https://placehold.co/600x400',
    category: 'Item One',
  },
  // Add more product data for other categories...
];

function Products() {
  const selectedCategory = useSelector((state) => state.selectedCategory);

  const filteredProducts = productData.filter(
    (product) => product.category === selectedCategory
  );
  return (
    <>
      {filteredProducts.map((product, index) => (
        <Card key={index} size="sm">
          {/* Render product details... */}
          <CardMedia
            component="img"
            alt="product image"
            height="140"
            width="140"
            image="https://placehold.co/600x400"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Lizard
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Add to Cart</Button>
            <Button size="small">Learn More</Button>
          </CardActions>
        </Card>
      ))}
      {/* <Card size="sm">
        <CardMedia
          component="img"
          alt="product image"
          height="140"
          width="140"
          image="https://placehold.co/600x400"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Add to Cart</Button>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card> */}
    </>
  );
}

export default Products;
