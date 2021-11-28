import { Button, Card, CardActions, CardContent, CardMedia, Typography, Link } from '@mui/material';
import React from 'react';
import { iPost } from '../../Post/common/@types';

interface iProps {
  post: iPost;
}

const Post: React.FC<iProps> = ({ post }): JSX.Element => {
  return (
    <Card sx={{ width: '20em', maxWidth: '22em', marginBottom: '1em' }}>
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
        <Button size="small">Like</Button>
        <Link
          component={Button}
          size="small"
          href={`findme/post/${post.id}`}
          underline="none"
          target="_blank"
        >
          Read More
        </Link>
      </CardActions>
    </Card>
  );
};

export default React.memo(Post);
