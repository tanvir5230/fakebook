import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import {
  Card,
  CardContent,
  Typography,
  makeStyles,
  List,
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
  Divider,
  Button,
} from "@material-ui/core";

const PostDetail = (props) => {
  let { id } = useParams();
  let postWithId = [];
  id = parseInt(id);
  if (props.posts.length > 0) {
    postWithId = props.posts.find((post) => post.id === id);
  }
  const useStyles = makeStyles((theme) => ({
    root: {
      textAlign: "center",
      padding: "0 10%",
    },
    btnPos: {
      margin: "10px auto",
      display: "block",
    },
  }));
  const classes = useStyles();
  return (
    <div>
      <Card className={classes.root}>
        <CardContent>
          <Typography variant="h4" component="h1">
            {postWithId.title}
          </Typography>
          <Typography component="p" gutterBottom>
            {postWithId.body}
          </Typography>
        </CardContent>
      </Card>
      <Comments id={id} />
      <Link to="/post">
        <Button variant="outlined" color="primary" className={classes.btnPos}>
          see other posts
        </Button>
      </Link>
    </div>
  );
};

const Comments = (props) => {
  const [comments, setComments] = useState([]);
  const loadComments = () => {
    fetch("http://jsonplaceholder.typicode.com/comments")
      .then((response) => response.json())
      .then((data) => setComments(data));
  };
  useEffect(() => {
    loadComments();
  }, []);
  const id = parseInt(props.id);
  const filteredComments = comments.filter((comment) => comment.postId === id);
  console.log(filteredComments);
  const useStyles = makeStyles((theme) => ({
    root: {
      width: "60%",
      margin: "20px 20%",
      backgroundColor: theme.palette.background.paper,
    },
    inline: {
      display: "inline",
    },
  }));
  const classes = useStyles();
  return filteredComments.map((comment) => {
    return (
      <List key={comment.id} className={classes.root}>
        <ListItem alignItems="flex-start">
          <ListItemAvatar>
            <Avatar src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80" />
          </ListItemAvatar>
          <ListItemText
            primary={comment.name}
            component="span"
            secondary={
              <React.Fragment>
                <Typography
                  component="span"
                  variant="body2"
                  className={classes.inline}
                  color="textSecondary"
                >
                  {comment.body}
                </Typography>
                <Typography component="h5" color="textPrimary">
                  {comment.email}
                </Typography>
              </React.Fragment>
            }
          ></ListItemText>
        </ListItem>
        <Divider />
      </List>
    );
  });
};
export default PostDetail;
