import React from "react";
import Link from "next/link";
import styled from "styled-components";
import { PostType } from "../interfaces/index";

type Props = {
  post: PostType;
};

export const PostsItem: React.FC<Props> = ({ post }) => (
  <PostItem>
    <Link href={`/posts/${post.id}`}>
      <PostItemLink>
        <h3>{post.title}</h3>
        <p>{post.body}</p>
      </PostItemLink>
    </Link>
  </PostItem>
);

const PostItem = styled.div`
  width: 200px;
  min-height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin: 15px;
  box-shadow: 0 0 10px hsla(0, 0%, 47.8%, 0.5);
`;

const PostItemLink = styled.a`
  display: inline-block;
  font-size: 20px;
  cursor: pointer;

  :hover {
    opacity: 0.7;
  }
`;
