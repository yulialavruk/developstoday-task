import React, { useState, MouseEvent } from "react";
import styled from "styled-components";
import { Textarea, Button } from "./ui/ui";
// import { PostsType } from "../interfaces/index";

type Props = {
  post: any;
  createComment: (id: number, comment: string) => void;
};

export const PostDetails: React.FC<Props> = ({ post, createComment }) => {
  const [comment, setComment] = useState("");

  const onCreateComment = (e: MouseEvent<HTMLElement>) => {
    e.preventDefault();
    createComment(post.id, comment);
  };

  return (
    <PostDetailsWrapper>
      <h3>{post.title}</h3>
      <p>{post.body}</p>
      <h4>Comments:</h4>
      {post.comments &&
        post.comments.map((item: any) => <p key={item.id}>{item.body}</p>)}
      <Textarea value={comment} onChange={(e) => setComment(e.target.value)} />
      <Button type="button" onClick={onCreateComment} disabled={comment === ""}>
        Submit
      </Button>
    </PostDetailsWrapper>
  );
};

const PostDetailsWrapper = styled.div`
  font-size: 20px;
`;
