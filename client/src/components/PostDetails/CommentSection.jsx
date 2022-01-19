import { Button, TextField, Typography } from "@material-ui/core";
import React, { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { commentPost } from "../../actions/posts";
import useStyles from "./styles";

const CommentSection = ({ post }) => {
  const classes = useStyles();
  const [comments, setComments] = useState(post?.comments);
  const [comment, setComment] = useState("");
  const dispatch = useDispatch();
  const user = JSON.parse(localStorage.getItem("profile"));
  const myRef = useRef();
  const executeScroll = () => {
    myRef.current.scrollIntoView();
  };

  const handleClick = async () => {
    const finalComment = `${user.result.name} : ${comment}`;
    const newComments = await dispatch(commentPost(finalComment, post._id));
    setComments(newComments);
    executeScroll();
    setComment("");
  };

  return (
    <div>
      <h1>Comment Section: </h1>
      <div>
        <div className={classes.outContainer}>
          <div className={classes.inContainer}>
            <Typography gutterBottom variant="h6">
              Comments
            </Typography>
            {comments.map((c, i) => (
              <Typography key={i} gutterBottom variant="subtitle1">
                <strong>{c.split(": ")[0]}</strong>
                {c.split(":")[1]}
              </Typography>
            ))}
            <div ref={myRef} />
          </div>
          {user && (
            <div style={{ width: "70%" }}>
              <Typography gutterBottom variant="h6">
                Write a Comment
              </Typography>
              <TextField
                fullWidth
                row={4}
                variant="outlined"
                label="Comment"
                multiline
                value={comment}
                onChange={(e) => setComment(e.target.value)}
              />
              <Button
                style={{ marginTop: "10px" }}
                fullWidth
                disabled={!comment}
                variant="contained"
                onClick={handleClick}
                color="primary"
              >
                Comment
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CommentSection;
