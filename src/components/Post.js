import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Link } from "@material-ui/core";

export default function Post(props) {
  const useStyles = makeStyles((theme) => ({
    root: {
      width: "80%",
      // padding: "10px 20%",
      margin: "10px 0",
      border: "1px solid red",
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
    textAlign: {
      textAlign: "center",
    },
    spaceX: {
      padding: "0 10%",
    },
    spaceY: {
      marginTop: "20px",
    },
    btnPos: {
      margin: "0 auto",
      display: "block",
    },
  }));
  const classes = useStyles();
  return props.posts.map((post) => {
    return (
      <Card
        key={post.id}
        variant="outlined"
        className={
          (classes.root, classes.spaceX, classes.spaceY, classes.textAlign)
        }
      >
        <CardContent>
          <Typography variant="h5" component="h2">
            {post.title}
          </Typography>
          <Typography variant="body2" component="p">
            {post.body}
          </Typography>
        </CardContent>
        <CardActions>
          <Link href={`post/${post.id}`} className={classes.btnPos}>
            <Button variant="outlined" color="primary">
              see details
            </Button>
          </Link>
        </CardActions>
      </Card>
    );
  });
}
