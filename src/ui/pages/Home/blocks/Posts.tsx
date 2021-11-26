import { Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { useSelector } from 'react-redux';
import { postSelector } from '../../../../services/selectors';

interface iProps {}

const Posts: React.FC<iProps> = (): JSX.Element => {
  const { posts } = useSelector(postSelector);

  console.log(posts);
  return (
    <Box component="div" display="flex" justifyContent="space-around" sx={{ width: '100%' }}>
      {posts.map((post) => (
        <Card key={post.title} sx={{ width: '18em', maxWidth: '20em' }}>
          <CardMedia component="img" alt="green iguana" height="140" image={post.image} />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {post.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {post.content.substring(0, 75)}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Share</Button>
            <Button size="small">Learn More</Button>
          </CardActions>
        </Card>
      ))}
    </Box>
  );
};

export default Posts;
