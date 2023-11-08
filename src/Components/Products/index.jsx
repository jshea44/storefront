import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from '@mui/material';
import { useSelector } from 'react-redux';

function Products() {
  const state = useSelector((state) => state.products);

  return (
    <>
      <div>
        {state.products.map((product, index) => (
          <Card key={index} size="sm">
            <CardMedia
              component="img"
              alt="product image"
              height="140"
              width="140"
              image="https://placehold.co/600x400"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {product.name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {product.description}
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Add to Cart</Button>
            </CardActions>
          </Card>
        ))}
      </div>
    </>
  );
}

export default Products;
